class PostRepository {
  constructor(repository) {
    this.repository = repository;
  }

  persist(postEntity) {
    return this.repository.persist(postEntity);
  }

  merge(postEntity) {
    return this.repository.merge(postEntity);
  }

  remove(postId) {
    return this.repository.remove(postId);
  }

  get(postId) {
    return this.repository.get(postId);
  }

  fetchPostsForThread(thread, page) {
    return this.repository.fetchPostsForThread(thread, page);
  }

  find() {
    return this.repository.find();
  }
}

export default PostRepository;
