"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var AccountRepository =
/*#__PURE__*/
function () {
  function AccountRepository(repository) {
    (0, _classCallCheck2["default"])(this, AccountRepository);
    this.repository = repository;
  }

  (0, _createClass2["default"])(AccountRepository, [{
    key: "persist",
    value: function persist(accountEntity) {
      return this.repository.persist(accountEntity);
    }
  }, {
    key: "merge",
    value: function merge(accountEntity) {
      return this.repository.merge(accountEntity);
    }
  }, {
    key: "remove",
    value: function remove(accountId) {
      return this.repository.remove(accountId);
    }
  }, {
    key: "get",
    value: function get(accountId) {
      return this.repository.get(accountId);
    }
  }, {
    key: "getByName",
    value: function getByName(name) {
      return this.repository.getByName(name);
    }
  }, {
    key: "find",
    value: function find() {
      return this.repository.find();
    }
  }]);
  return AccountRepository;
}();

var _default = AccountRepository;
exports["default"] = _default;