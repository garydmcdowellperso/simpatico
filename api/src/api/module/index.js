const config = require('../../config');

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
fastify.get(
    "/fetchAllModules",
    {
        config,
        schema: {
            description: "fetches all the modules",
            tags: ["api"],
            querystring: {
                debateID: { type: "number" }
            },
            response: {
                200: {
                    type: "array",
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: "number" },
                            moduleType: { type: "string" },
                            title: { type: "string" },
                            help: { type: "string" },
                            inuse: { type: "boolean" },
                            posts: { type: "number" },
                            contributions: { type: "number" },
                            participants: { type: "number" }
                        },
                    },
                },
            },
        },
    },
    async request => {
        fastify.log.info("[src#api#fetchAllModules] Entering");

        return [
            {
                id: 1,
                moduleType: "Thread",
                title: "Dummy1",
                help: "How to use this module",
                inuse: true,
                posts: 0,
                contributions: 0,
                participants: 0
            }
        ];
    }
    );
}

module.exports = routes;