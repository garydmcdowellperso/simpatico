export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";  

export const FETCH_TOP_CONTRIBUTORS_REQUEST = "FETCH_TOP_CONTRIBUTORS_REQUEST";
export const FETCH_TOP_CONTRIBUTORS_SUCCESS = "FETCH_TOP_CONTRIBUTORS_SUCCESS";
export const FETCH_TOP_CONTRIBUTORS_FAILURE = "FETCH_TOP_CONTRIBUTORS_FAILURE";  

export const EXPORT_POSTS_FOR_MODULE_REQUEST = "EXPORT_POSTS_FOR_MODULE_REQUEST";
export const EXPORT_POSTS_FOR_MODULE_SUCCESS = "EXPORT_POSTS_FOR_MODULE_SUCCESS";
export const EXPORT_POSTS_FOR_MODULE_FAILURE = "EXPORT_POSTS_FOR_MODULE_FAILURE";  


export function fetchPostsRequest(accountId) {
  return {
    type: FETCH_POSTS_REQUEST,
    accountId
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    error
  };
}

export function fetchTopContributorsRequest(accountId) {
  return {
    type: FETCH_TOP_CONTRIBUTORS_REQUEST,
    accountId
  };
}

export function fetchTopContributorsSuccess(contributors) {
  return {
    type: FETCH_TOP_CONTRIBUTORS_SUCCESS,
    contributors
  };
}

export function fetchTopContributorsFailure(error) {
  return {
    type: FETCH_TOP_CONTRIBUTORS_FAILURE,
    error
  };
}

export function exportPostsForModuleRequest(data) {
  return {
    type: EXPORT_POSTS_FOR_MODULE_REQUEST,
    data
  };
}

export function exportPostsForModuleSuccess() {
  return {
    type: EXPORT_POSTS_FOR_MODULE_SUCCESS
  };
}

export function exportPostsForModuleFailure(error) {
  return {
    type: EXPORT_POSTS_FOR_MODULE_FAILURE,
    error
  };
}

