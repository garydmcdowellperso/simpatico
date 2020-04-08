import { all, fork } from "redux-saga/effects";

import authSaga from "./auth";
import debateSaga from "./debate";

export default function*() {
  yield all([fork(authSaga), fork(debateSaga)]);
}
