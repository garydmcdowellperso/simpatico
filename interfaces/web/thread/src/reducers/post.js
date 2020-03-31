import { cloneDeep } from "lodash";

import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  REPLY_POST_REQUEST,
  REPLY_POST_SUCCESS,
  REPLY_POST_FAILURE,
  FETCH_POSTS_FOR_THREAD_REQUEST,
  FETCH_POSTS_FOR_THREAD_SUCCESS,
  FETCH_POSTS_FOR_THREAD_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  DISLIKE_POST_REQUEST,
  DISLIKE_POST_SUCCESS,
  DISLIKE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
} from "../actions/post";

const initialState = { error: "", processing: false, posts: [], search: [], page: 0, more: true };

function findInReplies(replies, actionPost) {
  replies.map(y => {
    if (y.id === actionPost.id) {
      return (y.replies = actionPost.replies);
    }
    if (y.replies && y.replies.length > 0) {
      findInReplies(y.replies, actionPost);
    }
  });
}

export default function post(state = initialState, action) {
  let newPosts;
  let searchPosts;
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        ...state,
        processing: true
      };
    case CREATE_POST_SUCCESS:
      newPosts = cloneDeep(state.posts);
      newPosts.push(action.post);

      return {
        ...state,
        posts: newPosts,
        processing: false
      };
    case REPLY_POST_SUCCESS:
      // Replace existing post with returned one
      newPosts = cloneDeep(state.posts);
      newPosts.map(x => {
        if (x.id === action.post.id) {
          return (x.replies = action.post.replies);
        }
        if (x.replies && x.replies.length > 0) {
          findInReplies(x.replies, action.post);
        }
      });

      return {
        ...state,
        posts: newPosts
      };
    case FETCH_POSTS_FOR_THREAD_REQUEST:
      return {
        ...state,
        processing: true,
        page: action.page
      };
    case FETCH_POSTS_FOR_THREAD_SUCCESS:
      /**
      // Change order according to filter
      newPosts = cloneDeep(action.posts);
      newPosts.sort((a, b) => {
        return b.timestamp_unix - a.timestamp_unix;
      });

      // Change order according to filter
      searchPosts = cloneDeep(action.posts);
      const postsLength = searchPosts.length;
      for (let x = 0; x < postsLength; x += 1) {
        searchPosts[x].description = searchPosts[x].contents;    
      } 

      console.log('searchPosts', searchPosts)
      **/

      return {
        ...state,
        processing: false,
        posts: action.posts.length > 0 ? state.posts.concat(action.posts) : state.posts,
        search: searchPosts,
        more: action.posts.length > 0 ? true : false
      };
    case FETCH_POSTS_FOR_THREAD_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error
      };
    case FETCH_POSTS_FOR_THREAD_REQUEST:
      return {
        ...state,
        processing: true,
        page: action.page
      };
    case FETCH_POSTS_FOR_THREAD_SUCCESS:
      /**
      // Change order according to filter
      newPosts = cloneDeep(action.posts);
      newPosts.sort((a, b) => {
        return b.timestamp_unix - a.timestamp_unix;
      });

      // Change order according to filter
      searchPosts = cloneDeep(action.posts);
      const postsLength = searchPosts.length;
      for (let x = 0; x < postsLength; x += 1) {
        searchPosts[x].description = searchPosts[x].contents;    
      } 

      console.log('searchPosts', searchPosts)
      **/

      return {
        ...state,
        processing: false,
        posts: action.posts.length > 0 ? state.posts.concat(action.posts) : state.posts,
        search: searchPosts,
        more: action.posts.length > 0 ? true : false
      };
    case FETCH_POSTS_FOR_THREAD_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error
      };
    case LIKE_POST_REQUEST:
      return {
        ...state,
        processing: true
      };
    case LIKE_POST_SUCCESS:
      newPosts = cloneDeep(state.posts);

      // Update our post in the array
      const postsLength = newPosts.length;
      for (let x = 0; x < postsLength; x += 1) {
        if (newPosts[x].id === action.post.id) {
          newPosts[x] = action.post;
        }
      } 
      return {
        ...state,
        processing: false,
        posts: newPosts
      };
    case LIKE_POST_FAILURE:
      return {
        ...state,
        processing: false
      };
    case DISLIKE_POST_REQUEST:
      return {
        ...state,
        processing: true
      };
    case DISLIKE_POST_SUCCESS:
      newPosts = cloneDeep(state.posts);

      // Update our post in the array
      const postsLength2 = newPosts.length;
      for (let x = 0; x < postsLength2; x += 1) {
        if (newPosts[x].id === action.post.id) {
          newPosts[x] = action.post;
        }
      } 
      return {
        ...state,
        processing: false,
        posts: newPosts
      };
    case DISLIKE_POST_FAILURE:
      return {
        ...state,
        processing: false
      };

    case UPDATE_POST_REQUEST:
      return {
        ...state,
        processing: true
      };
    case UPDATE_POST_SUCCESS:
      newPosts = cloneDeep(state.posts);

      // Update our post in the array
      const postsLength3 = newPosts.length;
      for (let x = 0; x < postsLength3; x += 1) {
        if (newPosts[x].id === action.post.id) {
          newPosts[x] = action.post;
        }
      } 
      return {
        ...state,
        processing: false,
        posts: newPosts
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        processing: false
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
        processing: true
      };
    case DELETE_POST_SUCCESS:
      newPosts = [];

      // Update our post in the array
      const postsLength4 = state.posts.length;
      for (let x = 0; x < postsLength4; x += 1) {
        if (state.posts[x].id !== action.post.id) {
          newPosts.push(state.posts[x]);
        }
      } 
      console.log('newPosts', newPosts)
      return {
        ...state,
        processing: false,
        posts: newPosts
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        processing: false
      };
    default:  
      return state;
  }
}
