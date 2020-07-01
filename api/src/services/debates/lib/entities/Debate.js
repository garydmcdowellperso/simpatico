class Debate {
  constructor(id = null, name, slug, debateType, languages, header, overview, themes, connection, footer, metaTags, deleted, accountId) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.debateType = debateType;
    this.languages = languages;
    this.header = header;
    this.overview = overview;
    this.themes = themes;
    this.footer = footer;
    this.metaTags = metaTags;
    this.connection = connection;
    this.deleted = deleted;
    this.accountId = accountId;
  }
}

export default Debate;
