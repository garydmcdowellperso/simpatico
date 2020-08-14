"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Debate = _interopRequireDefault(require("../entities/Debate"));

async function UpdateConnection(debateID, connection, _ref) {
  var debateRepository = _ref.debateRepository;

  if (!debateID) {
    throw new Error("No debateID");
  }

  if (!connection) {
    throw new Error("No connection");
  }

  var debate = await debateRepository.get(debateID);

  if (!debate) {
    throw new Error("No debate");
  }

  debate.connection = connection;
  await debateRepository.merge(debate);
  return debate;
}

var _default = UpdateConnection;
exports["default"] = _default;