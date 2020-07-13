import nodemailer from 'nodemailer';

class NodeMailerManager {
  sendMail(options) {
    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: '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'
      }
    });
  
    return transporter.sendMail(options);
  }
}

export default NodeMailerManager;
