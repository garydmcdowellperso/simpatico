export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE";

export const CALLBACK_REQUEST = "CALLBACK_REQUEST";
export const CALLBACK_REQUEST_SUCCESS = "CALLBACK_REQUEST_SUCCESS";
export const CALLBACK_REQUEST_FAILURE = "CALLBACK_REQUEST_FAILURE";

export function loginRequest({ username, password }) {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  };
}

export function loginRequestSuccess(token) {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    token
  };
}

export function loginRequestFailure(error) {
  return {
    type: LOGIN_REQUEST_FAILURE,
    error
  };
}

export function callBackRequest(params) {
  return {
    type: CALLBACK_REQUEST,
    params
  };
}

export function callBackRequestSuccess(token) {
  return {
    type: CALLBACK_REQUEST_SUCCESS,
    token
  };
}

export function callBackRequestFailure(error) {
  return {
    type: CALLBACK_REQUEST_FAILURE,
    error
  };
}
