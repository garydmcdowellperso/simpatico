import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_TOP_CONTRIBUTORS_REQUEST,
  FETCH_TOP_CONTRIBUTORS_SUCCESS,
  FETCH_TOP_CONTRIBUTORS_FAILURE
} from "../actions/posts";

const initialState = {
  posts: [],
  processing: false,
  error: "",
  contributors:[]
};


export default function posts(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        processing: true,
        error: "",
        posts: []
      };
    case FETCH_POSTS_SUCCESS:
      // Parse out json and update the store
      console.log('action', action)
      return {
        ...state,
        processing: false,
        error: "",
        posts: action.posts
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        posts: []
      };
    case FETCH_TOP_CONTRIBUTORS_REQUEST:
      return {
        ...state,
        processing: true,
        error: "",
        contributors: []
      };
    case FETCH_TOP_CONTRIBUTORS_SUCCESS:
      return {
        ...state,
        processing: false,
        error: "",
        contributors: action.contributors
      };
    case FETCH_TOP_CONTRIBUTORS_FAILURE:
      return {
        ...state,
        processing: true,
        error: "",
        contributors: []
      };    
    default:
      return state;
  }
}
