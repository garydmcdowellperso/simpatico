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
