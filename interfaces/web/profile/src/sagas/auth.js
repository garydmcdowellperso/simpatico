import { takeLatest, put } from "redux-saga/effects";
import {
  VERIFY_TOKEN_REQUEST,
  verifyTokenRequestSuccess,
  verifyTokenRequestFailure,
  FETCH_USER_INFO_REQUEST,
  fetchUserInfoSuccess,
  fetchUserInfoFailure,
  UPDATE_USER_INFO_REQUEST,
  updateUserInfoSuccess,
  updateUserInfoFailure,
  DELETE_USER_REQUEST,
  deleteUserSuccess,
  deleteUserFailure
} from "../actions/auth";
import { get, post, putApi, remove } from "../lib/api";

function* verifyTokenRequest(action) {
  const r = yield post(
    "v1/verifyToken",
    JSON.stringify({
      token: action.token,
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

function* updateUserInfo(action) {
  const r = yield putApi("v1/updateUserInfo",
    JSON.stringify({
      id: action.user.id,
      email: action.user.email,
      firstName: action.user.firstName,
      lastName: action.user.lastName,
      bio: action.user.bio,
      avatar: action.user.avatar,      
      password: action.user.password,     
      confirmPassword: action.user.confirmPassword      
    })
    )
      .then(json => put(updateUserInfoSuccess(json)))
      .catch(err => put(updateUserInfoFailure(err)));
  yield r;
}

function* deleteUser() {
  const r = yield remove("v1/deleteUser")
    .then(json => put(deleteUserSuccess(json)))
    .catch(err => put(deleteUserFailure(err)));
  yield r;
}

export default function* authSaga() {
  yield takeLatest(VERIFY_TOKEN_REQUEST, verifyTokenRequest);
  yield takeLatest(FETCH_USER_INFO_REQUEST, fetchUserInfo);
  yield takeLatest(UPDATE_USER_INFO_REQUEST, updateUserInfo);
  yield takeLatest(DELETE_USER_REQUEST, deleteUser);
}
