class Debate {
  constructor(id = null, name, slug, debateType, languages, header, overview, modules, deleted) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.debateType = debateType;
    this.languages = languages;
    this.header = header;
    this.overview = overview;
    this.themes = themes;
    this.deleted = deleted;
  }
}

export default Debate;
