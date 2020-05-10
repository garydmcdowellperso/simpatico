class EncryptionManager {
  constructor(bcryptManager) {
    this.bcryptManager = bcryptManager;
  }

  hash(plaintextpassword) {
    return this.bcryptManager.hash(plaintextpassword);
  }
  compare(plaintextpassword, hash) {
    return this.bcryptManager.compare(plaintextpassword, hash);
  }
}

export default EncryptionManager;
