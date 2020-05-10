const fs = require('fs')

const config = require('../../config');

import EmailController from "../../services/email/lib/controllers/EmailController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.post(
        "/sendEmail",
        {
            config,
            schema: {
                description: "sends an email",
                tags: ["api"],
                body: {
                    type: "object",
                    properties: {
                        template: { 
                            type: "object", 
                            properties: {
                                type: { type: 'string' },
                                language: { type: 'string' },
                                name: { type: 'string' },
                            },
                        },
                        email: { 
                            type: "object", 
                            properties: {
                                to: { type: 'string' },
                                from: { type: 'string' },
                                cc: { type: 'string' },
                                bcc: { type: 'string' },
                                subject: { type: 'string' },
                            },
                        },
                        substitutions: { 
                            type: "object"
                        },
                    },
                },
                response: {
                    200: {
                       type: "object",
                       properties: {
                          status: { type: "number" },
                          reason: { type: 'string' },
                        }
                   }
                }
            }
        },
        async request => {
            fastify.log.info("[src#api#sendEmail] Entering");

            const inputs = { ...request.body };

            const response = await EmailController.sendEmail(inputs);
            return response;
        }
    );
};

module.exports = routes;
