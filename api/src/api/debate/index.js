const fs = require('fs')
const shell = require('shelljs');

const config = require('../../config');

const { 
    connectionDefault,
    overviewDefault,
    headerDefault, 
    footerDefault,
    sidebarDefault,
    debateSchema 
} = require('../schemas/debate');

import ModulesController from "../../services/modules/lib/controllers/ModuleController";
import DebatesController from "../../services/debates/lib/controllers/DebatesController";
import StatsController from "../../services/stats/lib/controllers/StatsController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.delete(
        "/deleteDebate",
        {
            config,
            preValidation: [fastify.authenticate],
            schema: {
                description: "deletes a debate ",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        debateId: { type: 'number' }
                    },
                },    
                response: {
                    200: {
                        type: "array",
                        items: debateSchema
                    }
                }
            }
        },
        async request => {
            fastify.log.info("[src#api#deleteDebate] Entering");

            if (!request.user.role.includes('administrator')) {
                throw new Error("Unauthorised");
            }

            const inputs = { ...request.body };
            inputs.accountId = request.user.accountId;

            const response = await DebatesController.deleteDebate(inputs);
            return response;
        }
    );

    fastify.get(
        "/fetchDebate",
        {
            config,
            schema: {
                description: "fetches a debate ",
                tags: ["api"],
                querystring: {
                    name: { type: "string" }
                },
                response: {
                    200: debateSchema
                }
            }
        },
        async request => {
            fastify.log.info("[src#api#fetchDebate] Entering");

            const inputs = {
              name: request.query.name
            };

            const response = await DebatesController.fetchDebate(inputs);
            return response;
        }
    );

    fastify.get(
        "/fetchAllDebates",
        {
            config,
            preValidation: [fastify.authenticate],
            schema: {
                description: "fetches all the debates associated to an account",
                tags: ["api"],
                response: {
                    200: {
                        type: "array",
                        items: debateSchema
                    }
                }
            }
        },
        async request => {
            fastify.log.info("[src#api#fetchAllDebates] Entering");

            const inputs = { 
                id: request.user.accountId
            };

            const response = await DebatesController.fetchAllDebates(inputs);

            return response;
        }
    );

    fastify.put(
        "/updateGeneralInfo",
        {
            config,
            schema: {
                description: "updates the general information for a debate",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        url: { type: 'string' },
                        debateType: { type: 'string' }
                    },
                },    
                response: {
                    200: debateSchema
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updateGeneralInfo] Entering");

            const inputs = { ...request.body };
            // Update the debate general info
            const response = await DebatesController.updateGeneralInfo(inputs);
            
            return response;
        }
    );

    fastify.put(
        "/updateConnection",
        {
            config,
            schema: {
                description: "updates the connectioin information for a debate",
                tags: ["api"],
                body: {
                    type: "object",
                    properties: {
                        debateID: { type: "number" },
                        connection: { 
                            type: "object",
                            properties: {
                                firstname: { type: "boolean" },
                                lastname: { type: "boolean" },
                                username: { type: "boolean" },
                                email: { type: "boolean" },
                                password: { type: "boolean" },
                                google: { type: "boolean" },
                                linkedin: { type: "boolean" },
                                additional_fields: {
                                    type: "array",
                                        items: {                                    type: "object",
                                        properties: {
                                            type: { type: "string" },
                                            name: { type: "string" },
                                            active: { type: "boolean" },
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
            fastify.log.info(request.body, "[src#api#updateConnection] Entering");

            const inputs = { ...request.body };
            // Update the debate connection
            const response = await DebatesController.updateConnection(inputs);

            return response;
        }
    );

    fastify.post(
        "/createDebate",
        {
            config,
            preValidation: [fastify.authenticate],
            schema: {
                description: "creates a new debate",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        url: { type: 'string' },
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
                    200: debateSchema
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#createDebate] Entering");

            const inputs = { ...request.body };
            // Set all langs available
            inputs.languages = {
                "english" : true,
                "french" : true,
                "spanish" : true
            };

            if (!request.user.role.includes('administrator')) {
                throw new Error("Unauthorised");
            }

            // Create the debate
            const response = await StatsController.createSite(inputs);
            inputs.accountId = request.user.accountId;
            inputs.header = headerDefault;
            inputs.overview = overviewDefault;
            inputs.connection = connectionDefault;
            inputs.footer = footerDefault;
            inputs.sidebar = sidebarDefault;
            inputs.trackingId = response.id;

            // Create the debate
            const debate = await DebatesController.createDebate(inputs);

            return debate;
        }
    );

    fastify.put(
        "/updateLandingPageHeader",
        {
            config,
            schema: {
                description: "updates the header for a debate landing page",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        debateID: { type: 'number' },
                        header: { 
                            type: 'object',
                            properties: {
                                share: { type: 'boolean' },
                                sections: { 
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            page: { type: 'number' },
                                            languages: {
                                                type: 'object',
                                                properties: {
                                                    en: { type: 'string' },
                                                    fr: { type: 'string' },
                                                    es: { type: 'string' }            
                                                },
                                            },
                                        },
                                    },
                                },
                            }            
                        },
                    },
                },    
                response: {
                    200: debateSchema
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updateLandingPageHeader] Entering");

            const inputs = { ...request.body };
            // Update the debate landing page header
            const response = await DebatesController.updateLandingPageHeader(inputs);

            return response;
        }
    );

    fastify.put(
        "/updateLandingPageOverview",
        {
            config,
            schema: {
                description: "updates the overview for a debate landing page",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        debateID: { type: 'number' },
                        overview: { 
                            type: 'object',
                            properties: {
                                url: { type: 'string' },
                                title: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }            
                                    },
                                },
                                description: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }            
                                    },
                                },
                                linkText: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }            
                                    },
                                },
                            }            
                        },
                    },
                },    
                response: {
                    200: debateSchema
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updateLandingPageOverview] Entering");

            const inputs = { ...request.body };
            // Update the debate landing page overview
            const response = await DebatesController.updateLandingPageOverview(inputs);

            return response;
        }
    );

    fastify.put(
        "/updateLandingPageThemes",
        {
            config,
            preValidation: [fastify.authenticateAdmin],
            schema: {
                description: "updates the themes for a debate landing page",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        debateID: { type: 'number' },
                        themes: { 
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    url: { type: 'string' },
                                    image: { type: 'string' },
                                    module: { type: 'number' },
                                    title: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }            
                                        },
                                    },
                                    description: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }            
                                        },
                                    },
                                    imageText: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }            
                                        },
                                    },
                                },
                            } ,           
                        },
                    },
                },    
                response: {
                    200: debateSchema
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updateLandingPageThemes] Entering");

            const debateInputs = {
                id: request.body.debateID
            }

            const debate = await DebatesController.fetchDebateByID(debateInputs);
            if (!debate) {
                throw new Error("Debate not found");
            }

            if (debate.accountId != request.user.accountId) {
                throw new Error("Unauthorised");
            }

            const inputs = { ...request.body };
            // Update the debate landing page themes
            const response = await DebatesController.updateLandingPageThemes(inputs);

            // Tell the modules they are in use
            request.body.themes.map(async (theme) => {
                console.log('theme', theme)
                const moduleInputs = {
                    id: theme.module
                }
                const module = await ModulesController.fetchModule(moduleInputs);

                if (!module) {
                    throw new Error("Module not found");
                }

                module.inuse = true;
                await ModulesController.updateModule(module);
            })

            return response;
        }
    );

    fastify.put(
        "/updateLandingPageSidebar",
        {
            config,
            schema: {
                description: "updates the sidebar for a debate landing page",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        debateID: { type: 'number' },
                        sidebar: { 
                            type: 'object',
                            properties: {
                                about: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }
                                    }
                                },
                                social: { 
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            name: { type: 'string' },
                                            url: { type: 'string' }
                                        }    
                                    }
                                },

                            },
                        },
                    },
                },    
                response: {
                    200: debateSchema
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updateLandingPageSidebar] Entering");

            const inputs = { ...request.body };
            // Update the debate landing page sidebar
            const response = await DebatesController.updateLandingPageSidebar(inputs);

            return response;
        }
    );

    fastify.put(
        "/updateLandingPageFooter",
        {
            config,
            schema: {
                description: "updates the footer for a debate landing page",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        debateID: { type: 'number' },
                        footer: { 
                            type: 'object',
                            properties: {
                                sections: { 
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            page: { type: 'number' },
                                            languages: {
                                                type: 'object',
                                                properties: {
                                                    en: { type: 'string' },
                                                    fr: { type: 'string' },
                                                    es: { type: 'string' }            
                                                },
                                            },
                                        },
                                    },
                                },
                            }            
                        },
                    },
                },    
                response: {
                    200: debateSchema
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updateLandingPageFooter] Entering");

            const inputs = { ...request.body };
            // Update the debate landing page footer
            const response = await DebatesController.updateLandingPageFooter(inputs);

            return response;
        }
    );

    fastify.put(
        "/updateLandingPageMetaTags",
        {
            config,
            schema: {
                description: "updates the metatags for a debate landing page",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        debateID: { type: 'number' },
                        metaTags: { 
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    type: { type: 'string' },
                                    typevalue: { type: 'string' },
                                    content: { type: 'string' },
                                },
                            },            
                        },
                    },
                },    
                response: {
                    200: debateSchema
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updateLandingPageMetaTags] Entering");

            const inputs = { ...request.body };
            // Update the debate landing page meta tags
            const response = await DebatesController.updateLandingPageMetaTags(inputs);

            return response;
        }
    );
};

module.exports = routes;
