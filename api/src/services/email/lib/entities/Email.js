class Email {
  constructor(id = null, template, email, substitutions, attachment) {
    this.id = id;
    this.template = template;
    this.email = email;
    this.substitutions = substitutions;
    this.attachment = attachment;
  }
}

export default Email;
