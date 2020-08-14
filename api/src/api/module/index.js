const config = require('../../config');

import ModuleController from "../../services/modules/lib/controllers/ModuleController";
import DebatesController from "../../services/debates/lib/controllers/DebatesController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.post(
        "/createModule",
        {
            config,
            preValidation: [fastify.authenticateAdmin],
            schema: {
                description: "creates a new module",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        title: { 
                            type: 'object',
                            properties: {
                                en: { type: "string" },
                                fr: { type: "string" },
                                es: { type: "string" },
                            } ,
                        },
                        help: {
                            type: 'object',
                            properties: {
                                en: { type: "string" },
                                fr: { type: "string" },
                                es: { type: "string" },
                            },
                        },
                        name: { type: 'string' },
                        debateId: { type: 'number' },
                        moduleType: { type: 'string' }
                    },
                },    
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            id: { type: "number" },
                            name: { type: "string" },
                            debateId: { type: "number" },
                            moduleType: { type: "string" },
                            title: { 
                                type: 'object',
                                properties: {
                                    en: { type: "string" },
                                    fr: { type: "string" },
                                    es: { type: "string" },
                                } ,
                            },
                            help: {
                                type: 'object',
                                properties: {
                                    en: { type: "string" },
                                    fr: { type: "string" },
                                    es: { type: "string" },
                                },
                            },
                            inuse: { type: "boolean" },
                            posts: { type: "number" },
                            contributions: { type: "number" },
                            participants: { type: "number" }
                        },
                    },                    
                },
            },
        },
        async request => {
            fastify.log.info(request.body, "[src#api#createModule] Entering");

            // Check you have access to this debate
            const debate = DebatesController.fetchDebateByID(request.body.debateId);
            if (!debate) {
                throw new Error("Debate not found");
            }
	    console.log('request.user', request.user)
            if (debate.accountId != request.user.accountId) {
                throw new Error("Unauthorised");
            }

            const inputs = { ...request.body };
            inputs.posts = 0;
            inputs.contributons = 0;
            inputs.participants = 0;
            inputs.inuse = false;
            inputs.deleted = false;

            // Create the module
            const response = await ModuleController.createModule(inputs);

            return response;
        }
    );  

    fastify.get(
        "/fetchAllModules",
        {
            config,
            schema: {
                description: "fetches all the modules",
                tags: ["api"],
                response: {
                    200: {
                        type: "array",
                        items: {
                            type: 'object',
                            properties: {
                                id: { type: "number" },
                                name: { type: "string" },
                                debateId: { type: "number" },
                                moduleType: { type: "string" },
                                title: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: "string" },
                                        fr: { type: "string" },
                                        es: { type: "string" },
                                    } ,
                                },
                                help: {
                                    type: 'object',
                                    properties: {
                                        en: { type: "string" },
                                        fr: { type: "string" },
                                        es: { type: "string" },
                                    },
                                },
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

    fastify.get(
        "/fetchAllModulesForDebate",
        {
            config,
            schema: {
                description: "fetches all the modules for a debate",
                tags: ["api"],
                querystring: {
                    debateId: { type: "number" }
                },
                response: {
                    200: {
                        type: "array",
                        items: {
                            type: 'object',
                            properties: {
                                id: { type: "number" },
                                name: { type: "string" },
                                debateId: { type: "number" },
                                moduleType: { type: "string" },
                                title: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: "string" },
                                        fr: { type: "string" },
                                        es: { type: "string" },
                                    },
                                },
                                help: {
                                    type: 'object',
                                    properties: {
                                        en: { type: "string" },
                                        fr: { type: "string" },
                                        es: { type: "string" },
                                    },
                                },
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
            fastify.log.info("[src#api#fetchAllModulesForDebate] Entering");

            const inputs = {
                debateId: request.query.debateId
            };

            const response = await ModuleController.fetchAllModulesForDebate(inputs);

            return response;
        }
    );

    fastify.get(
        "/fetchModule",
        {
            config,
            schema: {
                description: "fetches a module",
                tags: ["api"],
                querystring: {
                    id: { type: "number" }
                },
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            id: { type: "number" },
                            name: { type: "string" },
                            moduleType: { type: "string" },
                            debateId: { type: "number" },
                            title: { 
                                type: 'object',
                                properties: {
                                    en: { type: "string" },
                                    fr: { type: "string" },
                                    es: { type: "string" },
                                } 
                            },
                            help: {
                                type: 'object',
                                properties: {
                                    en: { type: "string" },
                                    fr: { type: "string" },
                                    es: { type: "string" },
                                } 
                            },                            
                            inuse: { type: "boolean" },
                            posts: { type: "number" },
                            contributions: { type: "number" },
                            participants: { type: "number" }
                        },
                    },
                },
            },
        },
        async request => {
            fastify.log.info("[src#api#fetchModule] Entering");

            const inputs = {
                id: request.query.id
            };

            const response = await ModuleController.fetchModule(inputs);

            return response;
        }
    );    

    fastify.put(
        "/updateModule",
        {
            config,
            schema: {
                description: "updates a module",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        title: { 
                            type: 'object',
                            properties: {
                                en: { type: "string" },
                                fr: { type: "string" },
                                es: { type: "string" },
                            } 
                        },
                        help: {
                            type: 'object',
                            properties: {
                                en: { type: "string" },
                                fr: { type: "string" },
                                es: { type: "string" },
                            } 
                        },                            
                        id: { type: 'number' },
                        moduleType: { type: 'string' },
                        name: { type: "string" },
                    },
                },    
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            id: { type: "number" },
                            name: { type: "string" },
                            moduleType: { type: "string" },
                            debateId: { type: "number" },
                            title: { 
                                type: 'object',
                                properties: {
                                    en: { type: "string" },
                                    fr: { type: "string" },
                                    es: { type: "string" },
                                } 
                            },
                            help: {
                                type: 'object',
                                properties: {
                                    en: { type: "string" },
                                    fr: { type: "string" },
                                    es: { type: "string" },
                                } 
                            },                            
                            inuse: { type: "boolean" },
                            posts: { type: "number" },
                            contributions: { type: "number" },
                            participants: { type: "number" }
                        },
                    },
                },
            },
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updateModule] Entering");

            const inputs = { ...request.body };

            // First find the module
            const module = await ModuleController.fetchModule(inputs);

            const inputs2 = { 
                ...request.body, 
                debateId: module.debateId, 
                posts: module.posts, 
                contributions: module.contributions, 
                participants: module.participants, 
                inuse: module.inuse, 
                deleted: module.deleted, 
            };

            // Update the page
            const response = await ModuleController.updateModule(inputs2);

            return {
                status: 'ok',
                reason: ''
            }
        }
    );      

}

module.exports = routes;
