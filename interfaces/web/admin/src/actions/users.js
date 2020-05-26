export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const FETCH_USER_INFO_ADMIN_REQUEST = "FETCH_USER_INFO_ADMIN_REQUEST";
export const FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS =
  "FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS";
export const FETCH_USER_INFO_ADMIN_REQUEST_FAILURE =
  "FETCH_USER_INFO_ADMIN_REQUEST_FAILURE";

export const UPDATE_USER_INFO_REQUEST = "UPDATE_USER_INFO_REQUEST";
export const UPDATE_USER_INFO_SUCCESS = "UPDATE_USER_INFO_SUCCESS";
export const UPDATE_USER_INFO_FAILURE = "UPDATE_USER_INFO_FAILURE";
  

export function fetchUsersRequest(accountId) {
  return {
    type: FETCH_USERS_REQUEST,
    accountId
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  };
}

export function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    error
  };
}

export function fetchUserInfoAdmin(userId, accountId) {
  return {
    type: FETCH_USER_INFO_ADMIN_REQUEST,
    userId,
    accountId
  };
}

export function fetchUserInfoAdminSuccess(json) {
  return {
    type: FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS,
    json
  };
}

export function fetchUserInfoAdminFailure(error) {
  return {
    type: FETCH_USER_INFO_ADMIN_REQUEST_FAILURE,
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