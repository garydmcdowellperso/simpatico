class User {
  constructor(id = null, firstName, lastName, email, password, activated, token) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.activated = activated;
    this.token = token;
  }
}

export default User;
