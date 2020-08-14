"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _User = _interopRequireDefault(require("../../entities/User"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var UserRepositoryInMemory =
/*#__PURE__*/
function () {
  (0, _createClass2["default"])(UserRepositoryInMemory, [{
    key: "_initializeRepositoryWithTwoUsers",
    value: function _initializeRepositoryWithTwoUsers() {
      var _this = this;

      var john = new _User["default"](null, 'John', 'Doe', 'john.doe@mail.com', 'ABCD1234');
      var jane = new _User["default"](null, 'Jane', 'Smith', 'jane.smith@mail.com', 'EFGH5678');
      this.persist(john).then(function () {
        return _this.persist(jane);
      });
    }
  }, {
    key: "_dataAsArray",
    value: function _dataAsArray() {
      var _this2 = this;

      return Object.keys(this.data).map(function (key) {
        return _this2.data[key];
      });
    }
  }]);

  function UserRepositoryInMemory() {
    (0, _classCallCheck2["default"])(this, UserRepositoryInMemory);
    this.index = 1;
    this.data = {};

    this._initializeRepositoryWithTwoUsers();
  }

  (0, _createClass2["default"])(UserRepositoryInMemory, [{
    key: "persist",
    value: function persist(userEntity) {
      var row = _objectSpread({}, userEntity);

      var rowId = this.index += 1;
      row.id = rowId;
      this.data[rowId] = row;
      return Promise.resolve(row);
    }
  }, {
    key: "merge",
    value: function merge(userEntity) {
      var row = this.data[userEntity.id];
      Object.assign(row, userEntity);
      return Promise.resolve(row);
    }
  }, {
    key: "remove",
    value: function remove(userId) {
      delete this.data[userId];
      return Promise.resolve();
    }
  }, {
    key: "get",
    value: function get(userId) {
      return Promise.resolve(this.data[userId]);
    }
  }, {
    key: "getByEmail",
    value: function getByEmail(userEmail) {
      var users = this._dataAsArray();

      return Promise.resolve(users.find(function (user) {
        return user.email === userEmail;
      }));
    }
  }, {
    key: "find",
    value: function find() {
      return Promise.resolve(this._dataAsArray());
    }
  }]);
  return UserRepositoryInMemory;
}();

var _default = UserRepositoryInMemory;
exports["default"] = _default;