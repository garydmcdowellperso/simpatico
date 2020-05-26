const config = require('../../config');

import UsersController from "../../services/iam/lib/controllers/UsersController";
import EmailController from "../../services/email/lib/controllers/EmailController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.post(
        "/loginRequest",
        {
            config,
            schema: {
                description: "login to a debate",
                tags: ["api"],
                summary: "login to a debate",
                body: {
                    type: 'object',
                    properties: {
                        email: { type: 'string' },
                        password: { type: 'string' },
                    },
                },    
                response: {
                    200: {
                        type: "object",
                        properties: {
                            status: { type: "string" },
                            token: { type: "string" }
                        },
                    },
                },
            },
        },
        async (request, reply) => {
            fastify.log.info(
                { body: request.body }, "[src#api#iam#loginRequest] Entering");
    
            const inputs = {...request.body};

            try {
                const response = await UsersController.login(inputs);

                reply.setCookie("simpatico", response.token, {
                    httpOnly: true,
                    secure: true,
                    path: "/",
                    domain: "21f49666.ngrok.io"
                });

                reply.send({
                    status: 'ok',
                    token: response.token
                });
            } catch (error) {
                throw error;
            }
        }
    );

    fastify.put(
        "/updateUserInfo",
        {
            config,
            schema: {
                description: "updates user information",
                tags: ["api"],
                summary: "updates user information",
                body: {
                    type: 'object',
                    properties: {
                        id: { type: "number" },
                        firstName: { type: "string" },
                        lastName: { type: "string" },
                        email: { type: "string" },
                        bio: { type: "string" },
                        avatar: { type: "string" },
                        password: { type: "string" },
                        confirmPassword: { type: "string" }
                    }
                },    
                response: {
                    200: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            "first-name": { type: "string" },
                            "last-name": { type: "string" },
                            email: { type: "string" },
                            bio: { type: "string" },
                            avatar: { type: "string" },
                            score: { type: "number" },
                            badge: { type: "number" },
                            debates: { 
                                type: "array",
                                items: {
                                    type: "number" 
                                },
                            },
                            role: { 
                                type: "array",
                                items: {
                                    type: "string" 
                                },
                            },
                            likes: { 
                                type: "array",
                                items: {
                                    type: "object" 
                                },
                            },
                            dislikes: { 
                                type: "array",
                                items: {
                                    type: "object" 
                                },
                            },
                            contributions: { 
                                type: "array",
                                items: {
                                    type: "object" 
                                },
                            }
                        },
                    },
                },
            },
        },
        async (request, reply) => {
            fastify.log.info(
                { body: request.body }, "[src#api#iam#updateUserInfo] Entering");
    
            const inputs = {...request.body};

            const user = await UsersController.updateUserInfo(inputs);

            return user;
        }
    );

    fastify.post(
        "/loginRequestAdmin",
        {
            config,
            schema: {
                description: "login to admin",
                tags: ["api"],
                summary: "login to admin",
                body: {
                    type: 'object',
                    properties: {
                        email: { type: 'string' },
                        password: { type: 'string' },
                    },
                },    
                response: {
                    200: {
                        type: "object",
                        properties: {
                            status: { type: "string" },
                            token: { type: "string" },
                            accountId: { type: "number" }
                        },
                    },
                },
            },
        },
        async (request, reply) => {
            fastify.log.info(
                { body: request.body }, "[src#api#iam#loginRequestAdmin] Entering");
    
            const inputs = {...request.body};

            try {
                const response = await UsersController.login(inputs);

                const user = await UsersController.fetchUserByEmail(inputs);

                let roles;
                if (user.role) {
                    roles = user.role.map((role, idx) =>  {
                        if (role === 'administrator') {
                            return 'found';
                        }
                    });

                    if (roles.indexOf('found') > -1) {
                        reply.setCookie("simpatico", response.token, {
                            httpOnly: true,
                            secure: true,
                            path: "/",
                            domain: "21f49666.ngrok.io"
                        });
    
                        reply.send({
                            status: 'ok',
                            token: response.token,
                            accountId: user.accountId
                        });        

                    } else {
                        // Not correct role
                        throw new Error("User does not have role");
                    }
                } else {
                    throw new Error("User does not have role");
                }
            } catch (error) {
                throw error;
            }
        }
    );

    fastify.post(
        "/createUser",
        {
            config,
            schema: {
                description: "creates a user for a debate",
                tags: ["api"],
                summary: "creates a user for a debate",
                body: {
                    type: 'object',
                    properties: {
                        debateId: { type: 'number' },
                        accountId: { type: 'number' },
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
                        },
                    },
                },
            },
        },
        async (request, reply) => {
            fastify.log.info(
                { body: request.body }, "[src#api#iam#createUser] Entering");
    
            const inputs = {...request.body};

            const response = await UsersController.createUser(inputs);

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
                    url: `https://21f49666.ngrok.io/api/v1/activate?token=${response.token}`
                }
            };

            await EmailController.sendEmail(inputsEmali);

            return  {
                status: 'ok',
                reason: ""
            }
        }
    );

    fastify.get(
        "/login/google/callback",
        {
            config,
            schema: {
                description: "google social media callback url",
                tags: ["api"],
                summary: "google oauth callback url",
                querystring: {
                    state: { type: "string" },
                    scope: { type: "string" },
                    prompt: { type: "string" },
                    authuser: { type: "string" },
                    session_state: { type: "string" }
                }
            }
        },
        async (request, reply) => {
            fastify.log.info(
            { query: request.query },
            "[src#api#login/google/callback] Entering"
            );

            const authCodeResponse = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(
            request
            );

            const responseUserInfo = await fastify.httpclient.request(
            "https://www.googleapis.com/userinfo/v2/me",
            {
                headers: {
                Authorization: `Bearer ${authCodeResponse.access_token}`
                }
            }
            );

            const responseUserInfoJSON = JSON.parse(responseUserInfo.data);
            console.log("responseUserInfo", JSON.parse(responseUserInfo.data));

            const inputs = {
                firstName: responseUserInfoJSON.given_name,
                lastName: responseUserInfoJSON.family_name,
                email: responseUserInfoJSON.email
            };

            const responseCreate = await UsersController.createOrLogin(inputs);

            reply.setCookie("simpatico", responseCreate.token, {
                httpOnly: true,
                secure: true,
                path: "/",
                domain: "f84bf21a.ngrok.io"
            });

            reply.redirect(`/?token=${responseCreate.token}`);
        }
    );

    fastify.get(
        "/activate",
        {
            config,
            schema: {
                description: "activates an account",
                tags: ["api"],
                summary: "activates an account",
                querystring: {
                    token: { type: "string" },
                }
            }
        },
        async (request, reply) => {
            fastify.log.info(
            { query: request.query },
            "[src#api#activate] Entering"
            );

            const inputs = {...request.query};

            const responseActivate = await UsersController.activate(inputs);

            reply.setCookie("simpatico", responseActivate.token, {
                httpOnly: true,
                secure: true,
                path: "/",
                domain: "21f49666.ngrok.io"
            });

            reply.redirect(`/?token=${responseActivate.token}`);
        }
    );

    fastify.post(
        "/verifyToken",
        {
            config,
            schema: {
                description: "verify a provided token",
                tags: ["api"],
                body: {
                    type: "object",
                    properties: {
                        token: { type: "string" },
                        role: { type: "string" }
                    }
                },
                response: {
                    200: {
                        type: "object",
                        properties: {
                            isValidToken: { type: "boolean" }
                        }
                    }
                }
            }
        },
        async (request, reply) => {
            fastify.log.info(
            { body: request.body },
            "[src#api#verifyToken] Entering"
            );

            // Do I really like it, is it, is it wicked ?
            const inputs = { ...request.body };
            const isValidToken = await UsersController.verifyToken(inputs);

            if (isValidToken) {
            reply
                .setCookie("simpatico", request.body.token, {
                httpOnly: true,
                secure: true,
                path: "/"
                })
                .send({ isValidToken });
            }

            if (!isValidToken) {
                reply.send({ isValidToken });
            }
        }
    );
    
    fastify.get(
        "/fetchUserInfoAdmin",
        {
            config,
            preValidation: [fastify.authenticate],
            schema: {
                description: "get user info as admin for account",
                tags: ["api"],
                querystring: {
                    accountId: { type: "number" },
                    userId: { type: "number" }
                },
                response: {
                    200: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            "first-name": { type: "string" },
                            "last-name": { type: "string" },
                            email: { type: "string" },
                            bio: { type: "string" },
                            avatar: { type: "string" },
                            score: { type: "number" },
                            badge: { type: "number" },
                            debates: { 
                                type: "array",
                                items: {
                                    type: "number" 
                                },
                            },
                            role: { 
                                type: "array",
                                items: {
                                    type: "string" 
                                },
                            },
                            likes: { 
                                type: "array",
                                items: {
                                    type: "object" 
                                },
                            },
                            dislikes: { 
                                type: "array",
                                items: {
                                    type: "object" 
                                },
                            },
                            contributions: { 
                                type: "array",
                                items: {
                                    type: "object" 
                                },
                            }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info(
            { query: request.query },
            "[src#api#fetchUserInfoAdmin] Entering"
            );

            const inputs = { ...request.query };

            const user = await UsersController.fetchUserAdmin(inputs);

            return user;
        }
    );

    fastify.get(
        "/fetchUserInfo",
        {
            config,
            preValidation: [fastify.authenticate],
            schema: {
                description: "get user info, protected by token",
                tags: ["api"],
                response: {
                    200: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            "first-name": { type: "string" },
                            "last-name": { type: "string" },
                            email: { type: "string" },
                            bio: { type: "string" },
                            avatar: { type: "string" },
                            score: { type: "number" },
                            badge: { type: "number" },
                            likes: { 
                                type: "array",
                                items: {
                                    type: "object" 
                                },
                            },
                            dislikes: { 
                                type: "array",
                                items: {
                                    type: "object" 
                                },
                            },
                            contributions: { 
                                type: "array",
                                items: {
                                    type: "object" 
                                },
                            }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info(
            { user: request.user },
            "[src#api#fetchUserInfo] Entering"
            );

            const inputs = { uid: request.user.uid };

            const user = await UsersController.fetchUser(inputs);

            return user;
        }
    );

    fastify.get(
        "/fetchUsers",
        {
            config,
            preValidation: [fastify.authenticate],
            schema: {
                description: "get all user info for an account, protected by token",
                tags: ["api"],
                querystring: {
                    id: { type: "number" },
                },
                response: {
                    200: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "number" },
                                "first-name": { type: "string" },
                                "last-name": { type: "string" },
                                email: { type: "string" },
                                bio: { type: "string" },
                                avatar: { type: "string" },
                                score: { type: "number" },
                                badge: { type: "number" },
                                activated: { type: "boolean" },
                                role: {
                                    type: "array",
                                    items: {
                                        type: "string"
                                    }
                                },
                                debates: {
                                    type: "array",
                                    items: {
                                        type: "number"
                                    }
                                },
                                likes: { 
                                    type: "array",
                                    items: {
                                        type: "object" 
                                    },
                                },
                                dislikes: { 
                                    type: "array",
                                    items: {
                                        type: "object" 
                                    },
                                },
                                contributions: { 
                                    type: "array",
                                    items: {
                                        type: "object" 
                                    },
                                }
                            }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info(
            { query: request.query },
            "[src#api#fetchUsers] Entering"
            );

            const inputs = { ...request.query };

            const users = await UsersController.fetchUsers(inputs);

            return users;
        }
    );
}

module.exports = routes;