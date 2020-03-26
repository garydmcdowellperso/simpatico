import Post from "../entities/Post";

async function ReplyPost(
  id,
  contents,
  user,
  timestamp,
  { postRepository }
) {
  if (!id) {
    throw new Error("No ID");
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

  // Find exiting post
  const parent = await postRepository.get(parseInt(id, 10));

  if (!parent) {
    throw new Error("Post does not exist");
  }

  let childPost = new Post(null, null, contents, user, timestamp, null);
  childPost = await postRepository.persist(childPost);

  if (parent.replies && parent.replies.length > 0) {
    parent.replies.push(childPost);
  } else {
    parent.replies = [childPost];
  }

  return postRepository.merge(parent);
}

export default ReplyPost;
