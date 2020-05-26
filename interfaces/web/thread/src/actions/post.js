export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const REPLY_POST_REQUEST = "REPLY_POST_REQUEST";
export const REPLY_POST_SUCCESS = "REPLY_POST_SUCCESS";
export const REPLY_POST_FAILURE = "REPLY_POST_FAILURE";

export const FETCH_POSTS_FOR_MODULE_REQUEST = "FETCH_POSTS_FOR_MODULE_REQUEST";
export const FETCH_POSTS_FOR_MODULE_SUCCESS = "FETCH_POSTS_FOR_MODULE_SUCCESS";
export const FETCH_POSTS_FOR_MODULE_FAILURE = "FETCH_POSTS_FOR_MODULE_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const DISLIKE_POST_REQUEST = "DISLIKE_POST_REQUEST";
export const DISLIKE_POST_SUCCESS = "DISLIKE_POST_SUCCESS";
export const DISLIKE_POST_FAILURE = "DISLIKE_POST_FAILURE";

export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";


export function createPostRequest({ title, contents, module }) {
  return {
    type: CREATE_POST_REQUEST,
    title,
    contents,
    module
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

export function fetchPostsForModule(module, page) {
  return {
    type: FETCH_POSTS_FOR_MODULE_REQUEST,
    module,
    page
  };
}

export function fetchPostsForModuleSuccess(posts) {
  return {
    type: FETCH_POSTS_FOR_MODULE_SUCCESS,
    posts
  };
}

export function fetchPostsForModuleFailure(error) {
  return {
    type: FETCH_POSTS_FOR_MODULE_FAILURE,
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

export function updatePost(id, contents) {
  return {
    type: UPDATE_POST_REQUEST,
    id,
    contents
  };
}

export function updatePostSuccess(post) {
  return {
    type: UPDATE_POST_SUCCESS,
    post
  };
}

export function updatePostFailure(error) {
  return {
    type: UPDATE_POST_FAILURE,
    error
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST_REQUEST,
    id
  };
}

export function deletePostSuccess(post) {
  return {
    type: DELETE_POST_SUCCESS,
    post
  };
}

export function deletePostFailure(error) {
  return {
    type: DELETE_POST_FAILURE,
    error
  };
}