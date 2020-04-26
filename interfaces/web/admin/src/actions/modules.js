export const FETCH_ALLMODULES_REQUEST = "FETCH_ALLMODULES_REQUEST";
export const FETCH_ALLMODULES_SUCCESS = "FETCH_ALLMODULES_SUCCESS";
export const FETCH_ALLMODULES_FAILURE = "FETCH_ALLMODULES_FAILURE";

export const CREATE_MODULE_REQUEST = "CREATE_MODULE_REQUEST";
export const CREATE_MODULE_SUCCESS = "CREATE_MODULE_SUCCESS";
export const CREATE_MODULE_FAILURE = "CREATE_MODULE_FAILURE";

export const FETCH_MODULE_REQUEST = "FETCH_MODULE_REQUEST";
export const FETCH_MODULE_SUCCESS = "FETCH_MODULE_SUCCESS";
export const FETCH_MODULE_FAILURE = "FETCH_MODULE_FAILURE";

export const UPDATE_MODULE_REQUEST = "UPDATE_MODULE_REQUEST";
export const UPDATE_MODULE_SUCCESS = "UPDATE_MODULE_SUCCESS";
export const UPDATE_MODULE_FAILURE = "UPDATE_MODULE_FAILURE";

export function fetchAllModulesRequest(id) {
  return {
    type: FETCH_ALLMODULES_REQUEST,
    id
  };
}

export function fetchAllModulesSuccess(modules) {
  return {
    type: FETCH_ALLMODULES_SUCCESS,
    modules
  };
}

export function fetchAllModulesFailure(error) {
  return {
    type: FETCH_ALLMODULES_FAILURE,
    error
  };
}

export function createModuleRequest(name, debateId, MODULEType, url, languages) {
  return {
    type: CREATE_MODULE_REQUEST,
    name,
    debateId,
    MODULEType,
    url,
    languages
  };
}

export function createModuleSuccess(MODULEs) {
  return {
    type: CREATE_MODULE_SUCCESS,
    MODULEs
  };
}

export function createModuleFailure(error) {
  return {
    type: CREATE_MODULE_FAILURE,
    error
  };
}

export function fetchModuleRequest(id) {
  return {
    type: FETCH_MODULE_REQUEST,
    id
  };
}

export function fetchModuleSuccess(MODULE) {
  return {
    type: FETCH_MODULE_SUCCESS,
    MODULE
  };
}

export function fetchModuleFailure(error) {
  return {
    type: FETCH_MODULE_FAILURE,
    error
  };
}

export function updateModuleERequest(name, id, moduleType, url, languages) {
  return {
    type: UPDATE_MODULE_REQUEST,
    name,
    id,
    MODULEType,
    url,
    languages
  };
}

export function updateModuleSuccess(MODULE) {
  return {
    type: UPDATE_MODULE_SUCCESS,
    MODULE
  };
}

export function updateModuleFailure(error) {
  return {
    type: UPDATE_MODULE_FAILURE,
    error
  };
}