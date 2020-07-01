async function FetchPostsForModule(module, page, sort, { postRepository }) {
  return postRepository.fetchPostsForModule(module, page, sort);
}

export default FetchPostsForModule;
