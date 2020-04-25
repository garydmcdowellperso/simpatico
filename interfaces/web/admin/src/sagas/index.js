import { all, fork } from "redux-saga/effects";

import authSaga from "./auth";
import debateSaga from "./debate";
import pagesSaga from "./pages";
import statsSaga from "./stats";

export default function*() {
  yield all([fork(authSaga), fork(debateSaga), fork(pagesSaga), fork(statsSaga)]);
}
