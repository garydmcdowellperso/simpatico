import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  CALLBACK_REQUEST,
  CALLBACK_REQUEST_SUCCESS,
  CALLBACK_REQUEST_FAILURE
} from "../actions/auth";

const initialState = { token: "", processing: false, error: "" };

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        processing: false,
        error: ""
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error
      };
    case CALLBACK_REQUEST:
      return {
        ...state,
        processing: true,
        error: "",
        token: ""
      };
    case CALLBACK_REQUEST_SUCCESS:
      return {
        ...state,
        processing: false,
        error: "",
        token: action.token
      };
    case CALLBACK_REQUEST_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        token: ""
      };
    default:
      return state;
  }
}
