async function FetchPostsForThread(thread, { postRepository }) {
  return postRepository.fetchPostsForThread(thread);
}

export default FetchPostsForThread;
