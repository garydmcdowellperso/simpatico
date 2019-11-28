import Post from '../entities/Post';

async function CreatePost(
  title,
  contents,
  user,
  { postRepository },
) {
  if (!title) {
    throw new Error('No Title');
  }
  if (!contents) {
    throw new Error('No Contents');
  }
  if (!user) {
    throw new Error('No User');
  }

  const post = new Post(null, title, contents, user);

  return postRepository.persist(post);
}

export default CreatePost;
