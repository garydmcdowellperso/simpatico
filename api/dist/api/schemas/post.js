"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _replies;

var postSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number'
    },
    title: {
      type: 'string'
    },
    contents: {
      type: 'string'
    },
    user: {
      type: 'string'
    },
    avatar: {
      type: "string"
    },
    uid: {
      type: 'number'
    },
    timestamp: {
      type: "string"
    },
    module: {
      type: "number"
    },
    accountId: {
      type: "number"
    },
    likes: {
      type: "number"
    },
    dislikes: {
      type: "number"
    },
    shares: {
      type: "number"
    },
    deleted: {
      type: "boolean"
    },
    replies: (_replies = {
      type: "array",
      items: postSchema
    }, (0, _defineProperty2["default"])(_replies, "type", "object"), (0, _defineProperty2["default"])(_replies, "properties", {
      id: {
        type: 'number'
      },
      title: {
        type: 'string'
      },
      contents: {
        type: 'string'
      },
      user: {
        type: 'string'
      },
      avatar: {
        type: "string"
      },
      uid: {
        type: 'number'
      },
      timestamp: {
        type: "string"
      },
      module: {
        type: "number"
      },
      accountId: {
        type: "number"
      },
      likes: {
        type: "number"
      },
      dislikes: {
        type: "number"
      },
      shares: {
        type: "number"
      },
      deleted: {
        type: "boolean"
      }
    }), _replies)
  }
};
module.exports = {
  postSchema: postSchema
};