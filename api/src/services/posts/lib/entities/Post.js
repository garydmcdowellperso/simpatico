class Post {
  constructor(id = null, title, contents, user, timestamp, module, accountId, likes, dislikes, shares, replies, deleted) {
    this.id = id;
    this.title = title;
    this.contents = contents;
    this.user = user;
    this.timestamp = timestamp;
    this.module = module;
    this.accountId = accountId;
    this.likes = likes;
    this.dislikes = dislikes;
    this.shares = shares;
    this.replies = replies;
    this.deleted = deleted;
  }
}

export default Post;
