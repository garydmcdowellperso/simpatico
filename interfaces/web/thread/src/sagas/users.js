import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_USERS_REQUEST,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../actions/users";
import { get } from "../lib/api";

function* fetchUsers(action) {
  const r = yield get(`v1/fetchUsers?id=${action.accountId}`)
    .then(json => put(fetchUsersSuccess(json)))
    .catch(err => put(fetchUsersFailure(err)));
  yield r;
}

export default function* usersSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}
