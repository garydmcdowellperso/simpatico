import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_THREAD_REQUEST,
  fetchThreadSuccess,
  fetchThreadFailure
} from "../actions/thread";
import { get } from "../lib/api";

function* fetchThreadRequest(action) {
  const r = yield get(
    `v1/fetchThread?thread=${action.thread}`,
    JSON.stringify({
      thread: action.thread
    })
  )
    .then(json => put(fetchThreadSuccess(json)))
    .catch(err => put(fetchThreadFailure(err)));
  yield r;
}

export default function* threadSaga() {
  yield takeLatest(FETCH_THREAD_REQUEST, fetchThreadRequest);
}
