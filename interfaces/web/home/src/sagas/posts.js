import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_POSTS_REQUEST,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "../actions/posts";
import { get } from "../lib/api";

function* fetchPosts(action) {
  const r = yield get(`v1/fetchPosts?id=${action.accountId}`)
    .then(json => put(fetchPostsSuccess(json)))
    .catch(err => put(fetchPostsFailure(err)));
  yield r;
}

export default function* postsSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
}
