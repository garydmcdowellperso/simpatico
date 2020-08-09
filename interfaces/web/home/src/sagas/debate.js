import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_ALLDEBATES_REQUEST,
  fetchDebatesSuccess,
  fetchDebatesFailure,
  CREATE_DEBATE_REQUEST,
  createDebateSuccess,
  createDebateFailure,
  FETCH_DEBATE_REQUEST,
  fetchDebateSuccess,
  fetchDebateFailure,
  UPDATE_LANDING_PAGE_HEADER_REQUEST,
  updateLandingPageHeaderSuccess,
  updateLandingPageHeaderFailure,
  UPDATE_LANDING_PAGE_OVERVIEW_REQUEST,
  updateLandingPageOverviewSuccess,
  updateLandingPageOverviewFailure,
  UPDATE_LANDING_PAGE_THEMES_REQUEST,
  updateLandingPageThemesSuccess,
  updateLandingPageThemesFailure
} from "../actions/debate";
import { get, post, putApi } from "../lib/api";

function* fetchAllDebates() {
  const r = yield get("v1/fetchAllDebates")
    .then(json => put(fetchDebatesSuccess(json)))
    .catch(err => put(fetchDebatesFailure(err)));
  yield r;
}

function* fetchDebate(action) {
  const r = yield get(`v1/fetchDebate?name=${action.name}`)
    .then(json => put(fetchDebateSuccess(json)))
    .catch(err => put(fetchDebateFailure(err)));
  yield r;
}

function* createDebate(action) {
  const r = yield post("v1/createDebate",
    JSON.stringify({
      name: action.name,
      url: action.url,
      debateType: action.debateType,
      languages: action.languages
    }))
    .then(json => put(createDebateSuccess(json)))
    .catch(err => put(createDebateFailure(err)));
  yield r;
}

function* updateLandingPageHeader(action) {
  const r = yield putApi("v1/updateLandingPageHeader",
    JSON.stringify({
      debateID: action.debateID,
      header: action.header
    }))
    .then(json => put(updateLandingPageHeaderSuccess(json)))
    .catch(err => put(updateLandingPageHeaderFailure(err)));
  yield r;
}

function* updateLandingPageOverview(action) {
  const r = yield putApi("v1/updateLandingPageOverview",
    JSON.stringify({
      debateID: action.debateID,
      overview: action.overview
    }))
    .then(json => put(updateLandingPageOverviewSuccess(json)))
    .catch(err => put(updateLandingPageOverviewFailure(err)));
  yield r;
}

function* updateLandingPageThemes(action) {
  const r = yield putApi("v1/updateLandingPageThemes",
    JSON.stringify({
      debateID: action.debateID,
      themes: action.themes
    }))
    .then(json => put(updateLandingPageThemesSuccess(json)))
    .catch(err => put(updateLandingPageThemesFailure(err)));
  yield r;
}

export default function* authSaga() {
  yield takeLatest(FETCH_DEBATE_REQUEST, fetchDebate);
  yield takeLatest(FETCH_ALLDEBATES_REQUEST, fetchAllDebates);
  yield takeLatest(CREATE_DEBATE_REQUEST, createDebate);
  yield takeLatest(UPDATE_LANDING_PAGE_HEADER_REQUEST, updateLandingPageHeader);
  yield takeLatest(UPDATE_LANDING_PAGE_OVERVIEW_REQUEST, updateLandingPageOverview);
  yield takeLatest(UPDATE_LANDING_PAGE_THEMES_REQUEST, updateLandingPageThemes);
}
