class Module {
  constructor(id = null, moduleType, debateId, title, help, inuse, posts, contributions, participants, deleted, name) {
    this.id = id;
    this.moduleType = moduleType;
    this.debateId = debateId;
    this.title = title;
    this.help = help;
    this.inuse = inuse;
    this.posts = posts;
    this.contributions = contributions;
    this.participants = participants;
    this.deleted = deleted;
    this.name = name;
  }
}

export default Module;
