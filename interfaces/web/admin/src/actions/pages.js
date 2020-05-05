export const FETCH_ALLPAGES_FOR_DEBATE_REQUEST = "FETCH_ALLPAGES_FOR_DEBATE_REQUEST";
export const FETCH_ALLPAGES_FOR_DEBATE_SUCCESS = "FETCH_ALLPAGES_FOR_DEBATE_SUCCESS";
export const FETCH_ALLPAGES_FOR_DEBATE_FAILURE = "FETCH_ALLPAGES_FOR_DEBATE_FAILURE";

export const FETCH_ALLPAGES_REQUEST = "FETCH_ALLPAGES_REQUEST";
export const FETCH_ALLPAGES_SUCCESS = "FETCH_ALLPAGES_SUCCESS";
export const FETCH_ALLPAGES_FAILURE = "FETCH_ALLPAGES_FAILURE";

export const CREATE_PAGE_REQUEST = "CREATE_PAGE_REQUEST";
export const CREATE_PAGE_SUCCESS = "CREATE_PAGE_SUCCESS";
export const CREATE_PAGE_FAILURE = "CREATE_PAGE_FAILURE";

export const FETCH_PAGE_REQUEST = "FETCH_PAGE_REQUEST";
export const FETCH_PAGE_SUCCESS = "FETCH_PAGE_SUCCESS";
export const FETCH_PAGE_FAILURE = "FETCH_PAGE_FAILURE";

export const UPDATE_PAGE_REQUEST = "UPDATE_PAGE_REQUEST";
export const UPDATE_PAGE_SUCCESS = "UPDATE_PAGE_SUCCESS";
export const UPDATE_PAGE_FAILURE = "UPDATE_PAGE_FAILURE";

export function fetchAllPagesRequest() {
  return {
    type: FETCH_ALLPAGES_REQUEST
  };
}

export function fetchAllPagesSuccess(pages) {
  return {
    type: FETCH_ALLPAGES_SUCCESS,
    pages
  };
}

export function fetchAllPagesFailure(error) {
  return {
    type: FETCH_ALLPAGES_FAILURE,
    error
  };
}

export function fetchAllPagesForDebateRequest(debateId) {
  return {
    type: FETCH_ALLPAGES_FOR_DEBATE_REQUEST,
    debateId
  };
}

export function fetchAllPagesForDebateSuccess(pages) {
  return {
    type: FETCH_ALLPAGES_FOR_DEBATE_SUCCESS,
    pages
  };
}

export function fetchAllPagesForDebateFailure(error) {
  return {
    type: FETCH_ALLPAGES_FOR_DEBATE_FAILURE,
    error
  };
}

export function createPageRequest(name, debateId, pageType, url, languages) {
  return {
    type: CREATE_PAGE_REQUEST,
    name,
    debateId,
    pageType,
    url,
    languages
  };
}

export function createPageSuccess(pages) {
  return {
    type: CREATE_PAGE_SUCCESS,
    pages
  };
}

export function createPageFailure(error) {
  return {
    type: CREATE_PAGE_FAILURE,
    error
  };
}

export function fetchPageRequest(id) {
  return {
    type: FETCH_PAGE_REQUEST,
    id
  };
}

export function fetchPageSuccess(page) {
  return {
    type: FETCH_PAGE_SUCCESS,
    page
  };
}

export function fetchPageFailure(error) {
  return {
    type: FETCH_PAGE_FAILURE,
    error
  };
}

export function updatePageRequest(name, id, pageType, url, languages) {
  return {
    type: UPDATE_PAGE_REQUEST,
    name,
    id,
    pageType,
    url,
    languages
  };
}

export function updatePageSuccess(page) {
  return {
    type: UPDATE_PAGE_SUCCESS,
    page
  };
}

export function updatePageFailure(error) {
  return {
    type: UPDATE_PAGE_FAILURE,
    error
  };
}