"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Post = _interopRequireDefault(require("../entities/Post"));

async function DislikePost(id, _ref) {
  var postRepository = _ref.postRepository;

  if (!id) {
    throw new Error("No ID");
  } // Find exiting post


  var post = await postRepository.get(parseInt(id, 10));

  if (!post) {
    throw new Error("Post does not exist");
  }

  if (!post.dislikes) {
    post.dislikes = 1;
  } else {
    post.dislikes += 1;
  }

  await postRepository.merge(post); // return the post

  return post;
}

var _default = DislikePost;
exports["default"] = _default;