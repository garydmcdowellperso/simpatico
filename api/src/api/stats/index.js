const fs = require('fs')
const shell = require('shelljs');

const config = require('../../config');

import StatsController from "../../services/stats/lib/controllers/StatsController";


/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
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
                    200: {
                      type: "object",
                      properties: {
                        id: { type: "number" },
                        accountId: { type: "number" },
                        posts: {
                          type: "object",
                          properties: {
                            value: { type: 'string' },
                            percentage: { type: 'string' },
                            increase: { type: 'boolean' },
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
                            }
                          }
                        },                        
                        pageviews: {
                          type: "object",
                          properties: {
                            value: { type: 'string' },
                            percentage: { type: 'string' },
                            increase: { type: 'boolean' },
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
                            }
                          }
                        },
                        reactions: {
                          type: "object",
                          properties: {
                            value: { type: 'string' },
                            percentage: { type: 'string' },
                            increase: { type: 'boolean' },
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
                            }
                          }
                        },
                        signups: {
                          type: "object",
                          properties: {
                            value: { type: 'string' },
                            percentage: { type: 'string' },
                            increase: { type: 'boolean' },
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
                            }
                          }
                        },
                        shares: {
                          type: "object",
                          properties: {
                            value: { type: 'string' },
                            percentage: { type: 'string' },
                            increase: { type: 'boolean' },
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
                            }
                          }
                        }
                      }
                    }
                }
            }
        },
        async request => {
            fastify.log.info({ query: request.query }, "[src#api#fetchStats] Entering");

            const inputs = { ...request.query };

            const response = await StatsController.fetchAllStats(inputs);

            return response;
        }
    );
};

module.exports = routes;
