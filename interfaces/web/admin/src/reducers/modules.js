import {
  FETCH_ALLMODULES_REQUEST,
  FETCH_ALLMODULES_SUCCESS,
  FETCH_ALLMODULES_FAILURE,
  CREATE_MODULE_REQUEST,
  CREATE_MODULE_SUCCESS,
  CREATE_MODULE_FAILURE,
  FETCH_MODULE_REQUEST,
  FETCH_MODULE_SUCCESS,
  FETCH_MODULE_FAILURE,
  UPDATE_MODULE_REQUEST,
  UPDATE_MODULE_SUCCESS,
  UPDATE_MODULE_FAILURE,
} from "../actions/modules";

const initialState = {
  modules: [],
  processing: false,
  error: "",
  module: null,
  processing_update: false
};

export default function modules(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALLMODULES_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_ALLMODULES_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        modules: action.modules
      };
    case FETCH_ALLMODULES_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        modules: []
      };
    case CREATE_MODULE_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case CREATE_MODULE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        module: action.module
      };
    case CREATE_MODULE_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        module: null
      };
    case FETCH_MODULE_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_MODULE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        module: action.module
      };
    case FETCH_MODULE_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        module: null
      };
    case UPDATE_MODULE_REQUEST:
      return {
        ...state,
        processing_update: true,
        error: ""
      };
    case UPDATE_MODULE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing_update: false,
        error: "",
        module: null
      };
    case UPDATE_MODULE_FAILURE:
      return {
        ...state,
        processing_update: false,
        error: action.error,
        module: null
      };
    default:
      return state;
  }
}
