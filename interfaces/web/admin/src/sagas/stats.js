import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_STATS_REQUEST,
  fetchStatsSuccess,
  fetchStatsFailure
} from "../actions/stats";
import { get } from "../lib/api";

function* fetchStats() {
  const r = yield get("v1/fetchStats")
    .then(json => put(fetchStatsSuccess(json)))
    .catch(err => put(fetchStatsFailure(err)));
  yield r;
}

export default function* statsSaga() {
  yield takeLatest(FETCH_STATS_REQUEST, fetchStats);
}