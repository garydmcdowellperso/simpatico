import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_POSTS_REQUEST,
  fetchPostsSuccess,
  fetchPostsFailure,
  FETCH_TOP_CONTRIBUTORS_REQUEST,
  fetchTopContributorsSuccess,
  fetchTopContributorsFailure,
} from "../actions/posts";
import { get } from "../lib/api";

function* fetchPosts(action) {
  const r = yield get(`v1/fetchPosts?id=${action.accountId}`)
    .then(json => put(fetchPostsSuccess(json)))
    .catch(err => put(fetchPostsFailure(err)));
  yield r;
}

function* fetchTopContributors(action) {
  const r = yield get(`v1/fetchTopContributors?id=${action.accountId}`)
    .then(json => put(fetchTopContributorsSuccess(json)))
    .catch(err => put(fetchTopContributorsFailure(err)));
  yield r;
}

export default function* postsSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPosts);
  yield takeLatest(FETCH_TOP_CONTRIBUTORS_REQUEST, fetchTopContributors);
}
