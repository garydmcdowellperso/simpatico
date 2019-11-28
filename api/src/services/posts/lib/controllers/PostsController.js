import PostSerializer from '../serializers/PostSerializer';
import CreatePost from '../use_cases/CreatePost';
import GetAllPosts from '../use_cases/GetAllPosts';
import PostRepository from '../repositories/PostRepository';

import PostRepositoryInMemory from '../interface_adapters/storage/PostRepositoryInMemory';

const postRepository = new PostRepository(new PostRepositoryInMemory())

async function createPost(request) {
  // Input
  const { title, contents, user } = request.body;

  // Treatment
  const response = await CreatePost(title, contents, user, {
    postRepository,
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

async function getAllPosts(request) {
  // Treatment
  const response = await GetAllPosts({
    postRepository,
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

module.exports = {
  createPost,
  getAllPosts
};
