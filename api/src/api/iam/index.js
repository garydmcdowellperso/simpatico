const config = require('../../config');

import UsersController from "../../services/iam/lib/controllers/UsersController";

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
                description: "google social media callback url",
                tags: ["api"],
                summary: "google oauth callback url",
                body: {
                    type: 'object',
                    properties: {
                        username: { type: 'string' },
                        password: { type: 'string' },
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
                { body: request.body }, "[src#api#iam#loginRequest] Entering");
    
            const inputs = {...request.body};

            const response = await UsersController.login(inputs);

            reply.setCookie("simpatico", response.token, {
                httpOnly: true,
                secure: true,
                path: "/",
                domain: "8475c843.ngrok.io"
            });

            reply.redirect(`/?token=${response.token}`);
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
            console.log("responseCreate", responseCreate);

            reply.setCookie("simpatico", responseCreate.token, {
                httpOnly: true,
                secure: true,
                path: "/",
                domain: "f84bf21a.ngrok.io"
            });

            reply.redirect(`/?token=${responseCreate.token}`);
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
                token: { type: "string" }
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
                    email: { type: "string" }
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
}

module.exports = routes;