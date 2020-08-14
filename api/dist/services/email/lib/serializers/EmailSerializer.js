"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _serializeSingleEmail = function _serializeSingleEmail(email) {
  return {
    template: email.template,
    email: email.email,
    substitutions: email.substitutions
  };
};

var EmailSerializer =
/*#__PURE__*/
function () {
  function EmailSerializer() {
    (0, _classCallCheck2["default"])(this, EmailSerializer);
  }

  (0, _createClass2["default"])(EmailSerializer, [{
    key: "serialize",
    value: function serialize(data) {
      if (!data) {
        throw new Error('Expect data to be not undefined nor null');
      }

      if (Array.isArray(data)) {
        return data.map(_serializeSingleEmail);
      }

      return _serializeSingleEmail(data);
    }
  }]);
  return EmailSerializer;
}();

var _default = EmailSerializer;
exports["default"] = _default;