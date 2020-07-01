import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../actions/posts";

const initialState = {
  posts: [],
  processing: false,
  error: "",
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
    default:
      return state;
  }
}
