import {
  FETCH_STATS_REQUEST,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE
} from "../actions/stats";

const initialState = {
  posts: null,
  pageviews: null,
  processing: false,
  error: ""
};

export default function stats(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATS_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_STATS_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        posts: action.stats.posts,
        pageviews: action.stats.pageviews
      };
    case FETCH_STATS_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        stats: []
      };   
    default:
      return state;
  }
}
