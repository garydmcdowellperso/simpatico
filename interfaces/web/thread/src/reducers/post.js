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
  FETCH_POSTS_FOR_THREAD_FAILURE
} from "../actions/post";

const initialState = { error: "", processing: false, posts: [] };

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
    case CREATE_POST_SUCCESS:
      newPosts = cloneDeep(state.posts);
      newPosts.push(action.post);

      return {
        ...state,
        posts: newPosts
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
        posts: []
      };
    case FETCH_POSTS_FOR_THREAD_SUCCESS:
      return {
        ...state,
        processing: false,
        posts: action.posts
      };
    case FETCH_POSTS_FOR_THREAD_FAILURE:
      return {
        ...state,
        processing: false,
        posts: [],
        error: action.error
      };
    default:
      return state;
  }
}
