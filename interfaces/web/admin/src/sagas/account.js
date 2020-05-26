import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_ACCOUNT_REQUEST,
  fetchAccountSuccess,
  fetchAccountFailure,
  UPDATE_ACCOUNT_INFO_REQUEST,
  updateAccountInfoSuccess,
  updateAccountInfoFailure
} from "../actions/account";
import { get, putApi } from "../lib/api";

function* fetchAccount(action) {
  const r = yield get(`v1/fetchAccount?id=${action.id}`)
    .then(json => put(fetchAccountSuccess(json)))
    .catch(err => put(fetchAccountFailure(err)));
  yield r;
}

function* updateAccountInfo(action) {
  const r = yield putApi("v1/updateAccountInfo",
    JSON.stringify({
      id: action.accountId,
      name: action.name
    }))
    .then(json => put(updateAccountInfoSuccess(json)))
    .catch(err => put(updateAccountInfoFailure(err)));
  yield r;
}

export default function* accountSaga() {
  yield takeLatest(FETCH_ACCOUNT_REQUEST, fetchAccount);
  yield takeLatest(UPDATE_ACCOUNT_INFO_REQUEST, updateAccountInfo);

}
