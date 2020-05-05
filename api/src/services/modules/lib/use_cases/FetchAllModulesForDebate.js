async function fetchAllModulesForDebate(debateId, 
  { moduleRepository }
) {
  return moduleRepository.findByDebateId(debateId);
}

export default fetchAllModulesForDebate;
