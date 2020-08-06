import nodemailer from 'nodemailer';

class NodeMailerManager {
  sendMail(options) {
    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      port: 465,
      auth: {
        user: 'apikey',
        pass: 'XXXX'
      }
    });
  
    return transporter.sendMail(options);
  }
}

export default NodeMailerManager;
