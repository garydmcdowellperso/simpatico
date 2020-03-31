import Post from '../entities/Post';

async function CreatePost(
  title,
  contents,
  user,
  timestamp,
  thread,
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
  if (!thread) {
    throw new Error("No thread");
  }

  const post = new Post(null, title, contents, user, timestamp, thread, null, false);

  return postRepository.persist(post);
}

export default CreatePost;
