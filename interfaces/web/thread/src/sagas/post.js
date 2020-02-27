import { takeLatest, put } from "redux-saga/effects";
import {
  CREATE_POST_REQUEST,
  createPostSuccess,
  createPostFailure,
  REPLY_POST_REQUEST,
  replyPostSuccess,
  replyPostFailure,
  FETCH_POSTS_FOR_THREAD_REQUEST,
  fetchPostsForThreadSuccess,
  fetchPostsForThreadFailure
} from "../actions/post";
import { get, post } from "../lib/api";

function* createPostRequest(action) {
  const r = yield post(
    "v1/createPost",
    JSON.stringify({
      title: action.title,
      contents: action.contents,
      thread: action.thread
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

function* fetchPostsForThread(action) {
  const r = yield get(`v1/fetchPostsForThread?thread=${action.thread}`)
    .then(json => put(fetchPostsForThreadSuccess(json)))
    .catch(err => put(fetchPostsForThreadFailure(err)));
  yield r;
}

export default function* postSaga() {
  yield takeLatest(CREATE_POST_REQUEST, createPostRequest);
  yield takeLatest(REPLY_POST_REQUEST, replyPostRequest);
  yield takeLatest(FETCH_POSTS_FOR_THREAD_REQUEST, fetchPostsForThread);
}
