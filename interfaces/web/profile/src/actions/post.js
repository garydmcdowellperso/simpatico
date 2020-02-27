export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const REPLY_POST_REQUEST = "REPLY_POST_REQUEST";
export const REPLY_POST_SUCCESS = "REPLY_POST_SUCCESS";
export const REPLY_POST_FAILURE = "REPLY_POST_FAILURE";

export function createPostRequest({ title, contents }) {
  return {
    type: CREATE_POST_REQUEST,
    title,
    contents
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
