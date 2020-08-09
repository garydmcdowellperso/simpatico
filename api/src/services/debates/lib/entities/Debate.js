class Debate {
  constructor(id = null, name, url, debateType, languages, header, overview, themes, connection, footer, metaTags, deleted, accountId, trackingId) {
    this.id = id;
    this.name = name;
    this.url = url;
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
    this.trackingId = trackingId;
  }
}

export default Debate;
