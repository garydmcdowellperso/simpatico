import bcrypt from "bcryptjs";

const saltRounds = 10;

class BcryptManager {
  hash(plaintextpassword) {
    return  bcrypt.hash(plaintextpassword, saltRounds);
  }
  compare(plaintextpassword, hash) {
    return  bcrypt.compare(plaintextpassword, hash);
  }
}

export default BcryptManager;
