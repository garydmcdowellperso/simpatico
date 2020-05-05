export const FETCH_ALLMODULES_FOR_DEBATE_REQUEST = "FETCH_ALLMODULES_FOR_DEBATE_REQUEST";
export const FETCH_ALLMODULES_FOR_DEBATE_SUCCESS = "FETCH_ALLMODULES_FOR_DEBATE_SUCCESS";
export const FETCH_ALLMODULES_FOR_DEBATE_FAILURE = "FETCH_ALLMODULES_FOR_DEBATE_FAILURE";

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

export function fetchAllModulesRequest() {
  return {
    type: FETCH_ALLMODULES_REQUEST
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

export function fetchAllModulesForDebateRequest(debateId) {
  return {
    type: FETCH_ALLMODULES_FOR_DEBATE_REQUEST,
    debateId
  };
}

export function fetchAllModulesForDebateSuccess(modules) {
  return {
    type: FETCH_ALLMODULES_FOR_DEBATE_SUCCESS,
    modules
  };
}

export function fetchAllModulesForDebateFailure(error) {
  return {
    type: FETCH_ALLMODULES_FOR_DEBATE_FAILURE,
    error
  };
}

export function createModuleRequest(title, debateId, moduleType, help, name) {
  return {
    type: CREATE_MODULE_REQUEST,
    title,
    debateId,
    moduleType,
    help,
    name
  };
}

export function createModuleSuccess(module) {
  return {
    type: CREATE_MODULE_SUCCESS,
    module
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

export function fetchModuleSuccess(module) {
  return {
    type: FETCH_MODULE_SUCCESS,
    module
  };
}

export function fetchModuleFailure(error) {
  return {
    type: FETCH_MODULE_FAILURE,
    error
  };
}

export function updateModuleRequest(title, id, moduleType, help, name) {
  return {
    type: UPDATE_MODULE_REQUEST,
    title,
    id,
    moduleType,
    help,
    name
  };
}

export function updateModuleSuccess(module) {
  return {
    type: UPDATE_MODULE_SUCCESS,
    module
  };
}

export function updateModuleFailure(error) {
  return {
    type: UPDATE_MODULE_FAILURE,
    error
  };
}