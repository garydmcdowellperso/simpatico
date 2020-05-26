class AccountRepository {
  constructor(repository) {
    this.repository = repository;
  }

  persist(accountEntity) {
    return this.repository.persist(accountEntity);
  }

  merge(accountEntity) {
    return this.repository.merge(accountEntity);
  }

  remove(accountId) {
    return this.repository.remove(accountId);
  }

  get(accountId) {
    return this.repository.get(accountId);
  }

  getByName(name) {
    return this.repository.getByName(name);
  }

  find() {
    return this.repository.find();
  }
}

export default AccountRepository;
