"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchAllPostsForModule(module, sort, _ref) {
  var postRepository = _ref.postRepository;
  return postRepository.fetchAllPostsForModule(module, sort);
}

var _default = FetchAllPostsForModule;
exports["default"] = _default;