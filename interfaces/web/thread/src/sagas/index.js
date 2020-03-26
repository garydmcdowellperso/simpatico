import { all, fork } from "redux-saga/effects";

import authSaga from "./auth";
import postSaga from "./post";
import threadSaga from "./thread";

export default function*() {
  yield all([fork(authSaga), fork(postSaga), fork(threadSaga)]);
}
