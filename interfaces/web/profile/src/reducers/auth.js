import {
  VERIFY_TOKEN_REQUEST,
  VERIFY_TOKEN_REQUEST_SUCCESS,
  VERIFY_TOKEN_REQUEST_FAILURE,
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_REQUEST_SUCCESS,
  FETCH_USER_INFO_REQUEST_FAILURE,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from "../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  bio: "",
  avatar: "",
  score: 0,
  badge: 0,
  role: [],
  likes: [],
  dislikes: [],
  contributions: [],
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
        isValidToken: null,
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
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        firstName: action.json["first-name"],
        lastName: action.json["last-name"],
        email: action.json.email,
        bio: action.json.bio,
        avatar: action.json.avatar,
        score: action.json.score,
        badge: action.json.badge,
        role: action.json.role,
        likes: action.json.likes,
        dislikes: action.json.dislikes,
        contributions: action.json.contributions,
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
    case UPDATE_USER_INFO_REQUEST:
      return {
        ...state,
        processing: true,
        error: "",
        firstName: "",
        lastName: "",
        email: "",
        id: null
      };
    case UPDATE_USER_INFO_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        firstName: action.json["first-name"],
        lastName: action.json["last-name"],
        email: action.json.email,
        bio: action.json.bio,
        avatar: action.json.avatar,
        score: action.json.score,
        badge: action.json.badge,
        id: action.json.id
      };
    case UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        firstName: "",
        lastName: "",
        email: "",
        id: null
      };
    case DELETE_USER_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case DELETE_USER_SUCCESS:
      // User has gone - logout and return to home
      return {
        ...state,
        processing: false,
        error: "",
        isValidToken: false,
        token: ""
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error
      };
    default:
      return state;
  }
}
