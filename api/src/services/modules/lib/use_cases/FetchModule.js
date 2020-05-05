async function FetchModule(id, 
  { moduleRepository }
) {
  if (!id) {
    throw new Error("No id");
  }

  return moduleRepository.get(id);
}

export default FetchModule;
