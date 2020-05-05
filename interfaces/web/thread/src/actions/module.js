export const FETCH_MODULE_REQUEST = "FETCH_MODULE_REQUEST";
export const FETCH_MODULE_SUCCESS = "FETCH_MODULE_SUCCESS";
export const FETCH_MODULE_FAILURE = "FETCH_MODULE_FAILURE";

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
