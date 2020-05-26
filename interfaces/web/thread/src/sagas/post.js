import { takeLatest, put } from "redux-saga/effects";
import {
  CREATE_POST_REQUEST,
  createPostSuccess,
  createPostFailure,
  REPLY_POST_REQUEST,
  replyPostSuccess,
  replyPostFailure,
  FETCH_POSTS_FOR_MODULE_REQUEST,
  fetchPostsForModuleSuccess,
  fetchPostsForModuleFailure,
  LIKE_POST_REQUEST,
  likePostSuccess,
  likePostFailure,
  DISLIKE_POST_REQUEST,
  dislikePostSuccess,
  dislikePostFailure,
  UPDATE_POST_REQUEST,
  updatePostSuccess,
  updatePostFailure,
  DELETE_POST_REQUEST,
  deletePostSuccess,
  deletePostFailure
} from "../actions/post";
import { remove, get, post } from "../lib/api";

function* createPostRequest(action) {
  const r = yield post(
    "v1/createPost",
    JSON.stringify({
      title: action.title,
      contents: action.contents,
      module: action.module
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

function* fetchPostsForModule(action) {
  const r = yield get(`v1/fetchPostsForModule?module=${action.module}&page=${action.page}`)
    .then(json => put(fetchPostsForModuleSuccess(json)))
    .catch(err => put(fetchPostsForModuleFailure(err)));
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
    .catch(err => put(dislikePostFailure(err)));
  yield r;
}

function* updatePost(action) {
  const r = yield post(
    "v1/updatePost",
    JSON.stringify({
      id: action.id,
      contents: action.contents
    })
  )
    .then(json => put(updatePostSuccess(json)))
    .catch(err => put(updatePostFailure(err)));
  yield r;
}

function* deletePost(action) {
  console.log('HERE')
  const r = yield remove(
    "v1/deletePost",
    JSON.stringify({
      id: action.id
    })
  )
    .then(json => put(deletePostSuccess(json)))
    .catch(err => put(deletePostFailure(err)));
  yield r;
}

export default function* postSaga() {
  yield takeLatest(CREATE_POST_REQUEST, createPostRequest);
  yield takeLatest(REPLY_POST_REQUEST, replyPostRequest);
  yield takeLatest(FETCH_POSTS_FOR_MODULE_REQUEST, fetchPostsForModule);
  yield takeLatest(LIKE_POST_REQUEST, likePost);
  yield takeLatest(DISLIKE_POST_REQUEST, dislikePost);
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}
