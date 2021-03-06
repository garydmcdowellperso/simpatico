const config = require('../../config');

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
fastify.get(
    "/fetchThread",
    {
        config,
        schema: {
        description: "fetches the details of the thread",
        tags: ["api"],
        querystring: {
            thread: { type: "number" }
        },
        response: {
            200: {
            type: "object",
            properties: {
                id: { type: "number" },
                languages: { 
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            code: { type: "string" },
                            title: { type: "string" },
                            advice: { type: "string" }
                        }
                    }
                }
            }
            }
        }
        }
    },
    async request => {
        fastify.log.info("[src#api#fetchThread] Entering");

        return {
            id: request.query.thread,
            languages: [
                {
                    code: "en",
                    title: "A test",
                    advice: "some advice"        
                },
                {
                    code: "fr",
                    title: "un test",
                    advice: "des conseils"        
                }
            ]
        };
    }
    );
}

module.exports = routes;