export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAILURE = "LOGIN_REQUEST_FAILURE";

export function loginRequest({ username, password }) {
  console.log('HERE')
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

