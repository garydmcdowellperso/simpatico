"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var UserRepository =
/*#__PURE__*/
function () {
  function UserRepository(repository) {
    (0, _classCallCheck2["default"])(this, UserRepository);
    this.repository = repository;
  }

  (0, _createClass2["default"])(UserRepository, [{
    key: "persist",
    value: function persist(userEntity) {
      return this.repository.persist(userEntity);
    }
  }, {
    key: "merge",
    value: function merge(userEntity) {
      return this.repository.merge(userEntity);
    }
  }, {
    key: "remove",
    value: function remove(userId) {
      return this.repository.remove(userId);
    }
  }, {
    key: "get",
    value: function get(userId) {
      return this.repository.get(userId);
    }
  }, {
    key: "getByAccountId",
    value: function getByAccountId(id) {
      return this.repository.getByAccountId(id);
    }
  }, {
    key: "getByUserIdAccountId",
    value: function getByUserIdAccountId(userId, accountId) {
      return this.repository.getByUserIdAccountId(userId, accountId);
    }
  }, {
    key: "getByEmail",
    value: function getByEmail(email) {
      return this.repository.getByEmail(email);
    }
  }, {
    key: "getByToken",
    value: function getByToken(token) {
      return this.repository.getByToken(token);
    }
  }, {
    key: "find",
    value: function find() {
      return this.repository.find();
    }
  }]);
  return UserRepository;
}();

var _default = UserRepository;
exports["default"] = _default;