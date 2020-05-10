import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  CALLBACK_REQUEST,
  CALLBACK_REQUEST_SUCCESS,
  CALLBACK_REQUEST_FAILURE,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
} from "../actions/auth";

const initialState = { token: "", processing: false, error: "", accountCreated: false };

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        processing: true,
        token: "",
        error: ""
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        processing: false,
        token: action.token,
        error: ""
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        processing: false,
        token: "",
        error: action.error
      };
    case CREATE_ACCOUNT_REQUEST:
      return {
        ...state,
        processing: true,
        accountCreated: false,
        error: ""
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        processing: false,
        accountCreated: true,
        error: ""
      };
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        processing: false,
        accountCreated: false,
        error: action.error
      };
    default:
      return state;
  }
}
