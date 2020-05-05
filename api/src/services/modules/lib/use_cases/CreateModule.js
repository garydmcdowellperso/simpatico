import Module from '../entities/Module';

async function CreateModule(
  moduleType,
  title,
  debateId,
  help,
  inuse,
  posts,
  contributions,
  participants,
  deleted,
  name,
  { moduleRepository }
) {
  if (!moduleType) {
    throw new Error("No moduleType");
  }
  if (!title) {
    throw new Error("No title");
  }
  if (!debateId) {
    throw new Error("No debateId");
  }
  if (!help) {
    throw new Error("No help");
  }
  if (!name) {
    throw new Error("No name");
  }

  const module = new Module(null, moduleType, debateId, title, help, inuse, posts, contributions, participants, deleted, name);

  return moduleRepository.persist(module);
}

export default CreateModule;
