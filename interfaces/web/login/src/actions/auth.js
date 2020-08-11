export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const CALLBACK_REQUEST = "CALLBACK_REQUEST";
export const CALLBACK_REQUEST_SUCCESS = "CALLBACK_REQUEST_SUCCESS";
export const CALLBACK_REQUEST_FAILURE = "CALLBACK_REQUEST_FAILURE";

export const FORGOTTEN_PASSWORD_REQUEST = "FORGOTTEN_PASSWORD_REQUEST";
export const FORGOTTEN_PASSWORD_SUCCESS = "FORGOTTEN_PASSWORD_SUCCESS";
export const FORGOTTEN_PASSWORD_FAILURE = "FORGOTTEN_PASSWORD_FAILURE";

export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";

export const VERIFY_TOKEN_REQUEST = "VERIFY_TOKEN_REQUEST";
export const VERIFY_TOKEN_SUCCESS = "VERIFY_TOKEN_SUCCESS";
export const VERIFY_TOKEN_FAILURE = "VERIFY_TOKEN_FAILURE";

export const FORGOTTEN_PASSWORD_RESET_SENT = "FORGOTTEN_PASSWORD_RESET_SENT"

export function forgottenPasswordReset() {
  return {
    type: FORGOTTEN_PASSWORD_RESET_SENT
  };
}

export function loginRequest({ email, password, debateName }) {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
    debateName
  };
}

export function loginRequestSuccess(response) {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    token: response.token
  };
}

export function loginRequestFailure(error) {
  return {
    type: LOGIN_REQUEST_FAILURE,
    error
  };
}

export function createUserRequest(firstname, lastname, email, password, debateId, accountId) {
  return {
    type: CREATE_USER_REQUEST,
    firstname,
    lastname,
    email,
    password,
    debateId,
    accountId
  };
}

export function createUserSuccess() {
  return {
    type: CREATE_USER_SUCCESS
  };
}

export function createUserFailure(error) {
  return {
    type: CREATE_USER_FAILURE,
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

export function forgottenPasswordRequest({ email, debateName }) {
  return {
    type: FORGOTTEN_PASSWORD_REQUEST,
    email,
    debateName
  };
}

export function forgottenPasswordFailure(error) {
  return {
    type: FORGOTTEN_PASSWORD_FAILURE,
    error
  };
}

export function forgottenPasswordSuccess() {
  return {
    type: FORGOTTEN_PASSWORD_SUCCESS
  };
}

export function changePasswordRequest({ email, password, debateName, token }) {
  return {
    type: CHANGE_PASSWORD_REQUEST,
    email,
    password,
    debateName, 
    token
  };
}

export function changePasswordFailure(error) {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    error
  };
}

export function changePasswordSuccess(response) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    token: response.token
  };
}

export function changePasswordVerifyTokenRequest( email, token) {
  return {
    type: VERIFY_TOKEN_REQUEST,
    email,
    token
  };
}

export function changePasswordVerifyTokenFailure(error) {
  return {
    type: VERIFY_TOKEN_FAILURE,
    error
  };
}

export function changePasswordVerifyTokenSuccess(response) {
  return {
    type: VERIFY_TOKEN_SUCCESS,
    isValidToken: response.isValidToken
  };
}