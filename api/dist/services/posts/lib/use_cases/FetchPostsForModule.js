"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchPostsForModule(module, page, sort, _ref) {
  var postRepository = _ref.postRepository;
  return postRepository.fetchPostsForModule(module, page, sort);
}

var _default = FetchPostsForModule;
exports["default"] = _default;