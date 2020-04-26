async function fetchAllPagesForDebate(debateId, 
  { pageRepository }
) {
  return pageRepository.findByDebateId(debateId);
}

export default fetchAllPagesForDebate;
