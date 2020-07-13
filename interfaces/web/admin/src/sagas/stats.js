import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_STATS_REQUEST,
  fetchStatsSuccess,
  fetchStatsFailure,
  FETCH_USERSBYDEVICE_REQUEST,
  fetchUsersByDeviceSuccess,
  fetchUsersByDeviceFailure,
  FETCH_VISITORSBYDAYFORMONTH_REQUEST,
  fetchVisitorsByDayForMonthSuccess,
  fetchVisitorsByDayForMonthFailure
} from "../actions/stats";
import { get } from "../lib/api";

function* fetchStats(action) {
  const r = yield get(`v1/fetchStats?id=${action.accountId}`)
    .then(json => put(fetchStatsSuccess(json)))
    .catch(err => put(fetchStatsFailure(err)));
  yield r;
}

function* fetchUsersByDevice(action) {
  const r = yield get(`v1/fetchUsersByDevice?id=${action.accountId}`)
    .then(json => put(fetchUsersByDeviceSuccess(json)))
    .catch(err => put(fetchUsersByDeviceFailure(err)));
  yield r;
}

function* fetchVisitorsByDayForMonth(action) {
  const r = yield get(`v1/fetchVisitorsByDayForMonth?id=${action.accountId}&month=${action.month}`)
    .then(json => put(fetchVisitorsByDayForMonthSuccess(json)))
    .catch(err => put(fetchVisitorsByDayForMonthFailure(err)));
  yield r;
}

export default function* statsSaga() {
  yield takeLatest(FETCH_STATS_REQUEST, fetchStats);
  yield takeLatest(FETCH_USERSBYDEVICE_REQUEST, fetchUsersByDevice);
  yield takeLatest(FETCH_VISITORSBYDAYFORMONTH_REQUEST, fetchVisitorsByDayForMonth);
}
