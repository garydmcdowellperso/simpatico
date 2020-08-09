const debateSchema = {
    type: "object",
    properties: {
       id: { type: "number" },
       name: { type: 'string' },
       url: { type: 'string' },
       debateType: { type: 'string' },
       accountId: { type: 'number' },
       trackingId: { type: 'number' },
       languages: { 
         type: 'object',
         properties: {
             english: { type: 'boolean' },
             french: { type: 'boolean' },
             spanish: { type: 'boolean' }
         }            
       },
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
       footer: { 
         type: 'object',
         properties: {
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
             page: { type: 'number' },
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
                 module: { type: 'number' },
                 url: { type: 'string' }
             }
         }            
       },
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
                         name: { type: "string" },
                         url: { type: "string" }
                     },
                 }, 
             },
         }            
       },
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
                     items: {                                    
                        type: "object",
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
};

const headerDefault = {
    "share" : true,
    "sections" : [ 
        {
            "languages" : {
                "en" : "faesatst",
                "fr" : "",
                "es" : ""
            }
        }, 
        {
            "languages" : {
                "en" : "",
                "fr" : "",
                "es" : ""
            }
        }, 
        {
            "languages" : {
                "en" : "",
                "fr" : "",
                "es" : ""
            }
        }, 
        {
            "languages" : {
                "en" : "",
                "fr" : "",
                "es" : ""
            }
        }
    ]
};

const overviewDefault = {
    "title" : {
        "en" : "English Title",
        "fr" : "Titre en Francais",
        "es" : "Spanish"
    },
    "description" : {
        "en" : "English Descripton",
        "fr" : "Description en Francais",
        "es" : "Spanish"
    },
    "linkText" : {
        "en" : "Click me",
        "fr" : "Voir plus",
        "es" : "Spanish"
    },
    "url" : "https://source.unsplash.com/random"
};

const connectionDefault = {
    "firstname" : true,
    "lastname" : true,
    "username" : true,
    "email" : true,
    "password" : true,
    "google" : false,
    "linkedin" : false,
    "additional_fields" : []
};

const footerDefault = {
    "sections" : [ 
        {
            "languages" : {
                "en" : "",
                "fr" : "",
                "es" : ""
            }
        }, 
        {
            "languages" : {
                "en" : "",
                "fr" : "",
                "es" : ""
            }
        }, 
        {
            "languages" : {
                "en" : "",
                "fr" : "",
                "es" : ""
            }
        }, 
        {
            "languages" : {
                "en" : "",
                "fr" : "",
                "es" : ""
            }
        }
    ]
};

module.exports = {
    debateSchema,
    headerDefault,
    overviewDefault,
    connectionDefault,
    footerDefault
};
