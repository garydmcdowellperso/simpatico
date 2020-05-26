import moment from 'moment';

const _serializeSinglePost = post => {
  return {
    id: post.id,
    title: post.title,
    contents: post.contents,
    user: post.user,
    timestamp: moment.unix(post.timestamp).format("DD/MM/YYYY hh-mm-ss"),
    timestamp_unix: post.timestamp,
    module: post.module,
    replies: post.replies && post.replies.map(_serializeSinglePost),
    likes: post.likes,
    dislikes: post.dislikes,
    deleted: post.deleted
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
