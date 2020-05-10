class TemplateManager {
  constructor(templateManager) {
    this.templateManager = templateManager;
  }

  htmlOutput(template, data) {
    return this.templateManager.htmlOutput(template, data);
  }
}

export default TemplateManager;
