import { all, fork } from "redux-saga/effects";

import accountSaga from "./account";
import authSaga from "./auth";
import debateSaga from "./debate";
import modulesSaga from "./modules";
import pagesSaga from "./pages";
import postsSaga from "./posts";
import statsSaga from "./stats";
import usersSaga from "./users";

export default function*() {
  yield all([fork(accountSaga), fork(authSaga), fork(debateSaga), fork(modulesSaga), fork(pagesSaga), fork(postsSaga), fork(statsSaga), fork(usersSaga)]);
}
