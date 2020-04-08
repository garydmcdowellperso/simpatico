const config = require('../../config');

import DebatesController from "../../services/debates/lib/controllers/DebatesController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.get(
        "/fetchAllDebates",
        {
            config,
            schema: {
                description: "fetches all the debates associated to a user",
                tags: ["api"],
                response: {
                    200: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "number" },
                                label: { type: "string" },
                                value: { type: "string" },
                                percentage: { type: "string" },
                                increase: { type: "boolean" },
                                chartLabels: {
                                    type: "array",
                                    items: {
                                        type: "string" 
                                    }
                                },
                                attrs: { 
                                    type: "object",
                                    properties: {
                                        md: { type: "string" },
                                        sm: { type: "string" }
                                    }        
                                },
                                datasets: { 
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            label: { type: "string" },
                                            fill: { type: "string" },
                                            borderWidth: { type: "number" },
                                            backgroundColor: { type: "string" },
                                            data: { 
                                                type: "array",
                                                items: {
                                                    type: "number" 
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info("[src#api#fetchAllDebates] Entering");

            return [{
                id: 1,
                label: "Posts",
                value: "2,390",
                percentage: "4.7%",
                increase: true,
                chartLabels: [null, null, null, null, null, null, null],
                attrs: { md: "6", sm: "6" },
                datasets: [
                  {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgba(0, 184, 216, 0.1)",
                    borderColor: "rgb(0, 184, 216)",
                    data: [1, 2, 1, 3, 5, 4, 7]
                  }
                ]
              }
            ];
        }
    );

    fastify.put(
        "/updateDebateGeneralInfo",
        {
            config,
            schema: {
                description: "updates the general information for a debate",
                tags: ["api"],
                response: {
                    200: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "number" },
                                label: { type: "string" },
                                value: { type: "string" },
                                percentage: { type: "string" },
                                increase: { type: "boolean" },
                                chartLabels: {
                                    type: "array",
                                    items: {
                                        type: "string" 
                                    }
                                },
                                attrs: { 
                                    type: "object",
                                    properties: {
                                        md: { type: "string" },
                                        sm: { type: "string" }
                                    }        
                                },
                                datasets: { 
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            label: { type: "string" },
                                            fill: { type: "string" },
                                            borderWidth: { type: "number" },
                                            backgroundColor: { type: "string" },
                                            data: { 
                                                type: "array",
                                                items: {
                                                    type: "number" 
                                                }
                                            }
                                        }
                                    }
                                },
                            }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info("[src#api#updateDebateGeneralInfo] Entering");

            return [{
                id: 1,
                label: "Posts",
                value: "2,390",
                percentage: "4.7%",
                increase: true,
                chartLabels: [null, null, null, null, null, null, null],
                attrs: { md: "6", sm: "6" },
                datasets: [
                  {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgba(0, 184, 216, 0.1)",
                    borderColor: "rgb(0, 184, 216)",
                    data: [1, 2, 1, 3, 5, 4, 7]
                  }
                ]
              }
            ];
        }
    );

    fastify.post(
        "/createDebate",
        {
            config,
            schema: {
                description: "creates a new debate",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        slug: { type: 'string' },
                        debateType: { type: 'string' },
                        languages: { 
                            type: 'object',
                            properties: {
                                english: { type: 'boolean' },
                                french: { type: 'boolean' },
                                spanish: { type: 'boolean' }
                            }            
                        },
                    },
                },    
                response: {
                    200: {
                        type: "object",
                        properties: {
                            status: { type: "string" }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info("[src#api#createDebate] Entering");

            const inputs = { ...request.body };
            // Create the debate
            const response = await DebatesController.createDebate(inputs);

            // Add the config to the LB

            // Restart nginx

            return {
                status: 'ok'
            }
        }
    );

};

module.exports = routes;