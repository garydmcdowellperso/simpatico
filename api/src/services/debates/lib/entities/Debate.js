class Debate {
  constructor(id = null, name, slug, debateType, languages, deleted) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.debateType = debateType;
    this.languages = languages;
    this.deleted = deleted;
  }
}

export default Debate;
