const fs = require('fs')
const shell = require('shelljs');

const config = require('../../config');

import DebatesController from "../../services/debates/lib/controllers/DebatesController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
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
                    200: {
                       type: "object",
                       properties: {
                          id: { type: "number" },
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
                          header: { 
                            type: 'object',
                            properties: {
                                share: { type: 'boolean' },
                                sections: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {    
                                            page:   { type: "number" },
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
                            },        
                          },
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
                                    }
                                },
                                description: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }
                                    }
                                },
                                linkText: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }
                                    }
                                }
                            }            
                          },
                          themes: { 
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {     
                                    title: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    description: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    imageText: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    image: { type: 'string' },
                                    url: { type: 'string' },
                                    module: { type: 'number' }
                                }
                            }            
                          },
                        }
                    }
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
                               sections: { 
                                 type: 'array',
                                 items: {
                                     type: 'object',
                                     properties: {     
                                         title: { 
                                             type: 'object',
                                             properties: {
                                                 en: { type: 'string' },
                                                 fr: { type: 'string' },
                                                 es: { type: 'string' }
                                             }            
                                         },            
                                         url: { type: 'string' }
                                     }
                                 }            
                               },
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
                                         }
                                     },
                                     description: { 
                                         type: 'object',
                                         properties: {
                                             en: { type: 'string' },
                                             fr: { type: 'string' },
                                             es: { type: 'string' }
                                         }
                                     },
                                     linkText: { 
                                         type: 'object',
                                         properties: {
                                             en: { type: 'string' },
                                             fr: { type: 'string' },
                                             es: { type: 'string' }
                                         }
                                     }
                                 }            
                               },
                               themes: { 
                                 type: 'array',
                                 items: {
                                     type: 'object',
                                     properties: {     
                                         title: { 
                                             type: 'object',
                                             properties: {
                                                 en: { type: 'string' },
                                                 fr: { type: 'string' },
                                                 es: { type: 'string' }
                                             }            
                                         },            
                                         description: { 
                                             type: 'object',
                                             properties: {
                                                 en: { type: 'string' },
                                                 fr: { type: 'string' },
                                                 es: { type: 'string' }
                                             }            
                                         },            
                                         imageText: { 
                                             type: 'object',
                                             properties: {
                                                 en: { type: 'string' },
                                                 fr: { type: 'string' },
                                                 es: { type: 'string' }
                                             }            
                                         },            
                                         image: { type: 'string' },
                                         url: { type: 'string' }
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

            const response = await DebatesController.fetchAllDebates();

            return response;
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
                            status: { type: "string" },
                            reason: { type: "string" }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#createDebate] Entering");

            const inputs = { ...request.body };
            // Create the debate
            const response = await DebatesController.createDebate(inputs);

            return {
                status: 'ok',
                reason: ''
            }
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
                    200: {
                       type: "object",
                       properties: {
                          id: { type: "number" },
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
                          header: { 
                            type: 'object',
                            properties: {
                                share: { type: 'boolean' },
                                sections: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {    
                                            page:   { type: "number" },
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
                            },        
                          },
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
                                    }
                                },
                                description: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }
                                    }
                                },
                                linkText: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }
                                    }
                                }
                            }            
                          },
                          themes: { 
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {     
                                    title: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    description: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    imageText: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    image: { type: 'string' },
                                    url: { type: 'string' }
                                }
                            }            
                          },
                        }
                    }
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
                    200: {
                       type: "object",
                       properties: {
                          id: { type: "number" },
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
                          header: { 
                            type: 'object',
                            properties: {
                                share: { type: 'boolean' },
                                sections: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {    
                                            page:   { type: "number" },
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
                            },        
                          },
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
                                    }
                                },
                                description: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }
                                    }
                                },
                                linkText: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }
                                    }
                                }
                            }            
                          },
                          themes: { 
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {     
                                    title: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    description: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    imageText: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    image: { type: 'string' },
                                    url: { type: 'string' }
                                }
                            }            
                          },
                        }
                    }
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
                    200: {
                       type: "object",
                       properties: {
                          id: { type: "number" },
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
                          header: { 
                            type: 'object',
                            properties: {
                                share: { type: 'boolean' },
                                sections: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {    
                                            page:   { type: "number" },
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
                            },        
                          },
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
                                    }
                                },
                                description: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }
                                    }
                                },
                                linkText: { 
                                    type: 'object',
                                    properties: {
                                        en: { type: 'string' },
                                        fr: { type: 'string' },
                                        es: { type: 'string' }
                                    }
                                }
                            }            
                          },
                          themes: { 
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {     
                                    title: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    description: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    imageText: { 
                                        type: 'object',
                                        properties: {
                                            en: { type: 'string' },
                                            fr: { type: 'string' },
                                            es: { type: 'string' }
                                        }            
                                    },            
                                    image: { type: 'string' },
                                    url: { type: 'string' }
                                }
                            }            
                          },
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updateLandingPageThemes] Entering");

            const inputs = { ...request.body };
            // Update the debate landing page themes
            const response = await DebatesController.updateLandingPageThemes(inputs);

            return response;
        }
    );
};

module.exports = routes;
