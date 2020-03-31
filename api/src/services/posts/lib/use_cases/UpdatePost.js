import Post from "../entities/Post";

async function UpdatePost(
  id,
  contents,
  uid,
  { postRepository }
) {
  if (!id) {
    throw new Error("No ID");
  }
  if (!contents) {
    throw new Error("No contents");
  }
  if (!uid) {
    throw new Error("No uid");
  }

  // Find exiting post
  const post = await postRepository.get(parseInt(id, 10));

  if (!post) {
    throw new Error("Post does not exist");
  }

  // Are we the owner - if not, don't allow the update
  if (post.user !== uid) {
    throw new Error("Not the owner");
  }

  post.contents = contents;

  await postRepository.merge(post);

  // return the post
  return post;
}

export default UpdatePost;
