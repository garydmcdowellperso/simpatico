import { cloneDeep } from "lodash";

import {
  FETCH_MODULE_REQUEST,
  FETCH_MODULE_SUCCESS,
  FETCH_MODULE_FAILURE
} from "../actions/module";

const initialState = { error: "", processing: false, module: null };

export default function module(state = initialState, action) {
  switch (action.type) {
    case FETCH_MODULE_REQUEST:
      return {
        ...state,
        processing: true
      };
    case FETCH_MODULE_SUCCESS:
      return {
        ...state,
        module: action.module,
        processing: false,
        error: ""
      };
    case FETCH_MODULE_FAILURE:
      return {
        ...state,
        module: null,
        processing: false,
        error: action.error
      };
    default:
      return state;
  }
}
