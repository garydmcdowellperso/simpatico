import {
  FETCH_STATS_REQUEST,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
  FETCH_USERSBYDEVICE_REQUEST,
  FETCH_USERSBYDEVICE_SUCCESS,
  FETCH_USERSBYDEVICE_FAILURE,
  FETCH_VISITORSBYDAYFORMONTH_REQUEST,
  FETCH_VISITORSBYDAYFORMONTH_SUCCESS,
  FETCH_VISITORSBYDAYFORMONTH_FAILURE,
} from "../actions/stats";

const initialState = {
  posts: null,
  pageviews: null,
  reactions: null,
  signups: null,
  shares: null,
  processing: false,
  error: "",
  devices: [],
  visitors: []
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
        pageviews: action.stats.pageviews,
        reactions: action.stats.reactions,
        shares: action.stats.shares,
        signups: action.stats.signups
      };
    case FETCH_STATS_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        stats: []
      };   
    case FETCH_USERSBYDEVICE_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_USERSBYDEVICE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        devices: action.devices
      };
    case FETCH_USERSBYDEVICE_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        devices: []
      };   
    case FETCH_VISITORSBYDAYFORMONTH_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_VISITORSBYDAYFORMONTH_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        visitors: action.visitors
      };
    case FETCH_VISITORSBYDAYFORMONTH_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        visitors: []
      };  
    default:
      return state;
  }
}
