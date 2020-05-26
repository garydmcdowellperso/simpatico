async function FetchPostsForModule(module, page, { postRepository }) {
  return postRepository.fetchPostsForModule(module, page);
}

export default FetchPostsForModule;
