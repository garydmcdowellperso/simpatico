"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _serializeToken = function _serializeToken(token) {
  return {
    token: token
  };
};

var TokenSerializer =
/*#__PURE__*/
function () {
  function TokenSerializer() {
    (0, _classCallCheck2["default"])(this, TokenSerializer);
  }

  (0, _createClass2["default"])(TokenSerializer, [{
    key: "serialize",
    value: function serialize(data) {
      if (!data) {
        throw new Error("Expect data to be not undefined nor null");
      }

      if (Array.isArray(data)) {
        return data.map(_serializeToken);
      }

      return _serializeToken(data);
    }
  }]);
  return TokenSerializer;
}();

var _default = TokenSerializer;
exports["default"] = _default;