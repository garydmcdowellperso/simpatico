import { cloneDeep } from "lodash";

import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  REPLY_POST_REQUEST,
  REPLY_POST_SUCCESS,
  REPLY_POST_FAILURE,
  FETCH_POSTS_FOR_MODULE_REQUEST,
  FETCH_POSTS_FOR_MODULE_SUCCESS,
  FETCH_POSTS_FOR_MODULE_FAILURE,
  FETCH_ALL_POSTS_FOR_MODULE_REQUEST,
  FETCH_ALL_POSTS_FOR_MODULE_SUCCESS,
  FETCH_ALL_POSTS_FOR_MODULE_FAILURE,
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
  DELETE_POST_FAILURE,
  CHANGE_SORT_ORDER
} from "../actions/post";

const initialState = { 
  error: "", 
  processingPosts: false, 
  posts: [], 
  search: [], 
  page: 0, 
  more: false,
  sort: 'Sort Descending'
};

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
  switch (action.type) {
    case CHANGE_SORT_ORDER:
      return {
        ...state,
        sort: action.order
      };
    case CREATE_POST_REQUEST:
      return {
        ...state,
        processingPosts: true
      };
    case CREATE_POST_SUCCESS:
      newPosts = cloneDeep(state.posts);
      if (state.sort === 'Sort Descending') {
        newPosts.unshift(action.post);
      } else {
        newPosts.push(action.post);
      }
      return {
        ...state,
        posts: newPosts,
        processingPosts: false
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
    case FETCH_POSTS_FOR_MODULE_REQUEST:
      return {
        ...state,
        page: action.page
      };
    case FETCH_POSTS_FOR_MODULE_SUCCESS:
      if (action.json.page === 1) {
        return {
          ...state,
          posts: action.json.posts,
          more: action.json.more,
          page: action.json.page
        };  
      }

      return {
        ...state,
        posts: action.json.posts.length > 0 ? state.posts.concat(action.json.posts) : state.posts,
        more: action.json.more,
        page: action.json.page
      };
    case FETCH_POSTS_FOR_MODULE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case FETCH_ALL_POSTS_FOR_MODULE_REQUEST:
      return {
        ...state,
      };
    case FETCH_ALL_POSTS_FOR_MODULE_SUCCESS:
      return {
        ...state,
        posts: action.json.posts,
        more: false,
      };
    case FETCH_ALL_POSTS_FOR_MODULE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case LIKE_POST_REQUEST:
      return {
        ...state,
        processingPosts: true
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
        processingPosts: false,
        posts: newPosts
      };
    case LIKE_POST_FAILURE:
      return {
        ...state,
        processingPosts: false
      };
    case DISLIKE_POST_REQUEST:
      return {
        ...state,
        processingPosts: true
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
        processingPosts: false,
        posts: newPosts
      };
    case DISLIKE_POST_FAILURE:
      return {
        ...state,
        processingPosts: false
      };

    case UPDATE_POST_REQUEST:      
      return {
        ...state,
        processingPosts: true
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
        processingPosts: false,
        posts: newPosts
      };
    case UPDATE_POST_FAILURE:
      return {
        ...state,
        processingPosts: false
      };
    case DELETE_POST_REQUEST:
      return {
        ...state,
        processingPosts: true
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
        processingPosts: false,
        posts: newPosts
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        processingPosts: false
      };
    default:  
      return state;
  }
}
