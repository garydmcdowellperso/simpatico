import { takeLatest, put } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  loginRequestSuccess,
  loginRequestFailure,
  CREATE_ACCOUNT_REQUEST,
  createAccountSuccess,
  createAccountFailure
} from "../actions/auth";
import { get, post } from "../lib/api";

function* loginRequest(action) {
  const r = yield post(
    "v1/loginRequest",
    JSON.stringify({
      email: action.email,
      password: action.password
    })
  )
    .then(json => put(loginRequestSuccess(json)))
    .catch(err => put(loginRequestFailure(err)));
  yield r;
}


function* createAccount(action) {
  const r = yield post(
    "v1/createUser",
    JSON.stringify({
      firstname: action.firstname,
      lastname: action.lastname,
      email: action.email,
      password: action.password,
      debateId: action.debateId,
      accountId: action.accountId,
      role: 'participant'
    })
  )
    .then(json => put(createAccountSuccess(json)))
    .catch(err => put(createAccountFailure(err)));
  yield r;
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
  yield takeLatest(CREATE_ACCOUNT_REQUEST, createAccount);
}
