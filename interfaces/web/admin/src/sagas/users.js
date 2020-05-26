import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_USERS_REQUEST,
  fetchUsersSuccess,
  fetchUsersFailure,
  FETCH_USER_INFO_ADMIN_REQUEST,
  fetchUserInfoAdminSuccess,
  fetchUserInfoAdminFailure,
  UPDATE_USER_INFO_REQUEST,
  updateUserInfoSuccess,
  updateUserInfoFailure,
} from "../actions/users";
import { get, putApi } from "../lib/api";

function* fetchUsers(action) {
  const r = yield get(`v1/fetchUsers?id=${action.accountId}`)
    .then(json => put(fetchUsersSuccess(json)))
    .catch(err => put(fetchUsersFailure(err)));
  yield r;
}

function* fetchUserInfoAdmin(action) {
  const r = yield get(`v1/fetchUserInfoAdmin?userId=${action.userId}&accountId=${action.accountId}`)
    .then(json => put(fetchUserInfoAdminSuccess(json)))
    .catch(err => put(fetchUserInfoAdminFailure(err)));
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
      confirmPassword: action.user.confirmPassword,
      debates: action.user.debates,
      role:  action.user.role
    })
    )
      .then(json => put(updateUserInfoSuccess(json)))
      .catch(err => put(updateUserInfoFailure(err)));
  yield r;
}

export default function* usersSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
  yield takeLatest(FETCH_USER_INFO_ADMIN_REQUEST, fetchUserInfoAdmin);
  yield takeLatest(UPDATE_USER_INFO_REQUEST, updateUserInfo);
}
