const debateSchema = {
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

module.exports = {
    debateSchema
};
