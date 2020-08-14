"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Page = _interopRequireDefault(require("../entities/Page"));

async function CreatePage(name, debateId, type, url, languages, _ref) {
  var pageRepository = _ref.pageRepository;

  if (!name) {
    throw new Error("No name");
  }

  if (!type) {
    throw new Error("No type");
  }

  if (!languages) {
    throw new Error("No languages");
  }

  var page = new _Page["default"](null, name, debateId, type, url, languages, true, false);
  return pageRepository.persist(page);
}

var _default = CreatePage;
exports["default"] = _default;