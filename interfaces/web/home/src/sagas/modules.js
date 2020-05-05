import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_MODULE_REQUEST,
  fetchModuleSuccess,
  fetchModuleFailure,
} from "../actions/modules";
import { get } from "../lib/api";


function* fetchModule(action) {
  const r = yield get(`v1/fetchModule?id=${action.id}`)
    .then(json => put(fetchModuleSuccess(json)))
    .catch(err => put(fetchModuleFailure(err)));
  yield r;
}

export default function* modulesSaga() {
  yield takeLatest(FETCH_MODULE_REQUEST, fetchModule);
}
