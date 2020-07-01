async function CountPostsForModule(module, { postRepository }) {
  return postRepository.countPostsForModule(module);
}

export default CountPostsForModule;
