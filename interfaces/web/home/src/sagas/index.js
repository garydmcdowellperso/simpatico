import { all, fork } from "redux-saga/effects";

import authSaga from "./auth";
import debateSaga from "./debate";
import modulesSaga from "./modules";
import pagesSaga from "./pages";

export default function*() {
  yield all([fork(authSaga), fork(debateSaga), fork(modulesSaga), fork(pagesSaga)]);
}
