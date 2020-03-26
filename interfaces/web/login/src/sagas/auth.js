import { takeLatest, put } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  loginRequestSuccess,
  loginRequestFailure
} from "../actions/auth";
import { get, post } from "../lib/api";

function* loginRequest(action) {
  const r = yield post(
    "v1/adminloginRequest",
    JSON.stringify({
      username: action.username,
      password: action.password
    })
  )
    .then(json => put(loginRequestSuccess(json)))
    .catch(err => put(loginRequestFailure(err)));
  yield r;
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}
