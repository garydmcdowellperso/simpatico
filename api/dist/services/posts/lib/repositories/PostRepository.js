"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PostRepository =
/*#__PURE__*/
function () {
  function PostRepository(repository) {
    (0, _classCallCheck2["default"])(this, PostRepository);
    this.repository = repository;
  }

  (0, _createClass2["default"])(PostRepository, [{
    key: "persist",
    value: function persist(postEntity) {
      return this.repository.persist(postEntity);
    }
  }, {
    key: "merge",
    value: function merge(postEntity) {
      return this.repository.merge(postEntity);
    }
  }, {
    key: "remove",
    value: function remove(postId) {
      return this.repository.remove(postId);
    }
  }, {
    key: "get",
    value: function get(postId) {
      return this.repository.get(postId);
    }
  }, {
    key: "fetchPostsForModule",
    value: function fetchPostsForModule(module, page, sort) {
      return this.repository.fetchPostsForModule(module, page, sort);
    }
  }, {
    key: "fetchAllPostsForModule",
    value: function fetchAllPostsForModule(module, sort) {
      return this.repository.fetchAllPostsForModule(module, sort);
    }
  }, {
    key: "fetchPosts",
    value: function fetchPosts(id) {
      return this.repository.fetchPosts(id);
    }
  }, {
    key: "fetchFetchTopContributors",
    value: function fetchFetchTopContributors(id) {
      return this.repository.fetchFetchTopContributors(id);
    }
  }, {
    key: "countPostsForModule",
    value: function countPostsForModule(module) {
      return this.repository.countPostsForModule(module);
    }
  }, {
    key: "find",
    value: function find() {
      return this.repository.find();
    }
  }]);
  return PostRepository;
}();

var _default = PostRepository;
exports["default"] = _default;