import {
  VERIFY_TOKEN_REQUEST,
  VERIFY_TOKEN_REQUEST_SUCCESS,
  VERIFY_TOKEN_REQUEST_FAILURE,
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_REQUEST_SUCCESS,
  FETCH_USER_INFO_REQUEST_FAILURE
} from "../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  id: null,
  isValidToken: null,
  token: "",
  processing: false,
  error: ""
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case VERIFY_TOKEN_REQUEST:
      return {
        ...state,
        processing: true,
        error: "",
        isValidToken: false,
        token: action.token
      };
    case VERIFY_TOKEN_REQUEST_SUCCESS:
      // Parse out json and update the store
      if (action && action.json && action.json.statusCode === 500) {
        return {
          ...state,
          processing: false,
          error: "",
          isValidToken: false
        };
      }

      return {
        ...state,
        processing: false,
        error: "",
        isValidToken: true
      };
    case VERIFY_TOKEN_REQUEST_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        isValidToken: false,
        token: ""
      };
    case FETCH_USER_INFO_REQUEST:
      return {
        ...state,
        processing: true,
        error: "",
        firstName: "",
        lastName: "",
        email: "",
        id: null
      };
    case FETCH_USER_INFO_REQUEST_SUCCESS:
      return {
        ...state,
        processing: false,
        error: "",
        firstName: action.json["first-name"],
        lastName: action.json["last-name"],
        email: action.json.email,
        id: action.json.id
      };
    case FETCH_USER_INFO_REQUEST_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        firstName: "",
        lastName: "",
        email: "",
        id: null
      };
    default:
      return state;
  }
}
