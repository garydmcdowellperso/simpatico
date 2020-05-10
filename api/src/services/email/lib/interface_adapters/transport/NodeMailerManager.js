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
