"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PageRepository =
/*#__PURE__*/
function () {
  function PageRepository(repository) {
    (0, _classCallCheck2["default"])(this, PageRepository);
    this.repository = repository;
  }

  (0, _createClass2["default"])(PageRepository, [{
    key: "persist",
    value: function persist(pageEntity) {
      return this.repository.persist(pageEntity);
    }
  }, {
    key: "merge",
    value: function merge(pageEntity) {
      return this.repository.merge(pageEntity);
    }
  }, {
    key: "remove",
    value: function remove(pageId) {
      return this.repository.remove(pageId);
    }
  }, {
    key: "get",
    value: function get(pageId) {
      return this.repository.get(pageId);
    }
  }, {
    key: "getByName",
    value: function getByName(name) {
      return this.repository.getByName(name);
    }
  }, {
    key: "findByDebateId",
    value: function findByDebateId(debateId) {
      return this.repository.findByDebateId(debateId);
    }
  }, {
    key: "find",
    value: function find() {
      return this.repository.find();
    }
  }]);
  return PageRepository;
}();

var _default = PageRepository;
exports["default"] = _default;