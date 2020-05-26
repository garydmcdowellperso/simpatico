export const VERIFY_TOKEN_REQUEST = "VERIFY_TOKEN_REQUEST";
export const VERIFY_TOKEN_REQUEST_SUCCESS = "VERIFY_TOKEN_REQUEST_SUCCESS";
export const VERIFY_TOKEN_REQUEST_FAILURE = "VERIFY_TOKEN_REQUEST_FAILURE";

export const FETCH_USER_INFO_REQUEST = "FETCH_USER_INFO_REQUEST";
export const FETCH_USER_INFO_REQUEST_SUCCESS =
  "FETCH_USER_INFO_REQUEST_SUCCESS";
export const FETCH_USER_INFO_REQUEST_FAILURE =
  "FETCH_USER_INFO_REQUEST_FAILURE";

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
