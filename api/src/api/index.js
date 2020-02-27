import moment from "moment";

import config from "../config";

import PostsController from "../services/posts/lib/controllers/PostsController";
import UsersController from "../services/iam/lib/controllers/UsersController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
  fastify.get(
    "/ping",
    {
      config,
      schema: {
        description: "tests if service is alive",
        tags: ['api'],
        summary: 'tests if service is alive',
        response: {
          200: {
            type: 'object',
            properties: {
              response: { type: 'string' },
            },
          },
        },
      },
    },
    async () => {
      fastify.log.debug('[src#api#ping] Entering');

      const result = await fastify.countEvents();
      if (result > 0) {
        return { response: 'ok' };
      }

      throw new Error('Not ok');
    },
  );

  fastify.post(
    '/createPost',
    {
      config,
      preValidation: [fastify.authenticate],
      schema: {
        description: 'creates a post',
        tags: ['api'],
        body: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            contents: { type: 'string' },
            thread: { type: 'number' }
          },
        },
        response: {
          200: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              title: { type: 'string' },
              contents: { type: 'string' },
              user: { type: 'string' },
              timestamp: { type: "string" },
              thread: { type: "number" }
            }
          }
        }
      }
    },
    async request => {
      fastify.log.info(
        { user: request.user, body: request.body },
        "[src#api#createPost] Entering"
      );

      const timestamp = moment().format("X");
      const inputs = { ...request.body, timestamp, user: request.user.uid };
      const response = await PostsController.createPost(inputs);

      // Replace user which is an ID with a name
      const userinputs = { uid: response.user };
      const user = await UsersController.fetchUser(userinputs);

      response.user = user["first-name"];
      return response;
    }
  );

  fastify.post(
    "/replyPost",
    {
      config,
      preValidation: [fastify.authenticate],
      schema: {
        description: "replies to a post",
        tags: ["api"],
        body: {
          type: "object",
          properties: {
            id: { type: "string" },
            contents: { type: "string" }
          }
        },
        response: {
          200: {
            type: "object",
            properties: {
              id: { type: "number" },
              title: { type: "string" },
              contents: { type: "string" },
              user: { type: "string" },
              timestamp: { type: "string" },
              replies: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: { type: "number" },
                    title: { type: "string" },
                    contents: { type: "string" },
                    user: { type: "string" },
                    timestamp: { type: "string" }
                  }
                }
              }
            }
          }
        }
      }
    },
    async request => {
      fastify.log.info(
        { user: request.user, body: request.body },
        "[src#api#replyPost] Entering"
      );

      const timestamp = moment().format("X");
      const inputs = { ...request.body, timestamp, user: request.user.uid };
      const response = await PostsController.replyPost(inputs);

      // Replace user which is an ID with a name
      const userinputs = { uid: response.user };
      const user = await UsersController.fetchUser(userinputs);

      response.user = user["first-name"];

      if (response.replies) {
        const replies = await response.replies.map(async reply => {
          const userInputs = { uid: reply.user };
          const replyUser = await UsersController.fetchUser(userInputs);

          reply.user = replyUser["first-name"];

          return reply;
        });
        await Promise.all(replies);
      }

      return response;
    }
  );

  fastify.get(
    "/fetchPostsForThread",
    {
      config,
      schema: {
        description: "fetches the posts for a given thread",
        tags: ["api"],
        querystring: {
          thread: { type: "number" }
        },
        response: {
          200: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                title: { type: "string" },
                contents: { type: "string" },
                user: { type: "string" },
                timestamp: { type: "string" },
                thread: { type: "number" },
                replies: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      title: { type: "string" },
                      contents: { type: "string" },
                      user: { type: "string" },
                      timestamp: { type: "string" }
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
      fastify.log.info("[src#api#fetchPostsForThread] Entering");

      const inputs = {
        thread: request.query.thread
      };

      const response = await PostsController.fetchPostsForThread(inputs);

      if (response.length > 0) {
        const resps = await response.map(async resp => {
          console.log('resp', resp)
          // Replace user which is an ID with a name
          const userinputs = { uid: resp.user };
          const user = await UsersController.fetchUser(userinputs);

          resp.user = user["first-name"];

          if (resp.replies) {
            const replies = await response.replies.map(async reply => {
              const userInputs = { uid: reply.user };
              const replyUser = await UsersController.fetchUser(userInputs);

              reply.user = replyUser["first-name"];

              return reply;
            });
            await Promise.all(replies);
          }
        });
        await Promise.all(resps);
        response
        return response;
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
};

export default routes;
