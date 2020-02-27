import { takeLatest, put } from "redux-saga/effects";
import {
  CREATE_POST_REQUEST,
  createPostSuccess,
  createPostFailure,
  REPLY_POST_REQUEST,
  replyPostSuccess,
  replyPostFailure
} from "../actions/post";
import { post } from "../lib/api";

function* createPostRequest(action) {
  const r = yield post(
    "v1/createPost",
    JSON.stringify({
      title: action.title,
      contents: action.contents
    })
  )
    .then(json => put(createPostSuccess(json)))
    .catch(err => put(createPostFailure(err)));
  yield r;
}

function* replyPostRequest(action) {
  const r = yield post(
    "v1/replyPost",
    JSON.stringify({
      id: action.id,
      contents: action.contents
    })
  )
    .then(json => put(replyPostSuccess(json)))
    .catch(err => put(replyPostFailure(err)));
  yield r;
}

export default function* postSaga() {
  yield takeLatest(CREATE_POST_REQUEST, createPostRequest);
  yield takeLatest(REPLY_POST_REQUEST, replyPostRequest);
}
