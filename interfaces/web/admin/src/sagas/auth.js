import { takeLatest, put } from "redux-saga/effects";
import {
  VERIFY_TOKEN_REQUEST,
  verifyTokenRequestSuccess,
  verifyTokenRequestFailure,
  FETCH_USER_INFO_REQUEST,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
} from "../actions/auth";
import { get, post } from "../lib/api";

function* verifyTokenRequest(action) {
  const r = yield post(
    "v1/verifyToken",
    JSON.stringify({
      role: action.role
    })
  )
    .then(json => put(verifyTokenRequestSuccess(json)))
    .catch(err => put(verifyTokenRequestFailure(err)));
  yield r;
}

function* fetchUserInfo() {
  const r = yield get("v1/fetchUserInfo")
    .then(json => put(fetchUserInfoSuccess(json)))
    .catch(err => put(fetchUserInfoFailure(err)));
  yield r;
}

export default function* authSaga() {
  yield takeLatest(VERIFY_TOKEN_REQUEST, verifyTokenRequest);
  yield takeLatest(FETCH_USER_INFO_REQUEST, fetchUserInfo);
}
