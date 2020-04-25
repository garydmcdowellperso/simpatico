class Page {
  constructor(id = null, name, debateId, type, url, languages, inuse, deleted) {
    this.id = id;
    this.name = name;
    this.debateId = debateId;
    this.type = type;
    this.url = url;
    this.inuse = inuse;
    this.languages = languages;
    this.deleted = deleted;
  }
}

export default Page;
