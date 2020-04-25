export const FETCH_STATS_REQUEST = "FETCH_STATS_REQUEST";
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS";
export const FETCH_STATS_FAILURE = "FETCH_STATS_FAILURE";

export function fetchStatsRequest() {
  return {
    type: FETCH_STATS_REQUEST
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
