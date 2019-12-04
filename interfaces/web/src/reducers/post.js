import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from '../actions/post';

const initialState = { posts: [] };

export default function post(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      console.log("action", action);
      return {
        ...state,
        posts: state.posts.push(action.post)
      };
    default:
      return state;
  }
}
