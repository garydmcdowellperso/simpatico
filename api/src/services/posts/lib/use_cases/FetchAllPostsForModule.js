async function FetchAllPostsForModule(module, sort, { postRepository }) {
  return postRepository.fetchAllPostsForModule(module, sort);
}

export default FetchAllPostsForModule;
