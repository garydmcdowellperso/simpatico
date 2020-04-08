import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_ALLDEBATES_REQUEST,
  fetchDebatesSuccess,
  fetchDebatesFailure,
  CREATE_DEBATE_REQUEST,
  createDebateSuccess,
  createDebateFailure,
} from "../actions/debate";
import { get, post } from "../lib/api";

function* fetchAllDebates() {
  const r = yield get("v1/fetchAllDebates")
    .then(json => put(fetchDebatesSuccess(json)))
    .catch(err => put(fetchDebatesFailure(err)));
  yield r;
}

function* createDebate(action) {
  const r = yield post("v1/createDebate",
    JSON.stringify({
      name: action.name,
      slug: action.slug,
      debateType: action.debateType,
      languages: action.languages
    }))
    .then(json => put(createDebateSuccess(json)))
    .catch(err => put(createDebateFailure(err)));
  yield r;
}

export default function* authSaga() {
  yield takeLatest(FETCH_ALLDEBATES_REQUEST, fetchAllDebates);
  yield takeLatest(CREATE_DEBATE_REQUEST, createDebate);
}
