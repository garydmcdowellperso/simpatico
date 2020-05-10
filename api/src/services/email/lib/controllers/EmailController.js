import fs from 'fs';

import EmailSerializer from "../serializers/EmailSerializer";
import SendEmail from "../use_cases/SendEmail";

import EmailRepository from "../repositories/EmailRepository";
import TemplateManager from "../template/TemplateManager";
import TransportManager from "../transport/TransportManager";

import EmailRepositoryMongo from "../interface_adapters/storage/EmailRepositoryMongo";
import MJMLManager from "../interface_adapters/templating/MJMLManager";
import NodeMailerManager from "../interface_adapters/transport/NodeMailerManager";

const emailRepository = new EmailRepository(new EmailRepositoryMongo());
const templateManager = new TemplateManager(new MJMLManager());
const transportManager = new TransportManager(new NodeMailerManager());

/**
 * readFileAsync promise readFile
 *
 * @param {String} path : the file path
 * @returns {Promise} a promise
 */
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (error, result) => {
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
  const { template, email, substitutions } = inputs;

  // Read the template from the input pârams
  const templateRaw = await readFileAsync(
    `./src/services/email/lib/templates/${template.type}/${template.language}/${template.name}.mjml`.toLowerCase()
  );
  
  // Treatment
  const response = await SendEmail(templateRaw, email, substitutions, {
    emailRepository,
    templateManager,
    transportManager
  });

  const emailSerializer = new EmailSerializer();
  return emailSerializer.serialize(response);
}


module.exports = {
  sendEmail,
};
