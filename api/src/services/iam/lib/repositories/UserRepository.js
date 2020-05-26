class UserRepository {
  constructor(repository) {
    this.repository = repository;
  }

  persist(userEntity) {
    return this.repository.persist(userEntity);
  }

  merge(userEntity) {
    return this.repository.merge(userEntity);
  }

  remove(userId) {
    return this.repository.remove(userId);
  }

  get(userId) {
    return this.repository.get(userId);
  }

  getByAccountId(id) {
    return this.repository.getByAccountId(id);
  }

  getByUserIdAccountId(userId, accountId) {
    return this.repository.getByUserIdAccountId(userId, accountId);
  }

  getByEmail(email) {
    return this.repository.getByEmail(email);
  }

  getByToken(token) {
    return this.repository.getByToken(token);
  }

  find() {
    return this.repository.find();
  }
}

export default UserRepository;
