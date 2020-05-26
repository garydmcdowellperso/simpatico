class Post {
  constructor(id = null, title, contents, user, timestamp, module, replies, deleted) {
    this.id = id;
    this.title = title;
    this.contents = contents;
    this.user = user;
    this.timestamp = timestamp;
    this.module = module;
    this.replies = replies;
    this.deleted = deleted;
  }
}

export default Post;
