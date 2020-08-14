"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _moment = _interopRequireDefault(require("moment"));

var _serializeSingleAccount = function _serializeSingleAccount(account) {
  return {
    id: account.id,
    name: account.name,
    deleted: account.deleted
  };
};

var AccountSerializer =
/*#__PURE__*/
function () {
  function AccountSerializer() {
    (0, _classCallCheck2["default"])(this, AccountSerializer);
  }

  (0, _createClass2["default"])(AccountSerializer, [{
    key: "serialize",
    value: function serialize(data) {
      if (!data) {
        throw new Error('Expect data to be not undefined nor null');
      }

      if (Array.isArray(data)) {
        return data.map(_serializeSingleAccount);
      }

      return _serializeSingleAccount(data);
    }
  }]);
  return AccountSerializer;
}();

var _default = AccountSerializer;
exports["default"] = _default;