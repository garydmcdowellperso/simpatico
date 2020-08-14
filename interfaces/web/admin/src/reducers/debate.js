import {
  FETCH_ALLDEBATES_REQUEST,
  FETCH_ALLDEBATES_SUCCESS,
  FETCH_ALLDEBATES_FAILURE,
  FETCH_DEBATE_REQUEST,
  FETCH_DEBATE_SUCCESS,
  FETCH_DEBATE_FAILURE,
  CREATE_DEBATE_REQUEST,
  CREATE_DEBATE_SUCCESS,
  CREATE_DEBATE_FAILURE,
  DELETE_DEBATE_REQUEST,
  DELETE_DEBATE_SUCCESS,
  DELETE_DEBATE_FAILURE,
  UPDATE_LANDING_PAGE_HEADER_REQUEST,
  UPDATE_LANDING_PAGE_HEADER_SUCCESS,
  UPDATE_LANDING_PAGE_HEADER_FAILURE,
  UPDATE_LANDING_PAGE_OVERVIEW_REQUEST,
  UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS,
  UPDATE_LANDING_PAGE_OVERVIEW_FAILURE,
  UPDATE_LANDING_PAGE_THEMES_REQUEST,
  UPDATE_LANDING_PAGE_THEMES_SUCCESS,
  UPDATE_LANDING_PAGE_THEMES_FAILURE,
  UPDATE_LANDING_PAGE_SIDEBAR_REQUEST,
  UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS,
  UPDATE_LANDING_PAGE_SIDEBAR_FAILURE,
  UPDATE_LANDING_PAGE_FOOTER_REQUEST,
  UPDATE_LANDING_PAGE_FOOTER_SUCCESS,
  UPDATE_LANDING_PAGE_FOOTER_FAILURE,
  UPDATE_LANDING_PAGE_METATAGS_REQUEST,
  UPDATE_LANDING_PAGE_METATAGS_SUCCESS,
  UPDATE_LANDING_PAGE_METATAGS_FAILURE,
  UPDATE_CONNECTION_REQUEST,
  UPDATE_CONNECTION_SUCCESS,
  UPDATE_CONNECTION_FAILURE,
  UPDATE_GENERAL_INFO_REQUEST,
  UPDATE_GENERAL_INFO_SUCCESS,
  UPDATE_GENERAL_INFO_FAILURE,
  RESET_UPDATING,
  RESET_ERROR,
} from "../actions/debate";

const initialState = {
  debates: [],
  processing: false,
  error: "",
  debate: null,
  created: false,
  updating: false
};

export default function debate(state = initialState, action) {
  switch (action.type) {
    case RESET_UPDATING:
      return {
        ...state,
        updating: null
      };
    case RESET_ERROR:
      return {
        ...state,
        error: null
      };  
    case DELETE_DEBATE_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case DELETE_DEBATE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debates: action.debates
      };
    case DELETE_DEBATE_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
      };   
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
        error: "",
        created: false
      };
    case CREATE_DEBATE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate,
        created: true
      };
    case CREATE_DEBATE_FAILURE:
      return {
        ...state,
        //processing: false,
        error: action.error,
        debate: [],
        created: false
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
        updating: true,
        error: ""
      };
    case UPDATE_LANDING_PAGE_THEMES_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        updating: false,
        error: "",
        debate: action.debate
      };
    case UPDATE_LANDING_PAGE_THEMES_FAILURE:
      return {
        ...state,
        updating: false,
        error: action.error,
        debate: null
      };
    case UPDATE_LANDING_PAGE_SIDEBAR_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case UPDATE_LANDING_PAGE_SIDEBAR_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        debate: null
      };
    case UPDATE_LANDING_PAGE_FOOTER_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case UPDATE_LANDING_PAGE_FOOTER_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case UPDATE_LANDING_PAGE_FOOTER_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        debate: null
      };
    case UPDATE_LANDING_PAGE_METATAGS_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case UPDATE_LANDING_PAGE_METATAGS_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case UPDATE_LANDING_PAGE_METATAGS_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        debate: null
      };
    case UPDATE_CONNECTION_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case UPDATE_CONNECTION_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case UPDATE_CONNECTION_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        debate: null
      };
    case UPDATE_GENERAL_INFO_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case UPDATE_GENERAL_INFO_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case UPDATE_GENERAL_INFO_FAILURE:
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
