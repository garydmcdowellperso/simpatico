export const FETCH_ALLDEBATES_REQUEST = "FETCH_ALLDEBATES_REQUEST";
export const FETCH_ALLDEBATES_SUCCESS = "FETCH_ALLDEBATES_SUCCESS";
export const FETCH_ALLDEBATES_FAILURE = "FETCH_ALLDEBATES_FAILURE";

export const FETCH_DEBATE_REQUEST = "FETCH_DEBATE_REQUEST";
export const FETCH_DEBATE_SUCCESS = "FETCH_DEBATE_SUCCESS";
export const FETCH_DEBATE_FAILURE = "FETCH_DEBATE_FAILURE";

export const CREATE_DEBATE_REQUEST = "CREATE_DEBATE_REQUEST";
export const CREATE_DEBATE_SUCCESS = "CREATE_DEBATE_SUCCESS";
export const CREATE_DEBATE_FAILURE = "CREATE_DEBATE_FAILURE";

export const UPDATE_LANDING_PAGE_HEADER_REQUEST = "UPDATE_LANDING_PAGE_HEADER_REQUEST";
export const UPDATE_LANDING_PAGE_HEADER_SUCCESS = "UPDATE_LANDING_PAGE_HEADER_SUCCESS";
export const UPDATE_LANDING_PAGE_HEADER_FAILURE = "UPDATE_LANDING_PAGE_HEADER_FAILURE";

export const UPDATE_LANDING_PAGE_OVERVIEW_REQUEST = "UPDATE_LANDING_PAGE_OVERVIEW_REQUEST";
export const UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS = "UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS";
export const UPDATE_LANDING_PAGE_OVERVIEW_FAILURE = "UPDATE_LANDING_PAGE_OVERVIEW_FAILURE";

export const UPDATE_LANDING_PAGE_THEMES_REQUEST = "UPDATE_LANDING_PAGE_THEMES_REQUEST";
export const UPDATE_LANDING_PAGE_THEMES_SUCCESS = "UPDATE_LANDING_PAGE_THEMES_SUCCESS";
export const UPDATE_LANDING_PAGE_THEMES_FAILURE = "UPDATE_LANDING_PAGE_THEMES_FAILURE";

export function fetchDebatesRequest() {
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

export function fetchDebateRequest(name) {
  return {
    type: FETCH_DEBATE_REQUEST,
    name
  };
}

export function fetchDebateSuccess(debate) {
  return {
    type: FETCH_DEBATE_SUCCESS,
    debate
  };
}

export function fetchDebateFailure(error) {
  return {
    type: FETCH_DEBATE_FALIURE,
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

export function updateLandingPageHeaderRequest(debateID, header) {
  return {
    type: UPDATE_LANDING_PAGE_HEADER_REQUEST,
    debateID,
    header
  };
}

export function updateLandingPageHeaderSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_HEADER_SUCCESS,
    debate
  };
}

export function updateLandingPageHeaderFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_HEADER_FAILURE,
    error
  };
}

export function updateLandingPageOverviewRequest(debateID, overview) {
  return {
    type: UPDATE_LANDING_PAGE_OVERVIEW_REQUEST,
    debateID,
    overview
  };
}

export function updateLandingPageOverviewSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS,
    debate
  };
}

export function updateLandingPageOverviewFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_OVERVIEW_FAILURE,
    error
  };
}

export function updateLandingPageThemesRequest(debateID, themes) {
  return {
    type: UPDATE_LANDING_PAGE_THEMES_REQUEST,
    debateID,
    themes
  };
}

export function updateLandingPageThemesSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_THEMES_SUCCESS,
    debate
  };
}

export function updateLandingPageThemesFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_THEMES_FAILURE,
    error
  };
}
