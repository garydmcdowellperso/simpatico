"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PostRepositoryInMemory =
/*#__PURE__*/
function () {
  (0, _createClass2["default"])(PostRepositoryInMemory, [{
    key: "_dataAsArray",
    value: function _dataAsArray() {
      var _this = this;

      return Object.keys(this.data).map(function (key) {
        return _this.data[key];
      });
    }
  }]);

  function PostRepositoryInMemory() {
    (0, _classCallCheck2["default"])(this, PostRepositoryInMemory);
    this.index = 0;
    this.data = [];
  }

  (0, _createClass2["default"])(PostRepositoryInMemory, [{
    key: "persist",
    value: function persist(postEntity) {
      var row = _objectSpread({}, postEntity);

      var rowId = this.index += 1;
      row.id = rowId;
      this.data[rowId - 1] = row;
      return Promise.resolve(row);
    }
  }, {
    key: "merge",
    value: function merge(postEntity) {
      var row = this.data[postEntity.id - 1];
      Object.assign(row, postEntity);
      return Promise.resolve(row);
    }
  }, {
    key: "remove",
    value: function remove(postId) {
      delete this.data[postId];
      return Promise.resolve();
    }
  }, {
    key: "get",
    value: function get(postId) {
      return Promise.resolve(this.data[postId - 1]);
    }
  }, {
    key: "find",
    value: function find() {
      return Promise.resolve(this._dataAsArray());
    }
  }]);
  return PostRepositoryInMemory;
}();

var _default = PostRepositoryInMemory;
exports["default"] = _default;