import Post from "../entities/Post";

async function LikePost(
  id,
  { postRepository }
) {
  if (!id) {
    throw new Error("No ID");
  }

  // Find exiting post
  const post = await postRepository.get(parseInt(id, 10));

  if (!post) {
    throw new Error("Post does not exist");
  }

  if (!post.likes) {
    post.likes = 1;
  } else {
    post.likes += 1;
  }

  await postRepository.merge(post);

  // return the post
  return post;
}

export default LikePost;
