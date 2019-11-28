const _serializeSinglePost = post => {
  return {
    id: post.id,
    title: post.title,
    contents: post.contents,
    user: post.user,
  };
};

class PostSerializer {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSinglePost);
    }
    return _serializeSinglePost(data);
  }
}

export default PostSerializer;
