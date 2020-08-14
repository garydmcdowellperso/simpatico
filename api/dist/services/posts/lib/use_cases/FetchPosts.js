"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchPosts(id, _ref) {
  var postRepository = _ref.postRepository;
  return postRepository.fetchPosts(id);
}

var _default = FetchPosts;
exports["default"] = _default;