async function FetchAllPages(debateId, 
  { pageRepository }
) {
  return pageRepository.findByDebateId(debateId);
}

export default FetchAllPages;
