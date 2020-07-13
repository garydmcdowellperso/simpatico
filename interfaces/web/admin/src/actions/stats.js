export const FETCH_STATS_REQUEST = "FETCH_STATS_REQUEST";
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS";
export const FETCH_STATS_FAILURE = "FETCH_STATS_FAILURE";

export const FETCH_USERSBYDEVICE_REQUEST = "FETCH_USERSBYDEVICE_REQUEST";
export const FETCH_USERSBYDEVICE_SUCCESS = "FETCH_USERSBYDEVICE_SUCCESS";
export const FETCH_USERSBYDEVICE_FAILURE = "FETCH_USERSBYDEVICE_FAILURE";

export const FETCH_VISITORSBYDAYFORMONTH_REQUEST = "FETCH_VISITORSBYDAYFORMONTH_REQUEST";
export const FETCH_VISITORSBYDAYFORMONTH_SUCCESS = "FETCH_VISITORSBYDAYFORMONTH_SUCCESS";
export const FETCH_VISITORSBYDAYFORMONTH_FAILURE = "FETCH_VISITORSBYDAYFORMONTH_FAILURE";

export function fetchStatsRequest(accountId) {
  return {
    type: FETCH_STATS_REQUEST,
    accountId
  };
}

export function fetchStatsSuccess(stats) {
  return {
    type: FETCH_STATS_SUCCESS,
    stats
  };
}

export function fetchStatsFailure(error) {
  return {
    type: FETCH_STATS_FAILURE,
    error
  };
}

export function fetchUsersByDeviceRequest(accountId) {
  return {
    type: FETCH_USERSBYDEVICE_REQUEST,
    accountId
  };
}

export function fetchUsersByDeviceSuccess(devices) {
  return {
    type: FETCH_USERSBYDEVICE_SUCCESS,
    devices
  };
}

export function fetchUsersByDeviceFailure(error) {
  return {
    type: FETCH_USERSBYDEVICE_FAILURE,
    error
  };
}

export function fetchVisitorsByDayForMonthRequest(accountId, month) {
  return {
    type: FETCH_VISITORSBYDAYFORMONTH_REQUEST,
    accountId,
    month
  };
}

export function fetchVisitorsByDayForMonthSuccess(visitors) {
  return {
    type: FETCH_VISITORSBYDAYFORMONTH_SUCCESS,
    visitors
  };
}

export function fetchVisitorsByDayForMonthFailure(error) {
  return {
    type: FETCH_VISITORSBYDAYFORMONTH_FAILURE,
    error
  };
}
