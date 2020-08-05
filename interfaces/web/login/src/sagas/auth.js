import { takeLatest, put } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  loginRequestSuccess,
  loginRequestFailure,
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

function* verifyToken(action) {
  const r = yield get(
    `v1/verifyChangePasswordToken?email=${action.email}&token=${action.token}`)
    .then(json => put(changePasswordVerifyTokenSuccess(json)))
    .catch(err => put(changePasswordVerifyTokenFailure(err)));
  yield r;
}

function* forgottenPassword(action) {
  const r = yield post(
    "v1/forgottenPassword",
    JSON.stringify({
      email: action.email,
      debateName: action.debateName
    })
  )
    .then(json => put(forgottenPasswordSuccess(json)))
    .catch(err => put(forgottenPasswordFailure(err)));
  yield r;
}

function* loginRequest(action) {
  const r = yield post(
    "v1/loginRequest",
    JSON.stringify({
      email: action.email,
      password: action.password,
      debateName: action.debateName
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
  yield takeLatest(CREATE_ACCOUNT_REQUEST, createAccount);
  yield takeLatest(FORGOTTEN_PASSWORD_REQUEST, forgottenPassword);
  yield takeLatest(VERIFY_TOKEN_REQUEST, verifyToken);
  yield takeLatest(CHANGE_PASSWORD_REQUEST, changePassword);
}
