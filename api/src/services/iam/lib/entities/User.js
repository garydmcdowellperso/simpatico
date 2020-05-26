class User {
  constructor(id = null, debates, accountId, firstName, lastName, email, password, activated, token, role, bio, score, avatar, badge, likes, dislikes, contributions) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.activated = activated;
    this.token = token;
    this.role = role;
    this.bio = bio;
    this.score = score;
    this.avatar = avatar;
    this.badge = badge;
    this.likes = likes;
    this.dislikes = dislikes;
    this.contributions = contributions;
    this.debates = debates;
    this.accountId = accountId;
  }
}

export default User;
