import PostSerializer from "../serializers/PostSerializer";
import TopContributorsSerializer from "../serializers/TopContributorsSerializer";

import CreatePost from "../use_cases/CreatePost";
import ReplyPost from "../use_cases/ReplyPost";
import LikePost from "../use_cases/LikePost";
import DislikePost from "../use_cases/DislikePost";
import UpdatePost from "../use_cases/UpdatePost";
import DeletePost from "../use_cases/DeletePost";
import FetchPostsForModule from "../use_cases/FetchPostsForModule";
import FetchPosts from "../use_cases/FetchPosts";
import FetchTopContributors from "../use_cases/FetchTopContributors";
import PostRepository from "../repositories/PostRepository";

import PostRepositoryMongo from "../interface_adapters/storage/PostRepositoryMongo";

const postRepository = new PostRepository(new PostRepositoryMongo());

async function createPost(inputs) {
  // Inputs
  const { title, contents, user, timestamp, module } = inputs;

  // Treatment
  const response = await CreatePost(title, contents, user, timestamp, module, {
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

async function likePost(inputs) {
  // Inputs
  const { id } = inputs;

  // Treatment
  const response = await LikePost(id, {
    postRepository
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

async function dislikePost(inputs) {
  // Inputs
  const { id } = inputs;

  // Treatment
  const response = await DislikePost(id, {
    postRepository
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

async function updatePost(inputs) {
  // Inputs
  const { id, contents, uid } = inputs;

  // Treatment
  const response = await UpdatePost(id, contents, uid, {
    postRepository
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

async function deletePost(inputs) {
  // Inputs
  const { id, uid } = inputs;

  // Treatment
  const response = await DeletePost(id, uid, {
    postRepository
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

async function fetchPostsForModule(inputs) {
  // Inputs
  const { module, page } = inputs;

  // Treatment
  const response = await FetchPostsForModule(module, page, {
    postRepository
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

async function fetchPosts(inputs) {
  // Inputs
  const { id } = inputs;

  // Treatment
  const response = await FetchPosts(id, {
    postRepository
  });

  const postSerializer = new PostSerializer();
  return postSerializer.serialize(response);
}

async function fetchTopContributors(inputs) {
  // Inputs
  const { id } = inputs;

  // Treatment
  const response = await FetchTopContributors(id, {
    postRepository
  });

  const topContributorsSerializer = new TopContributorsSerializer();
  return topContributorsSerializer.serialize(response);
}

module.exports = {
  createPost,
  replyPost,
  likePost,
  dislikePost,
  fetchPostsForModule,
  fetchPosts,
  updatePost,
  deletePost,
  fetchTopContributors
};
