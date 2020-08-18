import Post from '../entities/Post';

async function CreatePost(
  title,
  contents,
  user,
  timestamp,
  module,
  accountId,
  { postRepository }
) {
  if (!title) {
    throw new Error("No Title");
  }
  if (!contents) {
    throw new Error("No Contents");
  }
  if (!user) {
    throw new Error("No User");
  }
  if (!timestamp) {
    throw new Error("No timestamp");
  }
  if (!module) {
    throw new Error("No module");
  }
  if (!accountId) {
    throw new Error("No accountId");
  }

  const post = new Post(null, title, contents, user, timestamp, module, accountId, 0, 0, 0, null, false);

  return postRepository.persist(post);
}

export default CreatePost;
