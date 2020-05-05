import { takeLatest, put } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  loginRequestSuccess,
  loginRequestFailure,
  CALLBACK_REQUEST,
  callBackRequestSuccess,
  callBackRequestFailure
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

function* callBackRequest(action) {
  const r = yield get(`v1/login/google/callback${action.params}`)
    .then(json => put(callBackRequestSuccess(json.token)))
    .catch(err => put(callBackRequestFailure(err)));
  yield r;
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
  yield takeLatest(CALLBACK_REQUEST, callBackRequest);
}
