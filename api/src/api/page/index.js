const config = require('../../config');

import PageController from "../../services/page/lib/controllers/PageController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.get(
        "/fetchAllPages",
        {
            config,
            schema: {
                description: "fetches all the pages associated to a debate",
                tags: ["api"],
                querystring: {
                    debateId: { type: "number" }
                }
            }
        },
        async request => {
            fastify.log.info("[src#api#fetchAllPages] Entering");

            const inputs = {
                debateId: request.query.debateId
            };

            const response = await PageController.fetchAllPages(inputs);

            return response;
        }
    );

    fastify.get(
        "/fetchPage",
        {
            config,
            schema: {
                description: "fetches a specific page",
                tags: ["api"],
                querystring: {
                    id: { type: "number" }
                }
            }
        },
        async request => {
            fastify.log.info("[src#api#fetchPage] Entering");

            const inputs = {
                id: request.query.id
            };

            const response = await PageController.fetchPage(inputs);

            return response;
        }
    );

    fastify.post(
        "/createPage",
        {
            config,
            schema: {
                description: "creates a new page",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        debateId: { type: 'number' },
                        type: { type: 'string' },
                        url: { type: 'string' },
                        languages: { 
                            type: 'object',
                            properties: {
                                english: { type: 'object' },
                                french: { type: 'object' },
                                spanish: { type: 'object' }
                            }            
                        },
                    },
                },    
                response: {
                    200: {
                        type: "object",
                        properties: {
                            status: { type: "string" },
                            reason: { type: "string" }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#createPage] Entering");

            const inputs = { ...request.body };

            // Create the page
            const response = await PageController.createPage(inputs);

            return {
                status: 'ok',
                reason: ''
            }
        }
    );  
    
    fastify.put(
        "/updatePage",
        {
            config,
            schema: {
                description: "updates a new page",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        id: { type: 'number' },
                        type: { type: 'string' },
                        url: { type: 'string' },
                        languages: { 
                            type: 'object',
                            properties: {
                                english: { type: 'object' },
                                french: { type: 'object' },
                                spanish: { type: 'object' }
                            }            
                        },
                    },
                },    
                response: {
                    200: {
                        type: "object",
                        properties: {
                            status: { type: "string" },
                            reason: { type: "string" }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updatePage] Entering");

            const inputs = { ...request.body };

            // First find the page
            const page = await PageController.fetchPage(inputs);

            const inputs2 = { ...request.body, debateId: page.debateId };

            // Update the page
            const response = await PageController.updatePage(inputs2);

            return {
                status: 'ok',
                reason: ''
            }
        }
    );      

};

module.exports = routes;
