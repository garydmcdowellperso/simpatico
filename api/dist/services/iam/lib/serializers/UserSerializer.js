"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _serializeSingleUser = function _serializeSingleUser(user) {
  return (0, _defineProperty2["default"])({
    id: user.id,
    'first-name': user.firstName,
    'last-name': user.lastName,
    email: user.email,
    password: user.password,
    activated: user.activated,
    token: user.token,
    role: user.role,
    bio: user.bio,
    avatar: user.avatar,
    score: user.score,
    badge: user.badge,
    likes: user.likes,
    dislikes: user.dislikes,
    contributions: user.contributions,
    accountId: user.accountId,
    debates: user.debates
  }, "accountId", user.accountId);
};

var UserSerializer =
/*#__PURE__*/
function () {
  function UserSerializer() {
    (0, _classCallCheck2["default"])(this, UserSerializer);
  }

  (0, _createClass2["default"])(UserSerializer, [{
    key: "serialize",
    value: function serialize(data) {
      if (!data) {
        throw new Error('Expect data to be not undefined nor null');
      }

      if (Array.isArray(data)) {
        return data.map(_serializeSingleUser);
      }

      return _serializeSingleUser(data);
    }
  }]);
  return UserSerializer;
}();

var _default = UserSerializer;
exports["default"] = _default;