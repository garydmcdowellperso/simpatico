export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE";

export const CREATE_ACCOUNT_REQUEST = "CREATE_ACCOUNT_REQUEST";
export const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
export const CREATE_ACCOUNT_FAILURE = "CREATE_ACCOUNT_FAILURE";

export const CALLBACK_REQUEST = "CALLBACK_REQUEST";
export const CALLBACK_REQUEST_SUCCESS = "CALLBACK_REQUEST_SUCCESS";
export const CALLBACK_REQUEST_FAILURE = "CALLBACK_REQUEST_FAILURE";

export function loginRequest({ email, password }) {
  return {
    type: LOGIN_REQUEST,
    email,
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

export function createAccountRequest(firstname, lastname, email, password) {
  return {
    type: CREATE_ACCOUNT_REQUEST,
    firstname,
    lastname,
    email,
    password
  };
}

export function createAccountSuccess() {
  return {
    type: CREATE_ACCOUNT_SUCCESS
  };
}

export function createAccountFailure(error) {
  return {
    type: CREATE_ACCOUNT_FAILURE,
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
