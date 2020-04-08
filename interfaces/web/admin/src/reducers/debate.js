import {
  FETCH_ALLDEBATES_REQUEST,
  FETCH_ALLDEBATES_SUCCESS,
  FETCH_ALLDEBATES_FAILURE,
  CREATE_DEBATE_REQUEST,
  CREATE_DEBATE_SUCCESS,
  CREATE_DEBATE_FAILURE
} from "../actions/debate";

const initialState = {
  debates: [],
  processing: false,
  error: "",
  debate: null
};

export default function debate(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALLDEBATES_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case FETCH_ALLDEBATES_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debates: action.debates
      };
    case FETCH_ALLDEBATES_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.error,
        debates: []
      };
    case CREATE_DEBATE_REQUEST:
      return {
        ...state,
        processing: true,
        error: ""
      };
    case CREATE_DEBATE_SUCCESS:
      // Parse out json and update the store
      return {
        ...state,
        processing: false,
        error: "",
        debate: action.debate
      };
    case CREATE_DEBATE_FAILURE:
      return {
        ...state,
        //processing: false,
        error: action.error,
        debate: []
      };      
    default:
      return state;
  }
}
