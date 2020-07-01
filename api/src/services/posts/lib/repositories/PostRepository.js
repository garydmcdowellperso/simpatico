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

  fetchPostsForModule(module, page, sort) {
    return this.repository.fetchPostsForModule(module, page, sort);
  }

  fetchAllPostsForModule(module, sort) {
    return this.repository.fetchAllPostsForModule(module, sort);
  }

  fetchPosts(id) {
    return this.repository.fetchPosts(id);
  }

  fetchFetchTopContributors(id) {
    return this.repository.fetchFetchTopContributors(id);
  }

  countPostsForModule(module) {
    return this.repository.countPostsForModule(module);
  }

  find() {
    return this.repository.find();
  }
}

export default PostRepository;
