import Post from '../entities/Post';

async function CreatePost(
  title,
  contents,
  user,
  timestamp,
  module,
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

  const post = new Post(null, title, contents, user, timestamp, module, null, false);

  return postRepository.persist(post);
}

export default CreatePost;
