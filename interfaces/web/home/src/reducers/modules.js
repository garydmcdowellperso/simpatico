import {
  FETCH_MODULE_REQUEST,
  FETCH_MODULE_SUCCESS,
  FETCH_MODULE_FAILURE,
} from "../actions/modules";

const initialState = {
  processing: false,
  error: "",
  module: null
};

export default function modules(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
