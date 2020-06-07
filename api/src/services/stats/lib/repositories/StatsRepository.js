class StatsRepository {
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

  getByAccountId(accountId) {
    return this.repository.getByAccountId(accountId);
  }

  find() {
    return this.repository.find();
  }
}

export default StatsRepository;
