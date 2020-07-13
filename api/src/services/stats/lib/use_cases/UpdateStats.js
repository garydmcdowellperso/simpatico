async function UpdateStats(
  debateId,
  posts,
  pageviews,
  signups,
  reactions,
  { statsRepository }
) {
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
  }

  // Fetch using the debateID
  const stats = await statsRepository.getByDebateId(debateId);

  if (!stats) {
    // First time creation
  }

  stats.posts = posts;
  stats.pageviews = pageviews;
  stats.signups = signups;
  stats.reactions = reactions;

  return statsRepository.merge(stats);
}

export default UpdateStats;
