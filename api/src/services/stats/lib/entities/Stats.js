class Stats {
  constructor(id = null, accountId, debateId, posts, pageviews, reactions, signups, shares, timestamp, deleted) {
    this.id = id;
    this.accountId = accountId;
    this.debateId = debateId;
    this.posts = posts;
    this.pageviews = pageviews;
    this.reactions = reactions;
    this.signups = signups;
    this.shares = shares;
    this.timestamp = timestamp;
    this.deleted = deleted;
  }
}

export default Stats;
