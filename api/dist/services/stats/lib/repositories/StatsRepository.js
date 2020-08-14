"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var StatsRepository =
/*#__PURE__*/
function () {
  function StatsRepository(repository) {
    (0, _classCallCheck2["default"])(this, StatsRepository);
    this.repository = repository;
  }

  (0, _createClass2["default"])(StatsRepository, [{
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
    key: "getByAccountId",
    value: function getByAccountId(accountId) {
      return this.repository.getByAccountId(accountId);
    }
  }, {
    key: "getLatestByAccountId",
    value: function getLatestByAccountId(accountId) {
      return this.repository.getLatestByAccountId(accountId);
    }
  }, {
    key: "getByDebateId",
    value: function getByDebateId(debateId) {
      return this.repository.getByDebateId(debateId);
    }
  }, {
    key: "getLatestByDebateId",
    value: function getLatestByDebateId(debateId) {
      return this.repository.getLatestByDebateId(debateId);
    }
  }, {
    key: "find",
    value: function find() {
      return this.repository.find();
    }
  }]);
  return StatsRepository;
}();

var _default = StatsRepository;
exports["default"] = _default;