"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchPostsForThread(thread, page, _ref) {
  var postRepository = _ref.postRepository;
  return postRepository.fetchPostsForThread(thread, page);
}

var _default = FetchPostsForThread;
exports["default"] = _default;