export const FETCH_ALLDEBATES_REQUEST = "FETCH_ALLDEBATES_REQUEST";
export const FETCH_ALLDEBATES_SUCCESS = "FETCH_ALLDEBATES_SUCCESS";
export const FETCH_ALLDEBATES_FAILURE = "FETCH_ALLDEBATES_FAILURE";

export const CREATE_DEBATE_REQUEST = "CREATE_DEBATE_REQUEST";
export const CREATE_DEBATE_SUCCESS = "CREATE_DEBATE_SUCCESS";
export const CREATE_DEBATE_FAILURE = "CREATE_DEBATE_FAILURE";

export function fetchDebatesRequest(thread) {
  return {
    type: FETCH_ALLDEBATES_REQUEST
  };
}

export function fetchDebatesSuccess(debates) {
  return {
    type: FETCH_ALLDEBATES_SUCCESS,
    debates
  };
}

export function fetchDebatesFailure(error) {
  return {
    type: FETCH_ALLDEBATES_FAILURE,
    error
  };
}

export function createDebateRequest(name, slug, debateType, languages) {
  return {
    type: CREATE_DEBATE_REQUEST,
    name,
    slug,
    debateType,
    languages
  };
}

export function createDebateSuccess(debate) {
  return {
    type: CREATE_DEBATE_SUCCESS,
    debate
  };
}

export function createDebateFailure(error) {
  return {
    type: CREATE_DEBATE_FAILURE,
    error
  };
}
