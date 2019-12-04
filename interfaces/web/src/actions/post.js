export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export function createPostRequest({title, contents, user}) {
  return {
    type: CREATE_POST_REQUEST,
    title,
    contents,
    user
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
