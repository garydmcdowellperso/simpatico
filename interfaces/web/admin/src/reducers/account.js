import {
  FETCH_ACCOUNT_REQUEST,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
  UPDATE_ACCOUNT_INFO_REQUEST,
  UPDATE_ACCOUNT_INFO_SUCCESS,
  UPDATE_ACCOUNT_INFO_FAILURE,
} from "../actions/account";

const initialState = {
  processing: false,
  error: "",
  account: null
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_ACCOUNT_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        account: action.account
      };
    case FETCH_ACCOUNT_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        account: null
      };
    case UPDATE_ACCOUNT_INFO_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case UPDATE_ACCOUNT_INFO_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        account: action.account
      };
    case UPDATE_ACCOUNT_INFO_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        account: null
      };
    default:
      return state;
  }
}
