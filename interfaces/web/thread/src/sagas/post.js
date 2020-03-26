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
  fetchPostsForThreadFailure,
  LIKE_POST_REQUEST,
  likePostSuccess,
  likePostFailure,
  DISLIKE_POST_REQUEST,
  dislikePostSuccess,
  dislikePostFailure
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
  const r = yield get(`v1/fetchPostsForThread?thread=${action.thread}&page=${action.page}`)
    .then(json => put(fetchPostsForThreadSuccess(json)))
    .catch(err => put(fetchPostsForThreadFailure(err)));
  yield r;
}

function* likePost(action) {
  const r = yield post(
    "v1/likePost",
    JSON.stringify({
      id: action.id
    })
  )
    .then(json => put(likePostSuccess(json)))
    .catch(err => put(likePostFailure(err)));
  yield r;
}

function* dislikePost(action) {
  const r = yield post(
    "v1/dislikePost",
    JSON.stringify({
      id: action.id
    })
  )
    .then(json => put(dislikePostSuccess(json)))
    .catch(err => put(ldisikePostFailure(err)));
  yield r;
}

export default function* postSaga() {
  yield takeLatest(CREATE_POST_REQUEST, createPostRequest);
  yield takeLatest(REPLY_POST_REQUEST, replyPostRequest);
  yield takeLatest(FETCH_POSTS_FOR_THREAD_REQUEST, fetchPostsForThread);
  yield takeLatest(LIKE_POST_REQUEST, likePost);
  yield takeLatest(DISLIKE_POST_REQUEST, dislikePost);
}
