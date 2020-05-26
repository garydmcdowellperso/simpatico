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

  fetchPostsForModule(module, page) {
    return this.repository.fetchPostsForModule(module, page);
  }

  find() {
    return this.repository.find();
  }
}

export default PostRepository;
