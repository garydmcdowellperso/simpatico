class Post {
  constructor(id = null, title, contents, user, timestamp, thread, replies, deleted) {
    this.id = id;
    this.title = title;
    this.contents = contents;
    this.user = user;
    this.timestamp = timestamp;
    this.thread = thread;
    this.replies = replies;
    this.deleted = deleted;
  }
}

export default Post;
