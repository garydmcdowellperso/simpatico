"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _fs = _interopRequireDefault(require("fs"));

var _EmailSerializer = _interopRequireDefault(require("../serializers/EmailSerializer"));

var _SendEmail = _interopRequireDefault(require("../use_cases/SendEmail"));

var _EmailRepository = _interopRequireDefault(require("../repositories/EmailRepository"));

var _TemplateManager = _interopRequireDefault(require("../template/TemplateManager"));

var _TransportManager = _interopRequireDefault(require("../transport/TransportManager"));

var _EmailRepositoryMongo = _interopRequireDefault(require("../interface_adapters/storage/EmailRepositoryMongo"));

var _MJMLManager = _interopRequireDefault(require("../interface_adapters/templating/MJMLManager"));

var _NodeMailerManager = _interopRequireDefault(require("../interface_adapters/transport/NodeMailerManager"));

var emailRepository = new _EmailRepository["default"](new _EmailRepositoryMongo["default"]());
var templateManager = new _TemplateManager["default"](new _MJMLManager["default"]());
var transportManager = new _TransportManager["default"](new _NodeMailerManager["default"]());
/**
 * readFileAsync promise readFile
 *
 * @param {String} path : the file path
 * @returns {Promise} a promise
 */

function readFileAsync(path) {
  return new Promise(function (resolve, reject) {
    _fs["default"].readFile(path, {
      encoding: 'utf-8'
    }, function (error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

async function sendEmail(inputs) {
  // Inputs
  var template = inputs.template,
      email = inputs.email,
      substitutions = inputs.substitutions,
      attachment = inputs.attachment; // Read the template from the input pârams

  var templateRaw = await readFileAsync("./src/services/email/lib/templates/".concat(template.type, "/").concat(template.language, "/").concat(template.name, ".mjml").toLowerCase()); // Treatment

  var response = await (0, _SendEmail["default"])(templateRaw, email, substitutions, attachment, {
    emailRepository: emailRepository,
    templateManager: templateManager,
    transportManager: transportManager
  });
  var emailSerializer = new _EmailSerializer["default"]();
  return emailSerializer.serialize(response);
}

module.exports = {
  sendEmail: sendEmail
};