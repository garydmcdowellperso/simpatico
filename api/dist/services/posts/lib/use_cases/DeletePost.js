"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Post = _interopRequireDefault(require("../entities/Post"));

async function DeletePost(id, uid, _ref) {
  var postRepository = _ref.postRepository;

  if (!id) {
    throw new Error("No ID");
  }

  if (!uid) {
    throw new Error("No uid");
  } // Find exiting post


  var post = await postRepository.get(parseInt(id, 10));

  if (!post) {
    throw new Error("Post does not exist");
  } // Are we the owner - if not, don't allow the update


  if (post.user !== uid) {
    throw new Error("Not the owner");
  }

  post.deleted = true;
  await postRepository.remove(post); // return the post

  return post;
}

var _default = DeletePost;
exports["default"] = _default;