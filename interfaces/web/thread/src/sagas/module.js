import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_MODULE_REQUEST,
  fetchModuleSuccess,
  fetchModuleFailure
} from "../actions/module";
import { get } from "../lib/api";

function* fetchModuleRequest(action) {
  const r = yield get(
    `v1/fetchModule?id=${action.id}`
  )
    .then(json => put(fetchModuleSuccess(json)))
    .catch(err => put(fetchModuleFailure(err)));
  yield r;
}

export default function* moduleSaga() {
  yield takeLatest(FETCH_MODULE_REQUEST, fetchModuleRequest);
}
