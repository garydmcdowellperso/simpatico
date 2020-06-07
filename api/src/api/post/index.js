import moment from "moment";

const config = require('../../config');

import PostsController from "../../services/posts/lib/controllers/PostsController";
import UsersController from "../../services/iam/lib/controllers/UsersController";

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
            schema: {
                description: 'creates a post',
                tags: ['api'],
                body: {
                    type: 'object',
                    properties: {
                        title: { type: 'string' },
                        contents: { type: 'string' },
                        module: { type: 'number' }
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
                            uid: { type: 'number' },
                            timestamp: { type: "string" },
                            module: { type: "number" }
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
            response.uid = response.user;

            response.user = user["first-name"];
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
                    200: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            title: { type: 'string' },
                            contents: { type: 'string' },
                            user: { type: 'string' },
                            uid: { type: 'number' },
                            timestamp: { type: "string" },
                            module: { type: "number" },
                            likes: { type: "number" },
                            dislikes: { type: "number" },
                            deleted: { type: "boolean" }
                        }
                    }
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
                    200: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            title: { type: 'string' },
                            contents: { type: 'string' },
                            user: { type: 'string' },
                            uid: { type: 'number' },
                            timestamp: { type: "string" },
                            module: { type: "number" },
                            likes: { type: "number" },
                            dislikes: { type: "number" },
                            deleted: { type: "boolean" }
                        }
                    }
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
                    200: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            title: { type: 'string' },
                            contents: { type: 'string' },
                            user: { type: 'string' },
                            uid: { type: 'number' },
                            timestamp: { type: "string" },
                            module: { type: "number" },
                            likes: { type: "number" },
                            dislikes: { type: "number" },
                            deleted: { type: "boolean" }
                        }
                    }
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
                    200: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            title: { type: 'string' },
                            contents: { type: 'string' },
                            user: { type: 'string' },
                            uid: { type: 'number' },
                            timestamp: { type: "string" },
                            module: { type: "number" },
                            likes: { type: "number" },
                            dislikes: { type: "number" },
                            deleted: { type: "boolean" }
                        }
                    }
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
                    deleted: { type: "boolean" },
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
        const userinputs = { uid: request.user.uid };
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
    "/fetchPostsForModule",
    {
      config,
      schema: {
        description: "fetches the posts for a given thread",
        tags: ["api"],
        querystring: {
          module: { type: "number" },
          page: { type: "number" }
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
                uid: { type: "number" },
                timestamp: { type: "string" },
                timestamp_unix: { type: "string" },
                module: { type: "number" },
                likes: { type: "number" },
                dislikes: { type: "number" },
                deleted: { type: "boolean" },
                replies: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      title: { type: "string" },
                      contents: { type: "string" },
                      user: { type: "string" },
                      uid: { type: "number" },
                      timestamp: { type: "string" },
                      timestamp_unix: { type: "string" },
                      likes: { type: "number" },
                      dislikes: { type: "number" }      
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
      fastify.log.info("[src#api#fetchPostsForModule] Entering");

      const inputs = {
        module: request.query.module,
        page: request.query.page
      };

      const response = await PostsController.fetchPostsForModule(inputs);

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

          if (resp.replies) {
            const replies = await resp.replies.map(async reply => {
              const userInputs = { uid: reply.user };
              const replyUser = await UsersController.fetchUser(userInputs);

              resp.uid = resp.user;
              reply.user = replyUser["first-name"];

              return reply;
            });
            await Promise.all(replies);
          }

          return resp;
        });
        const final = await Promise.all(resps);
        console.log('return', final)
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
            items: {
              type: "object",
              properties: {
                id: { type: "number" },
                title: { type: "string" },
                contents: { type: "string" },
                user: { type: "string" },
                avatar: { type: "string" },
                uid: { type: "number" },
                timestamp: { type: "string" },
                timestamp_unix: { type: "string" },
                module: { type: "number" },
                likes: { type: "number" },
                dislikes: { type: "number" },
                deleted: { type: "boolean" },
                replies: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      title: { type: "string" },
                      contents: { type: "string" },
                      user: { type: "string" },
                      avatar: { type: "string" },
                      uid: { type: "number" },
                      timestamp: { type: "string" },
                      timestamp_unix: { type: "string" },
                      likes: { type: "number" },
                      dislikes: { type: "number" }      
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

}

module.exports = routes;