import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_INFO_ADMIN_REQUEST,
  FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS,
  FETCH_USER_INFO_ADMIN_REQUEST_FAILURE,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
} from "../actions/users";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  avatar: "",
  id: null,
  avatar: "",
  bio: "",
  badge: 0,
  score: 0,
  likes: [],
  dislikes: [],
  contributions: [],
  debates: [],
  role: [],
  users: [],
  processing: false,
  error: ""
};


export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_USERS_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        users: action.users
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        users: []
      };
    case FETCH_USER_INFO_ADMIN_REQUEST:
      return {
        ...state,
        processing: true,
        error: "",
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
        id: null,
        bio: null,
        badge: 0,
        score: 0,
        likes: [],
        dislikes: [],
        contributions: [],
        debates: [],
        role: []      
      };
    case FETCH_USER_INFO_ADMIN_REQUEST_SUCCESS:
      // Parse out json and update the store

      return {
        ...state,
        processing: false,
        error: "",
        firstName: action.json["first-name"],
        lastName: action.json["last-name"],
        email: action.json.email,
        avatar: action.json.avatar,
        id: action.json.id,
        bio: action.json.bio,
        badge: action.json.badge,
        score: action.json.score,
        likes: action.json.likes,
        dislikes: action.json.dislikes,
        contributions: action.json.contributions,
        debates: action.json.debates,
        role: action.json.role,
      };
    case FETCH_USER_INFO_ADMIN_REQUEST_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
        id: null,
        bio: null,
        badge: 0,
        score: 0,
        likes: [],
        dislikes: [],
        contributions: [],
        debates: [],
        role: []      
      };
    case UPDATE_USER_INFO_REQUEST:
      return {
        ...state,
        processing: true,
        error: "",
        firstName: "",
        lastName: "",
        email: "",
        id: null,
        bio: null,
        badge: 0,
        score: 0,
        likes: [],
        dislikes: [],
        contributions: [],
        debates: [],
        role: []      
      };
    case UPDATE_USER_INFO_SUCCESS:
      // Parse out json and update the store
      console.log('action', action.json)
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
        id: action.json.id,
        likes: action.json.likes,
        dislikes: action.json.dislikes,
        contributions: action.json.contributions,
        debates: action.json.debates,
        role: action.json.role
      };
    case UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        firstName: "",
        lastName: "",
        email: "",
        id: null,
        bio: null,
        badge: 0,
        score: 0,
        likes: [],
        dislikes: [],
        contributions: [],
        debates: [],
        role: []      
      };
    default:
      return state;
  }
}
