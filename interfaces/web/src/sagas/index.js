import { all, fork } from "redux-saga/effects";

import postSaga from "./post";

export default function*() {
  yield all([fork(postSaga)]);
}
