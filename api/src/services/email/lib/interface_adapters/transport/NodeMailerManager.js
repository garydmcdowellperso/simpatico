import nodemailer from 'nodemailer';

class NodeMailerManager {
  sendMail(options) {
    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: ''
      }
    });
  
    return transporter.sendMail(options);
  }
}

export default NodeMailerManager;
