import { takeLatest, put } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  loginRequestSuccess,
  loginRequestFailure,
  CALLBACK_REQUEST,
  callBackRequestSuccess,
  callBackRequestFailure,
  CREATE_ACCOUNT_REQUEST,
  createAccountSuccess,
  createAccountFailure,
  FORGOTTEN_PASSWORD_REQUEST,
  forgottenPasswordSuccess,
  forgottenPasswordFailure,
  VERIFY_TOKEN_REQUEST,
  changePasswordVerifyTokenFailure,
  changePasswordVerifyTokenSuccess,
  CHANGE_PASSWORD_REQUEST,
  changePasswordFailure,
  changePasswordSuccess,
} from "../actions/auth";
import { get, post } from "../lib/api";

function* forgottenPassword(action) {
  const r = yield post(
    "v1/forgottenPassword",
    JSON.stringify({
      email: action.email,
    })
  )
    .then(json => put(forgottenPasswordSuccess(json)))
    .catch(err => put(forgottenPasswordFailure(err)));
  yield r;
}

function* loginRequest(action) {
  const r = yield post(
    "v1/loginRequestAdmin",
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
    "v1/createAccount",
    JSON.stringify({
      account: action.account,
      firstname: action.firstname,
      lastname: action.lastname,
      email: action.email,
      password: action.password
    })
  )
    .then(json => put(createAccountSuccess(json)))
    .catch(err => put(createAccountFailure(err)));
  yield r;
}

function* callBackRequest(action) {
  const r = yield get(`v1/login/google/callback${action.params}`)
    .then(json => put(callBackRequestSuccess(json.token)))
    .catch(err => put(callBackRequestFailure(err)));
  yield r;
}

function* changePassword(action) {
  const r = yield post(
    "v1/changePassword",
    JSON.stringify({
      email: action.email,
      password: action.password,
      debateName: action.debateName,
      token: action.token,
    })
  )
    .then(json => put(changePasswordSuccess(json)))
    .catch(err => put(changePasswordFailure(err)));
  yield r;
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
  yield takeLatest(CALLBACK_REQUEST, callBackRequest);
  yield takeLatest(CREATE_ACCOUNT_REQUEST, createAccount);
  yield takeLatest(FORGOTTEN_PASSWORD_REQUEST, forgottenPassword);
  yield takeLatest(VERIFY_TOKEN_REQUEST, verifyToken);
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePassword);
}
