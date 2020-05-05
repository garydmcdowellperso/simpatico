async function fetchAllModules( 
  { moduleRepository }
) {
  return moduleRepository.find();
}

export default fetchAllModules;
