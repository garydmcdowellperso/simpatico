export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const REPLY_POST_REQUEST = "REPLY_POST_REQUEST";
export const REPLY_POST_SUCCESS = "REPLY_POST_SUCCESS";
export const REPLY_POST_FAILURE = "REPLY_POST_FAILURE";

export const FETCH_POSTS_FOR_THREAD_REQUEST = "FETCH_POSTS_FOR_THREAD_REQUEST";
export const FETCH_POSTS_FOR_THREAD_SUCCESS = "FETCH_POSTS_FOR_THREAD_SUCCESS";
export const FETCH_POSTS_FOR_THREAD_FAILURE = "FETCH_POSTS_FOR_THREAD_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const DISLIKE_POST_REQUEST = "DISLIKE_POST_REQUEST";
export const DISLIKE_POST_SUCCESS = "DISLIKE_POST_SUCCESS";
export const DISLIKE_POST_FAILURE = "DISLIKE_POST_FAILURE";

export function createPostRequest({ title, contents, thread }) {
  return {
    type: CREATE_POST_REQUEST,
    title,
    contents,
    thread
  };
}

export function createPostSuccess(post) {
  return {
    type: CREATE_POST_SUCCESS,
    post
  };
}

export function createPostFailure(error) {
  return {
    type: CREATE_POST_FAILURE,
    error
  };
}

export function replyPostRequest({ id, contents }) {
  return {
    type: REPLY_POST_REQUEST,
    id,
    contents
  };
}

export function replyPostSuccess(post) {
  return {
    type: REPLY_POST_SUCCESS,
    post
  };
}

export function replyPostFailure(error) {
  return {
    type: REPLY_POST_FAILURE,
    error
  };
}

export function fetchPostsForThread(thread, page) {
  return {
    type: FETCH_POSTS_FOR_THREAD_REQUEST,
    thread,
    page
  };
}

export function fetchPostsForThreadSuccess(posts) {
  return {
    type: FETCH_POSTS_FOR_THREAD_SUCCESS,
    posts
  };
}

export function fetchPostsForThreadFailure(error) {
  return {
    type: FETCH_POSTS_FOR_THREAD_FAILURE,
    error
  };
}

export function likePost(id) {
  return {
    type: LIKE_POST_REQUEST,
    id
  };
}

export function likePostSuccess(post) {
  return {
    type: LIKE_POST_SUCCESS,
    post
  };
}

export function likePostFailure(error) {
  return {
    type: LIKE_POST_FAILURE,
    error
  };
}

export function dislikePost(id) {
  return {
    type: DISLIKE_POST_REQUEST,
    id
  };
}

export function dislikePostSuccess(post) {
  return {
    type: DISLIKE_POST_SUCCESS,
    post
  };
}

export function dislikePostFailure(error) {
  return {
    type: DISLIKE_POST_FAILURE,
    error
  };
}
