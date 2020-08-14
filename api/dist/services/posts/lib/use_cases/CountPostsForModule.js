"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function CountPostsForModule(module, _ref) {
  var postRepository = _ref.postRepository;
  return postRepository.countPostsForModule(module);
}

var _default = CountPostsForModule;
exports["default"] = _default;