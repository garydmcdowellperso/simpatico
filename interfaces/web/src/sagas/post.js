import { takeLatest, put } from "redux-saga/effects";
import {
  CREATE_POST_REQUEST,
  createPostSuccess,
  createPostFailure
} from "../actions/post";
import { post } from "../lib/api";

function* createPostRequest(action) {
  const r = yield post(
    "v1/createPost",
    JSON.stringify({
      title: action.title,
      contents: action.contents,
      user: action.user
    })
  )
    .then(json => put(createPostSuccess(json)))
    .catch(err => put(createPostFailure(err)));
  yield r;
}

export default function* postSaga() {
  yield takeLatest(CREATE_POST_REQUEST, createPostRequest);
}
