class PageRepository {
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

  getByName(name) {
    return this.repository.getByName(name);
  }

  findByDebateId(debateId) {
    return this.repository.findByDebateId(debateId);
  }

  find() {
    return this.repository.find();
  }
}

export default PageRepository;
