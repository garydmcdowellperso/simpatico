async function FetchPostsForThread(thread, page, { postRepository }) {
  return postRepository.fetchPostsForThread(thread, page);
}

export default FetchPostsForThread;
