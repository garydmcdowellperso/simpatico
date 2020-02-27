class Post {
  constructor(id = null, title, contents, user, timestamp, thread, replies) {
    this.id = id;
    this.title = title;
    this.contents = contents;
    this.user = user;
    this.timestamp = timestamp;
    this.thread = thread;
    this.replies = replies;
  }
}

export default Post;
