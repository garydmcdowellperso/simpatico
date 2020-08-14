"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var DebateRepository =
/*#__PURE__*/
function () {
  function DebateRepository(repository) {
    (0, _classCallCheck2["default"])(this, DebateRepository);
    this.repository = repository;
  }

  (0, _createClass2["default"])(DebateRepository, [{
    key: "persist",
    value: function persist(debateEntity) {
      return this.repository.persist(debateEntity);
    }
  }, {
    key: "merge",
    value: function merge(debateEntity) {
      return this.repository.merge(debateEntity);
    }
  }, {
    key: "remove",
    value: function remove(debateId) {
      return this.repository.remove(debateId);
    }
  }, {
    key: "get",
    value: function get(debateId) {
      return this.repository.get(debateId);
    }
  }, {
    key: "getByName",
    value: function getByName(name) {
      return this.repository.getByName(name);
    }
  }, {
    key: "getByAccountId",
    value: function getByAccountId(id) {
      return this.repository.getByAccountId(id);
    }
  }, {
    key: "find",
    value: function find() {
      return this.repository.find();
    }
  }]);
  return DebateRepository;
}();

var _default = DebateRepository;
exports["default"] = _default;