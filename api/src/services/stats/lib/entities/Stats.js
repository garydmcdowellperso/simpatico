class Stats {
  constructor(id = null, accountId, posts, pageviews, reactions, signups, shares) {
    this.id = id;
    this.accountId = accountId;
    this.posts = posts;
    this.pageviews = pageviews;
    this.reactions = reactions;
    this.signups = signups;
    this.shares = shares;
  }
}

export default Stats;
