const config = require('../../config');

import UsersController from "../../services/iam/lib/controllers/UsersController";
import EmailController from "../../services/email/lib/controllers/EmailController";
import DebatesController from "../../services/debates/lib/controllers/DebatesController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.post(
        "/changePassword",
        {
            config,
            schema: {
                description: "Changes a users password for a debate",
                tags: ["api"],
                summary: "Changes a users password for a debate",
                body: {
                    type: 'object',
                    properties: {
                        email: { type: 'string' },
                        password: { type: 'string' },
                        debateName: { type: 'string' },
                        token: { type: 'string' },
                    },
                },    
                response: {
                    200: {
                        type: "object",
                        properties: {
                            status: { type: "string" },
                            token: { type: "string" },
                            accountId: { type: 'number' }
                        },
                    },
                },
            },
        },
        async (request, reply) => {
            fastify.log.info(
                { body: request.body }, "[src#api#iam#changePassword] Entering");
    
            const inputs = {...request.body};
            inputs.name = request.body.debateName;

            try {
                const response = await UsersController.login(inputs);

                const user = await UsersController.fetchUserByEmail(inputs);

                // Check token still matches
                if (user.token !== request.body.token) {
                    throw new Error("Invald token");
                }

                // Can they acceess this debate ?
                if (!request.body.debateName) {
                    throw new Error("No debate provided");
                }

                if (request.body.debateName) {
                    const debate = await DebatesController.fetchDebate(inputs);

                    let debateFound;
                    debateFound = user.debates.map((dbt, idx) =>  {
                        if (dbt === debate.id) {
                            return 'found';
                        }
                    });

                    if (!debateFound.indexOf('found') === -1) {
                        throw new Error("Cannot access this debate");
                    }
                }

                let roles;
                if (user.role) {
                    roles = user.role.map((role, idx) =>  {
                        if (role === 'participant') {
                            return 'found';
                        }
                    });

                    if (roles.indexOf('found') > -1) {
                        // Update password, remove token, log them in
                        inputs.id = user.id;

                        await UsersController.changePasswordSuccess(inputs);

                        reply.setCookie("simpatico", response.token, {
                            httpOnly: true,
                            secure: true,
                            path: "/",
                            domain: config.default.simpatico.hostname
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

    fastify.get(
        "/verifyChangePasswordToken",
        {
            config,
            schema: {
                description: "verify a token for change password",
                tags: ["api"],
                querystring: {
                    token: { type: "string" },
                    email: { type: "string" }
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
            { query: request.query  },
            "[src#api#verifyChangePasswordToken] Entering"
            );

            const inputs = { ...request.query };

            // Check the user exists
            const user = await UsersController.fetchUserByEmail(inputs)
            if (!user) {
                fastify.log.info("[src#api#verifyChangePasswordToken] No usch user");
        
                return { isValidToken: false };
            }

            // Stored token matches sent one
            console.log(user.token)
            console.log(request.query.token)
            if (user.token !== request.query.token) {
                fastify.log.info("[src#api#verifyChangePasswordToken] Token doesn't match");

                return { isValidToken: false };
            }

            // Do I really like it, is it, is it wicked ?
            const isValidToken = await UsersController.verifyChangePasswordToken(inputs);

            reply.send({ isValidToken });
        }
    );

    fastify.post(
        "/forgottenPassword",
        {
            config,
            schema: {
                description: "Sends a password reset link",
                tags: ["api"],
                summary: "Sends a password reset link",
                body: {
                    type: 'object',
                    properties: {
                        email: { type: 'string' },
                        debateName: { type: 'string' },
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
                { body: request.body }, "[src#api#iam#forgottenPassword] Entering");
    
            const inputs = {...request.body};
            inputs.name = request.body.debateName;

            try {
                const response = await UsersController.resetPassword(inputs);

                const user = await UsersController.fetchUserByEmail(inputs);

                // Can they acceess this debate ?
                if (!request.body.debateName) {
                    throw new Error("No debate provided");
                }

                if (request.body.debateName) {
                    const debate = await DebatesController.fetchDebate(inputs);

                    let debateFound;
                    debateFound = user.debates.map((dbt, idx) =>  {
                        if (dbt === debate.id) {
                            return 'found';
                        }
                    });

                    if (!debateFound.indexOf('found') === -1) {
                        throw new Error("Cannot access this debate");
                    }
                }

                // Send email
                const inputsEmali = {
                    template: {
                        type: "account",
                        language: "en-US",
                        name: "forgottenpassword"
                    },
                    email: {
                        to: request.body.email,
                        from: "noreply@simpatico.cloud",
                        subject: "Reset your password"
                    },
                    substitutions: {
                        url: `https://${config.default.simpatico.hostname}/login/change?email=${request.body.email}&token=${response.token}`
                    }
                };

                await EmailController.sendEmail(inputsEmali);

                return  {
                    status: 'ok',
                    reason: ""
                }
            } catch (error) {
                throw error;
            }
        }
    );

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
                        debateName: { type: 'string' },
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
            inputs.name = request.body.debateName;

            try {
                const response = await UsersController.login(inputs);

                const user = await UsersController.fetchUserByEmail(inputs);

                // Can they acceess this debate ?
                if (!request.body.debateName) {
                    throw new Error("No debate provided");
                }

                if (request.body.debateName) {
                    const debate = await DebatesController.fetchDebate(inputs);

                    let debateFound;
                    debateFound = user.debates.map((dbt, idx) =>  {
                        if (dbt === debate.id) {
                            return 'found';
                        }
                    });

                    if (!debateFound.indexOf('found') === -1) {
                        throw new Error("Cannot access this debate");
                    }
                }

                let roles;
                if (user.role) {
                    roles = user.role.map((role, idx) =>  {
                        if (role === 'participant') {
                            return 'found';
                        }
                    });

                    if (roles.indexOf('found') > -1) {
                        reply.setCookie("simpatico", response.token, {
                            httpOnly: true,
                            secure: true,
                            path: "/",
                            domain: config.default.simpatico.hostname
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
                            domain: config.default.simpatico.hostname
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
                    type: "account",
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
                    url: `https://${config.default.simpatico.hostname}/api/v1/activate?token=${response.token}`
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
                domain: config
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

            const { token, role } = await UsersController.activate(inputs);

            reply.setCookie("simpatico", token, {
                httpOnly: true,
                secure: true,
                path: "/",
                domain: config.default.simpatico.hostname
            });

            if (role.includes('administrator')) {
                reply.redirect(`/admin/?token=${token}`);
            } else {
                reply.redirect(`/?token=${token}`);
            }
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
                            accountId: { type: "number" },
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