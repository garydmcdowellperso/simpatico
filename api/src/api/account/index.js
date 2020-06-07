const fs = require('fs')
const shell = require('shelljs');

const config = require('../../config');

import AccountsController from "../../services/accounts/lib/controllers/AccountsController";
import UsersController from "../../services/iam/lib/controllers/UsersController";
import EmailController from "../../services/email/lib/controllers/EmailController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.post(
        "/createAccount",
        {
            config,
            schema: {
                description: "creates a new account and admin user",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        account: { type: 'string' },
                        firstname: { type: 'string' },
                        lastname: { type: 'string' },
                        email: { type: 'string' },
                        password: { type: 'string' },
                        role: { type: 'string' },
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
            fastify.log.info(request.body, "[src#api#createAccount] Entering");

            const inputs = { ...request.body };

            // Create the account
            const responseAccount = await AccountsController.createAccount(inputs);

            console.log('responseAccount', responseAccount)
            // Create the admin user for the account
            const newInputs = {
                accountId: responseAccount.id,
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                email: request.body.email,
                password: request.body.password,
                role: request.body.role
            };

            const responseUser = await UsersController.createUser(newInputs);

            // Send activattion email
            const inputsEmali = {
                template: {
                    type: "test",
                    language: "en-US",
                    name: "creation"
                },
                email: {
                    to: request.body.email,
                    from: "noreply@simpatico.cloud",
                    subject: "Activate your account"
                },
                substitutions: {
                    firstname: request.body.firstname,
                    lastname: request.body.lastname,
                    url: `https://0040d099ab7e.ngrok.io/api/v1/activate?token=${responseUser.token}`
                }
            };

            await EmailController.sendEmail(inputsEmali);

            return {
                status: 'ok',
                reason: ''
            }
        }
    );

    fastify.get(
        "/fetchAccount",
        {
            config,
            schema: {
                description: "fetches account info",
                tags: ["api"],
                querystring: {
                    id: { type: "number" }
                },
                response: {
                    200: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            name: { type: "string" }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info(request.query, "[src#api#fetchAccount] Entering");

            const inputs = { 
                id: request.query.id
            }

            // Create the account
            const responseAccount = await AccountsController.fetchAccount(inputs);

            console.log('responseAccount', responseAccount)

            return {
                id: responseAccount.id,
                name: responseAccount.name
            }
        }
    );

    fastify.put(
        "/updateAccountInfo",
        {
            config,
            schema: {
                description: "updates the account information",
                tags: ["api"],
                body: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        name: { type: 'string' },
                    },
                },    
                response: {
                    200: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            name: { type: "string" }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info(request.body, "[src#api#updateAccountInfo] Entering");

            console
            const inputs = { ...request.body };
            // Update the account info
            const response = await AccountsController.updateAccountInfo(inputs);
            
            return response;
        }
    );
};

module.exports = routes;
