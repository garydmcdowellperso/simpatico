"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function UpdateStats(debateId, posts, pageviews, signups, reactions, _ref) {
  var statsRepository = _ref.statsRepository;

  if (!debateId) {
    throw new Error("No debate id");
  }

  if (!posts) {
    throw new Error("No posts");
  }

  if (!pageviews) {
    throw new Error("No pageviews");
  }

  if (!signups) {
    throw new Error("No signups");
  }

  if (!reactions) {
    throw new Error("No reactions");
  } // Fetch using the debateID


  var stats = await statsRepository.getByDebateId(debateId);

  if (!stats) {// First time creation
  }

  stats.posts = posts;
  stats.pageviews = pageviews;
  stats.signups = signups;
  stats.reactions = reactions;
  return statsRepository.merge(stats);
}

var _default = UpdateStats;
exports["default"] = _default;