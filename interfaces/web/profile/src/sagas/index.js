import { all, fork } from "redux-saga/effects";

import authSaga from "./auth";
import postSaga from "./post";

export default function*() {
  yield all([fork(authSaga), fork(postSaga)]);
}
