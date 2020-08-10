export const FETCH_ALLDEBATES_REQUEST = "FETCH_ALLDEBATES_REQUEST";
export const FETCH_ALLDEBATES_SUCCESS = "FETCH_ALLDEBATES_SUCCESS";
export const FETCH_ALLDEBATES_FAILURE = "FETCH_ALLDEBATES_FAILURE";

export const FETCH_DEBATE_REQUEST = "FETCH_DEBATE_REQUEST";
export const FETCH_DEBATE_SUCCESS = "FETCH_DEBATE_SUCCESS";
export const FETCH_DEBATE_FAILURE = "FETCH_DEBATE_FAILURE";

export const CREATE_DEBATE_REQUEST = "CREATE_DEBATE_REQUEST";
export const CREATE_DEBATE_SUCCESS = "CREATE_DEBATE_SUCCESS";
export const CREATE_DEBATE_FAILURE = "CREATE_DEBATE_FAILURE";

export const DELETE_DEBATE_REQUEST = "DELETE_DEBATE_REQUEST";
export const DELETE_DEBATE_SUCCESS = "DELETE_DEBATE_SUCCESS";
export const DELETE_DEBATE_FAILURE = "DELETE_DEBATE_FAILURE";

export const UPDATE_LANDING_PAGE_HEADER_REQUEST = "UPDATE_LANDING_PAGE_HEADER_REQUEST";
export const UPDATE_LANDING_PAGE_HEADER_SUCCESS = "UPDATE_LANDING_PAGE_HEADER_SUCCESS";
export const UPDATE_LANDING_PAGE_HEADER_FAILURE = "UPDATE_LANDING_PAGE_HEADER_FAILURE";

export const UPDATE_LANDING_PAGE_OVERVIEW_REQUEST = "UPDATE_LANDING_PAGE_OVERVIEW_REQUEST";
export const UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS = "UPDATE_LANDING_PAGE_OVERVIEW_SUCCESS";
export const UPDATE_LANDING_PAGE_OVERVIEW_FAILURE = "UPDATE_LANDING_PAGE_OVERVIEW_FAILURE";

export const UPDATE_LANDING_PAGE_THEMES_REQUEST = "UPDATE_LANDING_PAGE_THEMES_REQUEST";
export const UPDATE_LANDING_PAGE_THEMES_SUCCESS = "UPDATE_LANDING_PAGE_THEMES_SUCCESS";
export const UPDATE_LANDING_PAGE_THEMES_FAILURE = "UPDATE_LANDING_PAGE_THEMES_FAILURE";

export const UPDATE_LANDING_PAGE_SIDEBAR_REQUEST = "UPDATE_LANDING_PAGE_SIDEBAR_REQUEST";
export const UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS = "UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS";
export const UPDATE_LANDING_PAGE_SIDEBAR_FAILURE = "UPDATE_LANDING_PAGE_SIDEBAR_FAILURE";

export const UPDATE_LANDING_PAGE_FOOTER_REQUEST = "UPDATE_LANDING_PAGE_FOOTER_REQUEST";
export const UPDATE_LANDING_PAGE_FOOTER_SUCCESS = "UPDATE_LANDING_PAGE_FOOTER_SUCCESS";
export const UPDATE_LANDING_PAGE_FOOTER_FAILURE = "UPDATE_LANDING_PAGE_FOOTER_FAILURE";

export const UPDATE_LANDING_PAGE_METATAGS_REQUEST = "UPDATE_LANDING_PAGE_METATAGS_REQUEST";
export const UPDATE_LANDING_PAGE_METATAGS_SUCCESS = "UPDATE_LANDING_PAGE_METATAGS_SUCCESS";
export const UPDATE_LANDING_PAGE_METATAGS_FAILURE = "UPDATE_LANDING_PAGE_METATAGS_FAILURE";

export const UPDATE_CONNECTION_REQUEST = "UPDATE_CONNECTION_REQUEST";
export const UPDATE_CONNECTION_SUCCESS = "UPDATE_CONNECTION_SUCCESS";
export const UPDATE_CONNECTION_FAILURE = "UPDATE_CONNECTION_FAILURE";

export const UPDATE_GENERAL_INFO_REQUEST = "UPDATE_GENERAL_INFO_REQUEST";
export const UPDATE_GENERAL_INFO_SUCCESS = "UPDATE_GENERAL_INFO_SUCCESS";
export const UPDATE_GENERAL_INFO_FAILURE = "UPDATE_GENERAL_INFO_FAILURE";

export function deleteDebateRequest(debateId) {
  return {
    type: DELETE_DEBATE_REQUEST,
    debateId
  };
}

export function deleteDebateSuccess(status) {
  return {
    type: DELETE_DEBATE_SUCCESS,
    status
  };
}

export function deleteDebateFailure(error) {
  return {
    type: DELETE_DEBATE_FAILURE,
    error
  };
}

export function fetchDebatesRequest() {
  return {
    type: FETCH_ALLDEBATES_REQUEST,
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

export function createDebateRequest(name, url, debateType, languages) {
  return {
    type: CREATE_DEBATE_REQUEST,
    name,
    url,
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

export function updateConnectionRequest(debateID, connection) {
  return {
    type: UPDATE_CONNECTION_REQUEST,
    debateID,
    connection
  };
}

export function updateConnectionSuccess(debate) {
  return {
    type: UPDATE_CONNECTION_SUCCESS,
    debate
  };
}

export function updateConnectionFailure(error) {
  return {
    type: UPDATE_CONNECTION_FAILURE,
    error
  };
}

export function updateGeneralInfoRequest(debateID, info) {
  return {
    type: UPDATE_GENERAL_INFO_REQUEST,
    debateID,
    info
  };
}

export function updateGeneralInfoSuccess(debate) {
  return {
    type: UPDATE_GENERAL_INFO_SUCCESS,
    debate
  };
}

export function updateGeneralInfoFailure(error) {
  return {
    type: UPDATE_GENERAL_INFO_FAILURE,
    error
  };
}

export function updateLandingPageSidebarRequest(debateID, sidebar) {
  return {
    type: UPDATE_LANDING_PAGE_SIDEBAR_REQUEST,
    debateID,
    sidebar
  };
}

export function updateLandingPageSidebarSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_SIDEBAR_SUCCESS,
    debate
  };
}

export function updateLandingPageSidebarFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_SIDEBAR_FAILURE,
    error
  };
}

export function updateLandingPageFooterRequest(debateID, footer) {
  return {
    type: UPDATE_LANDING_PAGE_FOOTER_REQUEST,
    debateID,
    footer
  };
}

export function updateLandingPageFooterSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_FOOTER_SUCCESS,
    debate
  };
}

export function updateLandingPageFooterFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_FOOTER_FAILURE,
    error
  };
}

export function updateLandingPageMetaTagsRequest(debateID, metaTags) {
  return {
    type: UPDATE_LANDING_PAGE_METATAGS_REQUEST,
    debateID,
    metaTags
  };
}

export function updateLandingPageMetaTagsSuccess(debate) {
  return {
    type: UPDATE_LANDING_PAGE_METATAGS_SUCCESS,
    debate
  };
}

export function updateLandingPageMetaTagsFailure(error) {
  return {
    type: UPDATE_LANDING_PAGE_METATAGS_FAILURE,
    error
  };
}