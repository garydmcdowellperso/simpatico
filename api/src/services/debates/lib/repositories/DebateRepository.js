class DebateRepository {
  constructor(repository) {
    this.repository = repository;
  }

  persist(debateEntity) {
    return this.repository.persist(debateEntity);
  }

  merge(debateEntity) {
    return this.repository.merge(debateEntity);
  }

  remove(debateId) {
    return this.repository.remove(debateId);
  }

  get(debateId) {
    return this.repository.get(debateId);
  }

  find() {
    return this.repository.find();
  }
}

export default DebateRepository;
