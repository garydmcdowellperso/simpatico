class Email {
  constructor(id = null, template, email, substitutions) {
    this.id = id;
    this.template = template;
    this.email = email;
    this.substitutions = substitutions;
  }
}

export default Email;
