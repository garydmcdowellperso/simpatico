import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  CALLBACK_REQUEST,
  CALLBACK_REQUEST_SUCCESS,
  CALLBACK_REQUEST_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  FORGOTTEN_PASSWORD_REQUEST,
  FORGOTTEN_PASSWORD_SUCCESS,
  FORGOTTEN_PASSWORD_FAILURE,
  FORGOTTEN_PASSWORD_RESET_SENT,
  VERIFY_TOKEN_REQUEST,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from "../actions/auth";

const initialState = { isValidToken: null, sent: false, sending: null, token: "", processing: false, error: "", accountCreated: false };

export default function auth(state = initialState, action) {
  switch (action.type) {
    case FORGOTTEN_PASSWORD_RESET_SENT:
      return {
        ...state,
        sending: null,
        sent: false
      };
    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        sending: true
      };
    case CHANGE_PASSWORD_SUCCESS:
      console.log('action', action)
      return {
        ...state,
        sending: false,
        token: action.token
      };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        sending: false,
        error: action.error
      };      
    case VERIFY_TOKEN_REQUEST:
      return {
        ...state,
        sending: true
      };
    case VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        sending: false,
        isValidToken: action.isValidToken
      };
    case VERIFY_TOKEN_FAILURE:
      return {
        ...state,
        sending: false,
        error: action.error
      };      
    case FORGOTTEN_PASSWORD_REQUEST:
      return {
        ...state,
        sending: true
      };
    case FORGOTTEN_PASSWORD_SUCCESS:
      return {
        ...state,
        sending: false,
        sent: true
      };
    case FORGOTTEN_PASSWORD_FAILURE:
      return {
        ...state,
        sending: false,
        sent: false,
        error: action.error
      };
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
    case CREATE_USER_REQUEST:
      return {
        ...state,
        sending: true,
        error: ""
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        sending: false,
        error: ""
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        sending: false,
        error: action.error
      };
    default:
      return state;
  }
}
