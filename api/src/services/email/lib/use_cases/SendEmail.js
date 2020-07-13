import Email from '../entities/Email';

async function SendEmail(
  template,
  email,
  substitutions,
  attachment,
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

  const emailSent = new Email(null, template, email, substitutions, attachment);

  const htmlOutput = templateManager.htmlOutput(template, substitutions)

  console.log('attachment', attachment)
  const mailOptions = {
    from: email.from,
    to: email.to,
    subject: email.subject,
    html: htmlOutput.html,
    cc: email.cc,
    bcc: email.bcc,
    attachments: attachment ? [{
      filename: 'export.csv',
      path: attachment
    }] : null
  };

  transportManager.sendMail(mailOptions)

  return emailRepository.persist(emailSent);
}

export default SendEmail;
