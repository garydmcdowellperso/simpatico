export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const REPLY_POST_REQUEST = "REPLY_POST_REQUEST";
export const REPLY_POST_SUCCESS = "REPLY_POST_SUCCESS";
export const REPLY_POST_FAILURE = "REPLY_POST_FAILURE";

export const FETCH_POSTS_FOR_THREAD_REQUEST = "FETCH_POSTS_FOR_THREAD_REQUEST";
export const FETCH_POSTS_FOR_THREAD_SUCCESS = "FETCH_POSTS_FOR_THREAD_SUCCESS";
export const FETCH_POSTS_FOR_THREAD_FAILURE = "FETCH_POSTS_FOR_THREAD_FAILURE";

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

export function fetchPostsForThread(thread) {
  return {
    type: FETCH_POSTS_FOR_THREAD_REQUEST,
    thread
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
