import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_ALLPAGES_REQUEST,
  fetchAllPagesSuccess,
  fetchAllPagesFailure,
  CREATE_PAGE_REQUEST,
  createPageSuccess,
  createPageFailure,
  FETCH_PAGE_REQUEST,
  fetchPageSuccess,
  fetchPageFailure,
  UPDATE_PAGE_REQUEST,
  updatePageSuccess,
  updatePageFailure,
} from "../actions/pages";
import { get, post, putApi } from "../lib/api";

function* fetchAllPages(action) {
  const r = yield get(`v1/fetchAllPages?debateId=${action.id}`)
    .then(json => put(fetchAllPagesSuccess(json)))
    .catch(err => put(fetchAllPagesFailure(err)));
  yield r;
}

function* createPage(action) {
  const r = yield post("v1/createPage",
    JSON.stringify({
      name: action.name,
      type: action.pageType,
      debateId: action.debateId,
      url: action.url,
      languages: action.languages
    }))
    .then(json => put(createPageSuccess(json)))
    .catch(err => put(createPageFailure(err)));
  yield r;
}

function* fetchPage(action) {
  const r = yield get(`v1/fetchPage?id=${action.id}`)
    .then(json => put(fetchPageSuccess(json)))
    .catch(err => put(fetchPageFailure(err)));
  yield r;
}

function* updatePage(action) {
  const r = yield putApi("v1/updatePage",
    JSON.stringify({
      name: action.name,
      type: action.pageType,
      id: action.id,
      url: action.url,
      languages: action.languages
    }))
    .then(json => put(updatePageSuccess(json)))
    .catch(err => put(updatePageFailure(err)));
  yield r;
}

export default function* pagesSaga() {
  yield takeLatest(FETCH_ALLPAGES_REQUEST, fetchAllPages);
  yield takeLatest(CREATE_PAGE_REQUEST, createPage);
  yield takeLatest(FETCH_PAGE_REQUEST, fetchPage);
  yield takeLatest(UPDATE_PAGE_REQUEST, updatePage);
}
