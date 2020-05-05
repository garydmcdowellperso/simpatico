import {
  FETCH_ALLPAGES_REQUEST,
  FETCH_ALLPAGES_SUCCESS,
  FETCH_ALLPAGES_FAILURE,
  CREATE_PAGE_REQUEST,
  CREATE_PAGE_SUCCESS,
  CREATE_PAGE_FAILURE,
  FETCH_PAGE_REQUEST,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_FAILURE,
  UPDATE_PAGE_REQUEST,
  UPDATE_PAGE_SUCCESS,
  UPDATE_PAGE_FAILURE,
} from "../actions/pages";

const initialState = {
  pages: [],
  processing: false,
  error: "",
  page: null,
  processing_update: false
};

export default function pages(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALLPAGES_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_ALLPAGES_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        pages: action.pages
      };
    case FETCH_ALLPAGES_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        pages: []
      };
    case CREATE_PAGE_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case CREATE_PAGE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        page: action.page
      };
    case CREATE_PAGE_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        page: null
      };
    case FETCH_PAGE_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_PAGE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        page: action.page
      };
    case FETCH_PAGE_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        page: null
      };
    case UPDATE_PAGE_REQUEST:
      return {
        ...state,
        processing_update: true,
        error: ""
      };
    case UPDATE_PAGE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing_update: false,
        error: "",
        page: null
      };
    case UPDATE_PAGE_FAILURE:
      return {
        ...state,
        processing_update: false,
        error: action.error,
        page: null
      };
    default:
      return state;
  }
}
