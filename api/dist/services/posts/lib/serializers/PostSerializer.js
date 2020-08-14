"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _moment = _interopRequireDefault(require("moment"));

var _serializeSinglePost = function _serializeSinglePost(post) {
  return {
    id: post.id,
    title: post.title,
    contents: post.contents,
    user: post.user,
    timestamp: _moment["default"].unix(post.timestamp).format("DD/MM/YYYY hh:mm:ss"),
    timestamp_unix: post.timestamp,
    module: post.module,
    replies: post.replies && post.replies.map(_serializeSinglePost),
    likes: post.likes,
    dislikes: post.dislikes,
    deleted: post.deleted
  };
};

var PostSerializer =
/*#__PURE__*/
function () {
  function PostSerializer() {
    (0, _classCallCheck2["default"])(this, PostSerializer);
  }

  (0, _createClass2["default"])(PostSerializer, [{
    key: "serialize",
    value: function serialize(data) {
      if (!data) {
        throw new Error('Expect data to be not undefined nor null');
      }

      if (Array.isArray(data)) {
        return data.map(_serializeSinglePost);
      }

      return _serializeSinglePost(data);
    }
  }]);
  return PostSerializer;
}();

var _default = PostSerializer;
exports["default"] = _default;