import Module from '../entities/Module';

async function UpdateModule(
  id,
  moduleType,
  debateId,
  title,
  help,
  posts,
  contributions,
  participants,
  inuse,
  deleted,
  name,
  { moduleRepository }
) {
  if (!id) {
    throw new Error("No id");
  }
  if (!moduleType) {
    throw new Error("No moduleType");
  }
  if (!debateId) {
    throw new Error("No debateId");
  }
  if (!title) {
    throw new Error("No title");
  }
  if (!help) {
    throw new Error("No help");
  }
  if (!name) {
    throw new Error("No name");
  }

  const module = new Module(id, moduleType, debateId, title, help, inuse, posts, contributions, participants, deleted, name);

  return moduleRepository.merge(module);
}

export default UpdateModule;
