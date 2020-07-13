import Stats from '../entities/Stats';

async function CreateStats(
  id,
  debateId,
  shares,
  signups,
  reactions,
  pageviews,
  posts,
  timestamp,
  { statsRepository }
) {
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

  const stats = new Stats(null, id, debateId, posts, pageviews, reactions, signups, shares, timestamp, false);

  return statsRepository.persist(stats);
}

export default CreateStats;
