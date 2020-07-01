import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../actions/users";

const initialState = {
  users: [],
  processingUsers: false,
  error: ""
};


export default function users(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        processingUsers: true,
        error: ""
      };
    case FETCH_USERS_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processingUsers: false,
        error: "",
        users: action.users
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        processingUsers: false,
        error: action.error,
        users: []
      };
    default:
      return state;
  }
}
