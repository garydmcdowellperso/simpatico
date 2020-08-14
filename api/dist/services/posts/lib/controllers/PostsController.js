"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _PostSerializer = _interopRequireDefault(require("../serializers/PostSerializer"));

var _PostCSVSerializer = _interopRequireDefault(require("../serializers/PostCSVSerializer"));

var _TopContributorsSerializer = _interopRequireDefault(require("../serializers/TopContributorsSerializer"));

var _CreatePost = _interopRequireDefault(require("../use_cases/CreatePost"));

var _ReplyPost = _interopRequireDefault(require("../use_cases/ReplyPost"));

var _LikePost = _interopRequireDefault(require("../use_cases/LikePost"));

var _DislikePost = _interopRequireDefault(require("../use_cases/DislikePost"));

var _UpdatePost = _interopRequireDefault(require("../use_cases/UpdatePost"));

var _DeletePost = _interopRequireDefault(require("../use_cases/DeletePost"));

var _FetchPostsForModule = _interopRequireDefault(require("../use_cases/FetchPostsForModule"));

var _FetchAllPostsForModule = _interopRequireDefault(require("../use_cases/FetchAllPostsForModule"));

var _CountPostsForModule = _interopRequireDefault(require("../use_cases/CountPostsForModule"));

var _FetchPosts = _interopRequireDefault(require("../use_cases/FetchPosts"));

var _FetchTopContributors = _interopRequireDefault(require("../use_cases/FetchTopContributors"));

var _PostRepository = _interopRequireDefault(require("../repositories/PostRepository"));

var _PostRepositoryMongo = _interopRequireDefault(require("../interface_adapters/storage/PostRepositoryMongo"));

var postRepository = new _PostRepository["default"](new _PostRepositoryMongo["default"]());

async function createPost(inputs) {
  // Inputs
  var title = inputs.title,
      contents = inputs.contents,
      user = inputs.user,
      timestamp = inputs.timestamp,
      module = inputs.module,
      accountId = inputs.accountId; // Treatment

  var response = await (0, _CreatePost["default"])(title, contents, user, timestamp, module, accountId, {
    postRepository: postRepository
  });
  var postSerializer = new _PostSerializer["default"]();
  return postSerializer.serialize(response);
}

async function replyPost(inputs) {
  // Inputs
  var id = inputs.id,
      contents = inputs.contents,
      user = inputs.user,
      timestamp = inputs.timestamp; // Treatment

  var response = await (0, _ReplyPost["default"])(id, contents, user, timestamp, {
    postRepository: postRepository
  });
  var postSerializer = new _PostSerializer["default"]();
  return postSerializer.serialize(response);
}

async function likePost(inputs) {
  // Inputs
  var id = inputs.id; // Treatment

  var response = await (0, _LikePost["default"])(id, {
    postRepository: postRepository
  });
  var postSerializer = new _PostSerializer["default"]();
  return postSerializer.serialize(response);
}

async function dislikePost(inputs) {
  // Inputs
  var id = inputs.id; // Treatment

  var response = await (0, _DislikePost["default"])(id, {
    postRepository: postRepository
  });
  var postSerializer = new _PostSerializer["default"]();
  return postSerializer.serialize(response);
}

async function updatePost(inputs) {
  // Inputs
  var id = inputs.id,
      contents = inputs.contents,
      uid = inputs.uid; // Treatment

  var response = await (0, _UpdatePost["default"])(id, contents, uid, {
    postRepository: postRepository
  });
  var postSerializer = new _PostSerializer["default"]();
  return postSerializer.serialize(response);
}

async function deletePost(inputs) {
  // Inputs
  var id = inputs.id,
      uid = inputs.uid; // Treatment

  var response = await (0, _DeletePost["default"])(id, uid, {
    postRepository: postRepository
  });
  var postSerializer = new _PostSerializer["default"]();
  return postSerializer.serialize(response);
}

async function fetchPostsForModule(inputs) {
  // Inputs
  var module = inputs.module,
      page = inputs.page,
      sort = inputs.sort; // Treatment

  var response = await (0, _FetchPostsForModule["default"])(module, page, sort, {
    postRepository: postRepository
  });
  var postSerializer = new _PostSerializer["default"]();
  return postSerializer.serialize(response);
}

async function fetchAllPostsForModule(inputs) {
  // Inputs
  var module = inputs.module,
      sort = inputs.sort; // Treatment

  var response = await (0, _FetchAllPostsForModule["default"])(module, sort, {
    postRepository: postRepository
  });
  var postSerializer = new _PostSerializer["default"]();
  return postSerializer.serialize(response);
}

async function serializePostToCSV(posts, fields, filename) {
  var postCSVSerializer = new _PostCSVSerializer["default"]();
  return postCSVSerializer.serialize(posts, fields, filename);
}

async function countPostsForModule(inputs) {
  // Inputs
  var module = inputs.module; // Treatment

  var response = await (0, _CountPostsForModule["default"])(module, {
    postRepository: postRepository
  });
  return response;
}

async function fetchPosts(inputs) {
  // Inputs
  var id = inputs.id; // Treatment

  var response = await (0, _FetchPosts["default"])(id, {
    postRepository: postRepository
  });
  var postSerializer = new _PostSerializer["default"]();
  return postSerializer.serialize(response);
}

async function fetchTopContributors(inputs) {
  // Inputs
  var id = inputs.id; // Treatment

  var response = await (0, _FetchTopContributors["default"])(id, {
    postRepository: postRepository
  });
  var topContributorsSerializer = new _TopContributorsSerializer["default"]();
  return topContributorsSerializer.serialize(response);
}

module.exports = {
  createPost: createPost,
  replyPost: replyPost,
  likePost: likePost,
  dislikePost: dislikePost,
  fetchPostsForModule: fetchPostsForModule,
  fetchAllPostsForModule: fetchAllPostsForModule,
  countPostsForModule: countPostsForModule,
  fetchPosts: fetchPosts,
  updatePost: updatePost,
  deletePost: deletePost,
  fetchTopContributors: fetchTopContributors,
  serializePostToCSV: serializePostToCSV
};