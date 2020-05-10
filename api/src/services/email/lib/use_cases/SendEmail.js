import Email from '../entities/Email';

async function SendEmail(
  template,
  email,
  substitutions,
  { emailRepository, templateManager, transportManager }
) {
  if (!template) {
    throw new Error("No template");
  }
  if (!email) {
    throw new Error("No email");
  }
  if (!substitutions) {
    throw new Error("No substitutions");
  }

  const emailSent = new Email(null, template, email, substitutions);

  const htmlOutput = templateManager.htmlOutput(template, substitutions)

  const mailOptions = {
    from: email.from,
    to: email.to,
    subject: email.subject,
    html: htmlOutput.html,
    cc: email.cc,
    bcc: email.bcc,
  };

  transportManager.sendMail(mailOptions)

  return emailRepository.persist(emailSent);
}

export default SendEmail;
