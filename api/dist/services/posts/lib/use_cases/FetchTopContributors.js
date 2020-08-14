"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function FetchTopContributors(id, _ref) {
  var postRepository = _ref.postRepository;
  return postRepository.fetchFetchTopContributors(id);
}

var _default = FetchTopContributors;
exports["default"] = _default;