"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Stats = _interopRequireDefault(require("../entities/Stats"));

async function CreateStats(id, debateId, shares, signups, reactions, pageviews, posts, timestamp, _ref) {
  var statsRepository = _ref.statsRepository;

  if (!id) {
    throw new Error("No id");
  }

  if (!debateId) {
    throw new Error("No debateId");
  }

  if (!shares) {
    throw new Error("No shares");
  }

  if (!signups) {
    throw new Error("No signups");
  }

  if (!reactions) {
    throw new Error("No modreactionsule");
  }

  if (!pageviews) {
    throw new Error("No pageviews");
  }

  if (!posts) {
    throw new Error("No posts");
  }

  if (!timestamp) {
    throw new Error("No timestamp");
  }

  var stats = new _Stats["default"](null, id, debateId, posts, pageviews, reactions, signups, shares, timestamp, false);
  return statsRepository.persist(stats);
}

var _default = CreateStats;
exports["default"] = _default;