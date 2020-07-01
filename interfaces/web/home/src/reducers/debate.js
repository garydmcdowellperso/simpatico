import {
  FETCH_ALLDEBATES_REQUEST,
  FETCH_ALLDEBATES_SUCCESS,
  FETCH_ALLDEBATES_FAILURE,
  SET_DEBATE_REQUEST,
  FETCH_DEBATE_REQUEST,
  FETCH_DEBATE_SUCCESS,
  FETCH_DEBATE_FAILURE,
  CREATE_DEBATE_REQUEST,
  CREATE_DEBATE_SUCCESS,
  CREATE_DEBATE_FAILURE,
  UPDATE_LANDING_PAGE_HEADER_REQUEST,
  UPDATE_LANDING_PAGE_HEADER_SUCCESS,
  UPDATE_LANDING_PAGE_HEADER_FAILURE,
  UPDATE_LANDING_PAGE_OVERVIEW_REQUEST,
  UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS,
  UPDATE_LANDING_PAGE_OVERVIEW_FAILURE,
  UPDATE_LANDING_PAGE_THEMES_REQUEST,
  UPDATE_LANDING_PAGE_THEMES_SUCCESS,
  UPDATE_LANDING_PAGE_THEMES_FAILURE,
} from "../actions/debate";

const initialState = {
  debates: [],
  processing: false,
  error: "",
  debate: null
};

export default function debate(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALLDEBATES_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_ALLDEBATES_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debates: action.debates
      };
    case FETCH_ALLDEBATES_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        debates: []
      };
    case SET_DEBATE_REQUEST:
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case FETCH_DEBATE_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_DEBATE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case FETCH_DEBATE_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        debate: null
      };
      case CREATE_DEBATE_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case CREATE_DEBATE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case CREATE_DEBATE_FAILURE:
      return {
        ...state,
        //processing: false,
        error: action.error,
        debate: []
      };      
    case UPDATE_LANDING_PAGE_HEADER_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case UPDATE_LANDING_PAGE_HEADER_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case UPDATE_LANDING_PAGE_HEADER_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        debate: null
      };
    case UPDATE_LANDING_PAGE_OVERVIEW_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case UPDATE_LANDING_PAGE_OVERVIEW_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        debate: null
      };
    case UPDATE_LANDING_PAGE_THEMES_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case UPDATE_LANDING_PAGE_THEMES_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case UPDATE_LANDING_PAGE_THEMES_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        debate: null
      };
    default:
      return state;
  }
}
