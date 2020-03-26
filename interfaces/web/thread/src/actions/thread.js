export const FETCH_THREAD_REQUEST = "FETCH_THREAD_REQUEST";
export const FETCH_THREAD_SUCCESS = "FETCH_THREAD_SUCCESS";
export const FETCH_THREAD_FAILURE = "FETCH_THREAD_FAILURE";

export function fetchThreadRequest(thread) {
  return {
    type: FETCH_THREAD_REQUEST,
    thread
  };
}

export function fetchThreadSuccess(thread) {
  return {
    type: FETCH_THREAD_SUCCESS,
    thread
  };
}

export function fetchThreadFailure(error) {
  return {
    type: FETCH_THREAD_FAILURE,
    error
  };
}
