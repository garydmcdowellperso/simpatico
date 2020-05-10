class EmailRepository {
  constructor(repository) {
    this.repository = repository;
  }

  persist(debateEntity) {
    return this.repository.persist(debateEntity);
  }
}

export default EmailRepository;
