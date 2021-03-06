import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  CALLBACK_REQUEST,
  CALLBACK_REQUEST_SUCCESS,
  CALLBACK_REQUEST_FAILURE,
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
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE
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
    case CREATE_ACCOUNT_REQUEST:
      return {
        ...state,
        sending: true
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        sending: false
      };
    case CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        sending: false,
        error: action.error
      };            
    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        sending: true
      };
    case CHANGE_PASSWORD_SUCCESS:
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
    case LOGIN_REQUEST:
      return {
        ...state,
        processing: true,
        token: "",
        account: null,
        error: ""
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        processing: false,
        token: action.token,
        accountId: action.accountId,
        error: ""
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        processing: false,
        token: "",
        account: null,
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
      default:
      return state;
  }
}
