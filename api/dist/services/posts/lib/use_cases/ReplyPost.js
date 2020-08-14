"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Post = _interopRequireDefault(require("../entities/Post"));

async function ReplyPost(id, contents, user, timestamp, _ref) {
  var postRepository = _ref.postRepository;

  if (!id) {
    throw new Error("No ID");
  }

  if (!contents) {
    throw new Error("No Contents");
  }

  if (!user) {
    throw new Error("No User");
  }

  if (!timestamp) {
    throw new Error("No timestamp");
  } // Find exiting post


  var parent = await postRepository.get(parseInt(id, 10));

  if (!parent) {
    throw new Error("Post does not exist");
  }

  var childPost = new _Post["default"](null, null, contents, user, timestamp, null);
  childPost = await postRepository.persist(childPost);

  if (parent.replies && parent.replies.length > 0) {
    parent.replies.push(childPost);
  } else {
    parent.replies = [childPost];
  }

  return postRepository.merge(parent);
}

var _default = ReplyPost;
exports["default"] = _default;