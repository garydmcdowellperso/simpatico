import PostSerializer from "../serializers/PostSerializer";
import CreatePost from "../use_cases/CreatePost";
import ReplyPost from "../use_cases/ReplyPost";
import FetchPostsForThread from "../use_cases/FetchPostsForThread";
import PostRepository from "../repositories/PostRepository";

import PostRepositoryMongo from "../interface_adapters/storage/PostRepositoryMongo";

const postRepository = new PostRepository(new PostRepositoryMongo());

async function createPost(inputs) {
  // Inputs
  const { title, contents, user, timestamp, thread } = inputs;

  // Treatment
  const response = await CreatePost(title, contents, user, timestamp, thread, {
    postRepository
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

async function replyPost(inputs) {
  // Inputs
  const { id, contents, user, timestamp } = inputs;

  // Treatment
  const response = await ReplyPost(id, contents, user, timestamp, {
    postRepository
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

async function fetchPostsForThread(inputs) {
  // Inputs
  const { thread } = inputs;

  // Treatment
  const response = await FetchPostsForThread(thread, {
    postRepository
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

module.exports = {
  createPost,
  replyPost,
  fetchPostsForThread
};
