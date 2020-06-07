async function FetchTopContributors(id, { postRepository }) {
  return postRepository.fetchFetchTopContributors(id);
}

export default FetchTopContributors;
