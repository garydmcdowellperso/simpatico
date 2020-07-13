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

  getLatestByAccountId(accountId) {
    return this.repository.getLatestByAccountId(accountId);
  }

  getByDebateId(debateId) {
    return this.repository.getByDebateId(debateId);
  }

  getLatestByDebateId(debateId) {
    return this.repository.getLatestByDebateId(debateId);
  }

  find() {
    return this.repository.find();
  }
}

export default StatsRepository;
