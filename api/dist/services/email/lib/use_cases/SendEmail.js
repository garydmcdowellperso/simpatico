"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Email = _interopRequireDefault(require("../entities/Email"));

async function SendEmail(template, email, substitutions, attachment, _ref) {
  var emailRepository = _ref.emailRepository,
      templateManager = _ref.templateManager,
      transportManager = _ref.transportManager;

  if (!template) {
    throw new Error("No template");
  }

  if (!email) {
    throw new Error("No email");
  }

  if (!substitutions) {
    throw new Error("No substitutions");
  }

  var emailSent = new _Email["default"](null, template, email, substitutions, attachment);
  var htmlOutput = templateManager.htmlOutput(template, substitutions);
  console.log('attachment', attachment);
  var mailOptions = {
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
  transportManager.sendMail(mailOptions);
  return emailRepository.persist(emailSent);
}

var _default = SendEmail;
exports["default"] = _default;