import moment from "moment";
import { v4 as uuidv4 } from 'uuid'; 

const config = require('../../config');

const { postSchema } = require('../schemas/post');

import PostsController from "../../services/posts/lib/controllers/PostsController";
import UsersController from "../../services/iam/lib/controllers/UsersController";
import EmailController from "../../services/email/lib/controllers/EmailController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.post(
        '/createPost',
        {
            config,
            preValidation: [fastify.authenticate],
            preHandler: [fastify.authorise],
            schema: {
                description: 'creates a post',
                tags: ['api'],
                body: {
                    type: 'object',
                    properties: {
                        title: { type: 'string' },
                        contents: { type: 'string' },
                        module: { type: 'number' },
                    },
                },
                response: {
                    200: postSchema,
                }
            }
        },
        async request => {
            fastify.log.info(
            { user: request.user, body: request.body },
            "[src#api#createPost] Entering"
            );

            const timestamp = moment().format("X");
            const inputs = { 
              ...request.body, 
              timestamp, 
              user: request.user.uid,
              accountId: request.user.accountId
            };
            const response = await PostsController.createPost(inputs);

            // Send off notifications if we have mentions
            const regex = /(data-mention data-value=\"[a-zA-Z0-9]*\")+/gm;
            const found = request.body.contents.match(regex);
            if (found && found.length > 0) {
              // Send notification email
              const inputsEmali = {
                template: {
                    type: "post",
                    language: "en-US",
                    name: "mention"
                },
                email: {
                    to: "garydmcdowell@gmail.com",
                    from: "noreply@simpatico.cloud",
                    subject: "You have been mentioned in a post"
                },
                substitutions: {
                    firstname: "Gary",
                    lastname: "McDowell",
                    url: `https://${config.default.simpatico.hostname}/thread/?module=${request.body.module}#${response.id}`
                }
              };

              await EmailController.sendEmail(inputsEmali);
            }

            // Replace user which is an ID with a name
            const userinputs = { uid: response.user };
            const user = await UsersController.fetchUser(userinputs);
            response.uid = response.user;

            response.user = user["first-name"];
            response.avatar = user.avatar;

            return response;
        }
    );

    fastify.post(
        '/likePost',
        {
            config,
            preValidation: [fastify.authenticate],
            schema: {
                description: 'likes a post',
                tags: ['api'],
                body: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' }
                    },
                },
                response: {
                    200: postSchema,
                }
            },
        },
        async request => {
            fastify.log.info(
            { user: request.user, body: request.body },
            "[src#api#likePost] Entering"
            );

            const inputs = { ...request.body };
            const response = await PostsController.likePost(inputs);

            // Replace user which is an ID with a name
            const userinputs = { uid: request.user.uid };
            const user = await UsersController.fetchUser(userinputs);
            response.uid = request.user;

            response.user = user["first-name"];
            response.avatar = user.avatar;

            return response;
        }
    );

    fastify.post(
        '/dislikePost',
        {
            config,
            preValidation: [fastify.authenticate],
            schema: {
                description: 'dislikes a post',
                tags: ['api'],
                body: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' }
                    },
                },
                response: {
                    200: postSchema,
                }
            },
        },
        async request => {
            fastify.log.info(
            { user: request.user, body: request.body },
            "[src#api#dislikePost] Entering"
            );

            const inputs = { ...request.body };
            const response = await PostsController.dislikePost(inputs);

            // Replace user which is an ID with a name
            const userinputs = { uid: request.user.uid };
            const user = await UsersController.fetchUser(userinputs);
            response.uid = request.user.uid;

            response.user = user["first-name"];
            response.avatar = user.avatar;

            return response;
        }
    );

    fastify.post(
        '/updatePost',
        {
            config,
            preValidation: [fastify.authenticate],
            schema: {
                description: 'updates a post',
                tags: ['api'],
                body: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        contents: { type: 'string' }
                    },
                },
                response: {
                    200: postSchema,
                }
            },
        },
        async request => {
            fastify.log.info(
            { user: request.user, body: request.body },
            "[src#api#updatePost] Entering"
            );

            const inputs = { ...request.body, uid: request.user.uid };
            const response = await PostsController.updatePost(inputs);

            // Replace user which is an ID with a name
            const userinputs = { uid: request.user.uid };
            const user = await UsersController.fetchUser(userinputs);
            response.uid = request.user.uid;

            response.user = user["first-name"];
            response.avatar = user.avatar;

            return response;
        }
    );

    fastify.delete(
        '/deletePost',
        {
            config,
            preValidation: [fastify.authenticate],
            schema: {
                description: 'deletes a post',
                tags: ['api'],
                body: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' }
                    },
                },
                response: {
                    200: postSchema,
                }
            },
        },
        async request => {
            fastify.log.info(
            { user: request.user, body: request.body },
            "[src#api#deletePost] Entering"
            );

            const inputs = { ...request.body, uid: request.user.uid };
            const response = await PostsController.deletePost(inputs);

            // Replace user which is an ID with a name
            const userinputs = { uid: request.user.uid };
            const user = await UsersController.fetchUser(userinputs);
            response.uid = request.user.uid;

            response.user = user["first-name"];
            response.avatar = user.avatar;

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
                200: postSchema,
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
          const userinputs = { uid: request.user.uid };
          const user = await UsersController.fetchUser(userinputs);

          response.user = user["first-name"];
          response.avatar = user.avatar;

          if (response.replies) {
              const replies = await response.replies.map(async reply => {
                const userInputs = { uid: reply.user };
                const replyUser = await UsersController.fetchUser(userInputs);

                reply.user = replyUser["first-name"];
                reply.avatar = replyUser.avatar;

                return reply;
              });
              await Promise.all(replies);
          }

          return response;
        }
    );

  fastify.get(
    "/fetchPostsForModule",
    {
      config,
      preValidation: [fastify.authenticate],
      preHandler: [fastify.authorise],
      schema: {
        description: "fetches the posts for a given thread",
        tags: ["api"],
        querystring: {
          module: { type: "number" },
          page: { type: "number" },
          sort: { type: "string" }
        },
        response: {
          200: {
            type: "object",
            properties: {
              page: { type: "number" },
              more: { type: "boolean" },
              posts: {
                type: "array",
                  items: postSchema,
                }
              }
            }
          }
        }
    },
    async request => {
      fastify.log.info("[src#api#fetchPostsForModule] Entering");

      const inputs = {
        module: request.query.module,
        page: request.query.page,
        sort: request.query.sort
      };

      const response = await PostsController.fetchPostsForModule(inputs);
      const count = await PostsController.countPostsForModule(inputs);

      console.log('response', response)
      let more = false;

      if (response.length > 0) {
        if (request.query.page * 5 < count) {
          more = true;
        }
      }
      if (response.length > 0) {
        const resps = await response.map(async resp => {
          if (resp.replies === null) {
            delete resp.replies;
          }
          // Add name of user 
          const userinputs = { uid: resp.user };
          const user = await UsersController.fetchUser(userinputs);
          
          resp.uid = resp.user;
          resp.user = user["first-name"];
          resp.avatar = user.avatar;

          if (resp.replies) {
            const replies = await resp.replies.map(async reply => {
              const userInputs = { uid: reply.user };
              const replyUser = await UsersController.fetchUser(userInputs);

              resp.uid = resp.user;
              reply.user = replyUser["first-name"];
              resp.avatar = replyUser.avatar;

              return reply;
            });
            await Promise.all(replies);
          }

          return resp;
        });
        const posts = await Promise.all(resps);

        const final = {
          more,
          page: request.query.page,
          posts
        } 

        return final;
      }

      return {
         more,
	 page: 0,
	 posts: []
      }
    }
  );

  fastify.get(
    "/fetchAllPostsForModule",
    {
      config,
      schema: {
        description: "fetches the posts for a given module",
        tags: ["api"],
        querystring: {
          module: { type: "number" },
          sort: { type: "string" }
        },
        response: {
          200: {
            type: "object",
            properties: {
              posts: {
                type: "array",
                  items: postSchema,
                }
              }
            }
          }
        }
    },
    async request => {
      fastify.log.info("[src#api#fetchAllPostsForModule] Entering");

      const inputs = {
        module: request.query.module,
        sort: request.query.sort
      };

      const response = await PostsController.fetchAllPostsForModule(inputs);

      if (response.length > 0) {
        const resps = await response.map(async resp => {
          if (resp.replies === null) {
            delete resp.replies;
          }
          // Add name of user 
          const userinputs = { uid: resp.user };
          const user = await UsersController.fetchUser(userinputs);
          
          resp.uid = resp.user;
          resp.user = user["first-name"];
          resp.avatar = user.avatar;

          if (resp.replies) {
            const replies = await resp.replies.map(async reply => {
              const userInputs = { uid: reply.user };
              const replyUser = await UsersController.fetchUser(userInputs);

              resp.uid = resp.user;
              reply.user = replyUser["first-name"];
              resp.avatar = replyUser.avatar;

              return reply;
            });
            await Promise.all(replies);
          }

          return resp;
        });
        const posts = await Promise.all(resps);

        const final = {
          posts
        } 

        return final;
      }

      return [];
    }
  );

  fastify.get(
    "/fetchPosts",
    {
      config,
      schema: {
        description: "fetches the posts for an account (across all debates)",
        tags: ["api"],
        querystring: {
          id: { type: "number" }
        },
        response: {
          200: {
            type: "array",
            items: postSchema,
          }
        }
      }
    },
    async request => {
      fastify.log.info("[src#api#fetchPosts] Entering");

      const inputs = {...request.query};

      const response = await PostsController.fetchPosts(inputs);

      if (response.length > 0) {
        const resps = await response.map(async resp => {
          if (resp.replies == null) {
            delete resp.replies;
          }
          // Add name of user 
          const userinputs = { uid: resp.user };
          const user = await UsersController.fetchUser(userinputs);

          resp.uid = resp.user;
          resp.user = user["first-name"];
          resp.avatar = user.avatar;

          if (resp.replies) {
              const replies = await resp.replies.map(async reply => {
                const userInputs = { uid: reply.user };
                const replyUser = await UsersController.fetchUser(userInputs);

                resp.uid = resp.user;
                reply.user = replyUser["first-name"];
                resp.avatar = user.avatar;

                return reply;
              });
              await Promise.all(replies);
          }

          return resp;
        });
        const final = await Promise.all(resps);
        return final;
      }

      return [];
    }
  );

  fastify.get(
    "/fetchTopContributors",
    {
      config,
      schema: {
        description: "fetches the users who have made the most posts for an account",
        tags: ["api"],
        querystring: {
          id: { type: "number" }
        },
        response: {
          200: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                user: { type: "string" },
                module: { type: "number" },
                avatar: { type: "string" },
                contributions: { type: "number" },
              }
            }
          }
        }
      }
    },
    async request => {
      fastify.log.info("[src#api#fetchTopContributors] Entering");

      const inputs = {...request.query};

      const response = await PostsController.fetchTopContributors(inputs);

      if (response.length > 0) {
        const resps = await response.map(async resp => {
          if (resp.replies == null) {
            delete resp.replies;
          }
          // Add name of user 
          const userinputs = { uid: resp.id };
          const user = await UsersController.fetchUser(userinputs);

          resp.user = user["first-name"];
          resp.avatar = user.avatar;

          return resp;
        });
        const final = await Promise.all(resps);
        return final;
      }

      return [];
    }
  );

  fastify.post(
    '/exportPostsForModule',
    {
        config,
        preValidation: [fastify.authenticate],
        schema: {
            description: 'csv export of data, transferred by email',
            tags: ['api'],
            body: {
                type: 'object',
                properties: {
                    module: { type: 'number' },
                    fields: { 
                      type: 'object' 
                    },
                },
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        message: { type: 'string' }
                    }
                }
            }
        }
    },
    async (request, reply) => {
        fastify.log.info(
        { user: request.user, body: request.body },
        "[src#api#exportPostsForModule] Entering"
        );

        const inputs = {...request.body};

        reply
          .code(200)
          .header('Content-Type', 'application/json; charset=utf-8')
          .send({ status: 'ok', message: 'processing' })

        inputs.sort = 'Sort Ascending';

        const response = await PostsController.fetchAllPostsForModule(inputs);

        if (response.length > 0) {
          const resps = await response.map(async resp => {
            if (resp.replies === null) {
              delete resp.replies;
            }
            // Add name of user 
            const userinputs = { uid: resp.user };
            const user = await UsersController.fetchUser(userinputs);
            
            resp.uid = resp.user;
            resp.user = user["first-name"];
            resp.avatar = user.avatar;
  
            if (resp.replies) {
              const replies = await resp.replies.map(async reply => {
                const userInputs = { uid: reply.user };
                const replyUser = await UsersController.fetchUser(userInputs);
  
                resp.uid = resp.user;
                reply.user = replyUser["first-name"];
                resp.avatar = replyUser.avatar;
  
                return reply;
              });
              await Promise.all(replies);
            }
  
            return resp;
          });
          const posts = await Promise.all(resps);

          // Serialize object to CSV
          const filename = uuidv4(); 
          await PostsController.serializePostToCSV(posts, request.body.fields, filename)

          // Send notification email
          const inputsEmali = {
            template: {
                type: "export",
                language: "en-US",
                name: "default"
            },
            email: {
                to: "garydmcdowell@gmail.com",
                from: "noreply@simpatico.cloud",
                subject: "Export ready"
            },
            substitutions: {
                firstname: "Gary",
                lastname: "McDowell"
            },
            attachment: `/tmp/${filename}.csv`
          };

          await EmailController.sendEmail(inputsEmali);
        }
    }
  );
}

module.exports = routes;
