export const FETCH_ACCOUNT_REQUEST = "FETCH_ACCOUNT_REQUEST";
export const FETCH_ACCOUNT_SUCCESS = "FETCH_ACCOUNT_SUCCESS";
export const FETCH_ACCOUNT_FAILURE = "FETCH_ACCOUNT_FAILURE";

export const UPDATE_ACCOUNT_INFO_REQUEST = "UPDATE_ACCOUNT_INFO_REQUEST";
export const UPDATE_ACCOUNT_INFO_SUCCESS = "UPDATE_ACCOUNT_INFO_SUCCESS";
export const UPDATE_ACCOUNT_INFO_FAILURE = "UPDATE_ACCOUNT_INFO_FAILURE";

export function fetchAccountRequest(id) {
  return {
    type: FETCH_ACCOUNT_REQUEST,
    id
  };
}

export function fetchAccountSuccess(account) {
  return {
    type: FETCH_ACCOUNT_SUCCESS,
    account
  };
}

export function fetchAccountFailure(error) {
  return {
    type: FETCH_ACCOUNT_FAILURE,
    error
  };
}

export function updateAccountInfoRequest(accountId, name) {
  return {
    type: UPDATE_ACCOUNT_INFO_REQUEST,
    accountId,
    name
  };
}

export function updateAccountInfoSuccess(account) {
  return {
    type: UPDATE_ACCOUNT_INFO_SUCCESS,
    account
  };
}

export function updateAccountInfoFailure(error) {
  return {
    type: UPDATE_ACCOUNT_INFO_FAILURE,
    error
  };
}