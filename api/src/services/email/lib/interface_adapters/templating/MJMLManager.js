import mjml2html from 'mjml';
import Mustache from 'mustache';


class MJMLManager {
  htmlOutput(template, data) {
    return mjml2html(
      Mustache.render(template, data),
      {}
    );
  }
}

export default MJMLManager;
