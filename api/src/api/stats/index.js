import moment from "moment";
import { cloneDeep } from "lodash" // Import the entire lodash library

const config = require('../../config');
const { statsDefault, statsSchema, devicesSchema, visitorsSchema } = require('../schemas/stats');

import StatsController from "../../services/stats/lib/controllers/StatsController";
import DebatesController from "../../services/debates/lib/controllers/DebatesController";
import PostsController from "../../services/posts/lib/controllers/PostsController";
import UsersController from "../../services/iam/lib/controllers/UsersController";

const postsAndReactions = (posts) => {
    let nreactions = 0;
    let nposts = 0;

    posts.map(post => {
        nreactions += post.likes + post.dislikes
        nposts += 1
        if (post.replies) {
            const values = postsAndReactions(post.replies);         
            nreactions += values.nreactions;
            nposts += values.nposts;
        }
    })

    return { nreactions, nposts }
}
 
/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.get(
        "/fetchUsersByDevice",
        {
            config,
            schema: {
                description: "fetches the devices used for across all debates on an account",
                tags: ["api"],
                querystring: {
                  id: { type: "number" },
                },
                response: {
                    200: {
                        type: "array",
                        items: devicesSchema,
                    }
                }
            }
        },
        async request => {
            fastify.log.info({ query: request.query }, "[src#api#fetchUsersByDevice] Entering");

            const inputs = { ...request.query };

            // Get all the debates for an account
            const debates = await DebatesController.fetchAllDebates(inputs);

            // Create new the stats for each debate

            const finalDevices = [
                {
                    label: 'Desktop',
                    nb_uniq_visitors: 0,
                    nb_visits: 0
                },
                {
                    label: 'Smartphone',
                    nb_uniq_visitors: 0,
                    nb_visits: 0
                }
            ];

            const response = await debates.map(async debate => {
                inputs.debateId = debate.id;
                inputs.trackingId = debate.trackingId;

                const devices = await StatsController.fetchDevices(inputs);

                devices.map(device => {
                    if (device.label === 'Desktop') {
                        finalDevices[0].nb_visits += device.nb_visits;
                    }
                    if (device.label === 'Smartphone') {
                        finalDevices[1].nb_visits += device.nb_visits;
                    }
                });
                return
            })

            await Promise.all(response);

            console.log('finalDevices', finalDevices)
            return finalDevices;
        }
    );

    fastify.get(
        "/fetchVisitorsByDayForMonth",
        {
            config,
            schema: {
                description: "fetches the visitors across all debates by day for the month specified",
                tags: ["api"],
                querystring: {
                  id: { type: "number" },
                  month: { type: "number" },
                },
                response: {
                    200: {
                        type: "array",
                        items: visitorsSchema,
                    }
                }
            }
        },
        async request => {
            fastify.log.info({ query: request.query }, "[src#api#fetchVisitorsByDayForMonth] Entering");

            const inputs = { ...request.query };

            // Get all the debates for an account
            const debates = await DebatesController.fetchAllDebates(inputs);

            // Create new the stats for each debate

            const finalVisitors = [];

            const response = await debates.map(async debate => {
                inputs.debateId = debate.id;
                inputs.trackingId = debate.trackingId;

                const visitors = await StatsController.fetchVisitorsByDayForMonth(inputs);

                finalVisitors.push({
                    label: debate.name,
                    data: visitors
                });
                return
            })

            await Promise.all(response);

            return finalVisitors;
        }
    );

    fastify.get(
        "/createStats",
        {
            config,
            schema: {
                description: "creates daily statistics for an account",
                tags: ["api"],
                querystring: {
                  id: { type: "number" },
                },
                response: {
                    200: {
                        type: "array",
                        items: statsSchema,
                    }
                }
            }
        },
        async request => {
            fastify.log.info({ query: request.query }, "[src#api#createStats] Entering");

            const inputs = { ...request.query };
            const timestamp = moment().format("X");

            // Get all the debates for an account
            const debates = await DebatesController.fetchAllDebates(inputs);

            // Create new the stats for each debate
            const response = await debates.map(async debate => {
                inputs.debateId = debate.id;
                inputs.trackingId = debate.trackingId;
                inputs.timestamp = timestamp;

                // Get last recorded stats
                let stats = await StatsController.fetchLatestStatsByDebateId(inputs);

                if (!stats || stats.length === 0) {
                    // First time creation
                    stats.push(statsDefault);
                }

                // Use last stats as a reference for the new one
                if (stats) {
                    const newStats = {...stats[0]};

                    // Get all the posts made
                    const posts = await PostsController.fetchPosts(inputs);

                    // Reactions
                    const { nreactions, nposts } = postsAndReactions (posts);

                    newStats.posts.value = nposts;
                    let diff = nposts - stats[0].posts.value;
                    let growth = ((diff / stats[0].posts.value) * 100).toString();
                    newStats.posts.percentage = `${growth}%`

                    newStats.reactions.value = nreactions;
                    diff = nreactions - stats[0].reactions.value;
                    growth = ((diff / stats[0].reactions.value) * 100).toString();
                    newStats.reactions.percentage = `${growth}%`

                    // Get all the visitors
                    const visitors = await StatsController.fetchVisitors(inputs);
                    newStats.pageviews.value = visitors.nb_visits;
                    diff = visitors.nb_visits - stats[0].pageviews.value;
                    growth = ((diff / stats[0].pageviews.value) * 100).toString();
                    newStats.pageviews.percentage = `${growth}%`

                    // Get all new accounts
                    const users = await UsersController.fetchUsers(inputs);
                    newStats.signups.value = users.length;
                    diff = users.length - stats[0].signups.value;
                    growth = ((diff / stats[0].signups.value) * 100).toString();
                    newStats.signups.percentage = `${growth}%`

                    // Create it
                    inputs.posts = newStats.posts;
                    inputs.pageviews = newStats.pageviews;
                    inputs.signups = newStats.signups;
                    inputs.reactions = newStats.reactions;
                    inputs.shares = newStats.shares;

                    await StatsController.createStats(inputs);
                    return newStats;
                }
            })

            const replies = await Promise.all(response);

            return replies;
        }
    );

    fastify.get(
        "/fetchStats",
        {
            config,
            schema: {
                description: "fetches statistics for an account",
                tags: ["api"],
                querystring: {
                  id: { type: "number" },
                },
                response: {
                    200: statsSchema
                }
            }
        },
        async request => {
            fastify.log.info({ query: request.query }, "[src#api#fetchStats] Entering");

            const inputs = { ...request.query };

            // Get all the debates for an account
            const debates = await DebatesController.fetchAllDebates(inputs);

            const previous = cloneDeep(statsDefault);
            const finalStats = cloneDeep(statsDefault);

            const current = await debates.map(async debate => {
                inputs.debateId = debate.id;
                inputs.trackingId = debate.trackingId;

                // Get last recorded stats
                const stats = await StatsController.fetchLatestStatsByDebateId(inputs);

                console.log('stats', stats)
                if (stats && stats.length > 0) {
                    // Nothing yet so return default
                    finalStats.posts.value += stats[0].posts.value;
                    finalStats.pageviews.value += stats[0].pageviews.value;
                    finalStats.reactions.value += stats[0].reactions.value;
                    finalStats.signups.value += stats[0].signups.value;
                    finalStats.shares.value += stats[0].shares.value;   

                    if (stats[1]) {
                        previous.posts.value += stats[1].posts.value 
                        previous.pageviews.value += stats[1].pageviews.value 
                        previous.reactions.value += stats[1].reactions.value 
                        previous.signups.value += stats[1].signups.value 
                        previous.shares.value += stats[1].shares.value 
                    }
                }
                return;
            });

            await Promise.all(current);

            if (previous.posts.value > 0) {
                const diff = finalStats.posts.value - previous.posts.value;
                const growth = ((diff / previous.posts.value) * 100).toString();
                finalStats.posts.percentage = `${growth}%`    
            } else {
                finalStats.posts.percentage = `0%`    
            }

            if (previous.pageviews.value > 0) {
                const diff = finalStats.pageviews.value - previous.pageviews.value;
                const growth = ((diff / previous.pageviews.value) * 100).toString();
                finalStats.pageviews.percentage = `${growth}%`
            } else {
                finalStats.pageviews.percentage = `0%`    
            }

            if (previous.reactions.value > 0) {
                const diff = finalStats.reactions.value - previous.reactions.value;
                const growth = ((diff / previous.reactions.value) * 100).toString();
                finalStats.reactions.percentage = `${growth}%`
            } else {
                finalStats.reactions.percentage = `0%`    
            }

            if (previous.signups.value > 0) {
                const diff = finalStats.signups.value - previous.signups.value;
                const growth = ((diff / previous.signups.value) * 100).toString();
                finalStats.signups.percentage = `${growth}%`
            } else {
                finalStats.signups.percentage = `0%`    
            }

            if (previous.shares.value > 0) {
                const diff = finalStats.shares.value - previous.shares.value;
                const growth = ((diff / previous.shares.value) * 100).toString();
                finalStats.shares.percentage = `${growth}%`
            } else {
                finalStats.shares.percentage = `0%`    
            }

            return finalStats;
        }
    );
};

module.exports = routes;
