import Post from '../entities/Post';

async function GetAllPosts(
  { postRepository },
) {
  return postRepository.getAllPosts();
}

export default GetAllPosts;
