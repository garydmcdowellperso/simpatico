import { all, fork } from "redux-saga/effects";

import authSaga from "./auth";
import postSaga from "./post";
import moduleSaga from "./module";
import usersSaga from "./users";

export default function*() {
  yield all([fork(authSaga), fork(postSaga), fork(moduleSaga), fork(usersSaga)]);
}
