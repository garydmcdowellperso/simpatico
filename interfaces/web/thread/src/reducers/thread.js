import { cloneDeep } from "lodash";

import {
  FETCH_THREAD_REQUEST,
  FETCH_THREAD_SUCCESS,
  FETCH_THREAD_FAILURE
} from "../actions/thread";

const initialState = { error: "", processing: false, thread: null };

export default function thread(state = initialState, action) {
  switch (action.type) {
    case FETCH_THREAD_REQUEST:
      return {
        ...state,
        processing: true
      };
    case FETCH_THREAD_SUCCESS:
      return {
        ...state,
        thread: action.thread,
        processing: false,
        error: ""
      };
    case FETCH_THREAD_FAILURE:
      return {
        ...state,
        thread: null,
        processing: false,
        error: action.error
      };
    default:
      return state;
  }
}
