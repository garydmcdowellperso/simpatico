import config from '../config';

import PostsController from '../services/posts/lib/controllers/PostsController';

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
  fastify.get(
    '/ping',
    {
      config,
      schema: {
        description: 'tests if service is alive',
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
      schema: {
        description: 'creates a post',
        tags: ['api'],
        body: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            contents: { type: 'string' },
            user: { type: 'string' },
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
            },
          },
        },
      },
    },
    async request => {
      fastify.log.info(
        { body: request.body },
        '[src#api#createPost] Entering',
      );

      const response = await PostsController.createPost(request);
      return response;
    },
  );

  fastify.get(
    '/getAllPosts',
    {
      config,
      schema: {
        description: 'gets all posts',
        tags: ['api'],
        response: {
          200: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                title: { type: 'string' },
                contents: { type: 'string' },
                user: { type: 'string' },
              }
            },
          },
        },
      },
    },
    async request => {
      fastify.log.info(
        { body: request.body },
        '[src#api#getAllPosts] Entering',
      );

      const response = await PostsController.getAllPosts(request);
      return response;
    },
  );
};

export default routes;
