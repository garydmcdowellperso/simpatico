export const VERIFY_TOKEN_REQUEST = "VERIFY_TOKEN_REQUEST";
export const VERIFY_TOKEN_REQUEST_SUCCESS = "VERIFY_TOKEN_REQUEST_SUCCESS";
export const VERIFY_TOKEN_REQUEST_FAILURE = "VERIFY_TOKEN_REQUEST_FAILURE";

export const FETCH_USER_INFO_REQUEST = "FETCH_USER_INFO_REQUEST";
export const FETCH_USER_INFO_REQUEST_SUCCESS =
  "FETCH_USER_INFO_REQUEST_SUCCESS";
export const FETCH_USER_INFO_REQUEST_FAILURE =
  "FETCH_USER_INFO_REQUEST_FAILURE";

export const UPDATE_USER_INFO_REQUEST = "UPDATE_USER_INFO_REQUEST";
export const UPDATE_USER_INFO_SUCCESS = "UPDATE_USER_INFO_SUCCESS";
export const UPDATE_USER_INFO_FAILURE = "UPDATE_USER_INFO_FAILURE";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export function verifyTokenRequest({ token, role }) {
  return {
    type: VERIFY_TOKEN_REQUEST,
    token,
    role
  };
}

export function verifyTokenRequestSuccess(json) {
  return {
    type: VERIFY_TOKEN_REQUEST_SUCCESS,
    json
  };
}

export function verifyTokenRequestFailure(error) {
  return {
    type: VERIFY_TOKEN_REQUEST_FAILURE,
    error
  };
}

export function fetchUserInfo() {
  return {
    type: FETCH_USER_INFO_REQUEST
  };
}

export function fetchUserInfoSuccess(json) {
  return {
    type: FETCH_USER_INFO_REQUEST_SUCCESS,
    json
  };
}

export function fetchUserInfoFailure(error) {
  return {
    type: FETCH_USER_INFO_REQUEST_FAILURE,
    error
  };
}

export function updateUserInfo(user) {
  return {
    type: UPDATE_USER_INFO_REQUEST,
    user
  };
}

export function updateUserInfoSuccess(json) {
  return {
    type: UPDATE_USER_INFO_SUCCESS,
    json
  };
}

export function updateUserInfoFailure(error) {
  return {
    type: UPDATE_USER_INFO_FAILURE,
    error
  };
}

export function deleteUser(email) {
  return {
    type: DELETE_USER_REQUEST,
    email
  };
}

export function deleteUserSuccess(json) {
  return {
    type: DELETE_USER_SUCCESS,
    json
  };
}

export function deleteUserFailure(error) {
  return {
    type: DELETE_USER_FAILURE,
    error
  };
}
