import moment from 'moment';

const _serializeSingleModule = module => {
  return {
    id: module.id,
    debateId: module.debateId,
    moduleType: module.moduleType,
    title: module.title,
    help: module.help,
    inuse: module.inuse,
    posts: module.posts,
    contributions: module.contributions,
    participants: module.participants,
    deleted: module.deleted,
    name: module.name
  };
};


class ModuleSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleModule);
    }
    return _serializeSingleModule(data);
  }
}

export default ModuleSerializer;
