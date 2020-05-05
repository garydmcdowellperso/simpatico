class ModuleRepository {
  constructor(repository) {
    this.repository = repository;
  }

  persist(pageEntity) {
    return this.repository.persist(pageEntity);
  }

  merge(pageEntity) {
    return this.repository.merge(pageEntity);
  }

  remove(pageId) {
    return this.repository.remove(pageId);
  }

  get(pageId) {
    return this.repository.get(pageId);
  }

  getByTitle(title) {
    return this.repository.getByTitle(title);
  }

  findByDebateId(debateId) {
    return this.repository.findByDebateId(debateId);
  }

  find() {
    return this.repository.find();
  }
}

export default ModuleRepository;
