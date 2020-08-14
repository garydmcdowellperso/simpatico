"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ModuleRepository =
/*#__PURE__*/
function () {
  function ModuleRepository(repository) {
    (0, _classCallCheck2["default"])(this, ModuleRepository);
    this.repository = repository;
  }

  (0, _createClass2["default"])(ModuleRepository, [{
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
    key: "getByTitle",
    value: function getByTitle(title) {
      return this.repository.getByTitle(title);
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
  return ModuleRepository;
}();

var _default = ModuleRepository;
exports["default"] = _default;