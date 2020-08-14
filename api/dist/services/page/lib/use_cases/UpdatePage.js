"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Page = _interopRequireDefault(require("../entities/Page"));

async function UpdatePage(name, id, debateId, type, url, languages, _ref) {
  var pageRepository = _ref.pageRepository;

  if (!name) {
    throw new Error("No name");
  }

  if (!type) {
    throw new Error("No type");
  }

  if (!id) {
    throw new Error("No ID");
  }

  if (!debateId) {
    throw new Error("No debateID");
  }

  if (!languages) {
    throw new Error("No languages");
  }

  var page = new _Page["default"](id, name, debateId, type, url, languages, true, false);
  return pageRepository.merge(page);
}

var _default = UpdatePage;
exports["default"] = _default;