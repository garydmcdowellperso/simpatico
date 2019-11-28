class Post {
  constructor (id = null, title, contents, user) {
    this.id = id;
    this.title = title;
    this.contents = contents;
    this.user = user;
  }
}

export default Post;
