"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Post = _interopRequireDefault(require("../entities/Post"));

async function CreatePost(title, contents, user, timestamp, module, accountId, _ref) {
  var postRepository = _ref.postRepository;

  if (!title) {
    throw new Error("No Title");
  }

  if (!contents) {
    throw new Error("No Contents");
  }

  if (!user) {
    throw new Error("No User");
  }

  if (!timestamp) {
    throw new Error("No timestamp");
  }

  if (!module) {
    throw new Error("No module");
  }

  if (!accountId) {
    throw new Error("No accountId");
  }

  var post = new _Post["default"](null, title, contents, user, timestamp, module, accountId, null, false);
  return postRepository.persist(post);
}

var _default = CreatePost;
exports["default"] = _default;