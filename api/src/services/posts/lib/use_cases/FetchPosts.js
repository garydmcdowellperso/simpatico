async function FetchPosts(id, { postRepository }) {
  return postRepository.fetchPosts(id);
}

export default FetchPosts;
