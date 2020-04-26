import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_ALLMODULES_REQUEST,
  fetchAllModulesSuccess,
  fetchAllModulesFailure,
  CREATE_MODULE_REQUEST,
  createModuleSuccess,
  createModuleFailure,
  FETCH_MODULE_REQUEST,
  fetchModuleSuccess,
  fetchModuleFailure,
  UPDATE_MODULE_REQUEST,
  updateModuleSuccess,
  updateModuleEFailure,
} from "../actions/modules";
import { get, post, putApi } from "../lib/api";

function* fetchAllModules(action) {
  const r = yield get(`v1/fetchAllModules`)
    .then(json => put(fetchAllModulesSuccess(json)))
    .catch(err => put(fetchAllModulesFailure(err)));
  yield r;
}

function* createModule(action) {
  const r = yield post("v1/createModule",
    JSON.stringify({
      name: action.name,
      type: action.moduleType,
      debateId: action.debateId,
      url: action.url,
      languages: action.languages
    }))
    .then(json => put(createModuleSuccess(json)))
    .catch(err => put(createModuleFailure(err)));
  yield r;
}

function* fetchModule(action) {
  const r = yield get(`v1/fetchModule?id=${action.id}`)
    .then(json => put(fetchModuleSuccess(json)))
    .catch(err => put(fetchModuleFailure(err)));
  yield r;
}

function* updateModule(action) {
  const r = yield putApi("v1/updateModule",
    JSON.stringify({
      name: action.name,
      type: action.MODULEType,
      id: action.id,
      url: action.url,
      languages: action.languages
    }))
    .then(json => put(updateModuleSuccess(json)))
    .catch(err => put(updateModuleFailure(err)));
  yield r;
}

export default function* ModulesSaga() {
  yield takeLatest(FETCH_ALLMODULES_REQUEST, fetchAllModules);
  yield takeLatest(CREATE_MODULE_REQUEST, createModule);
  yield takeLatest(FETCH_MODULE_REQUEST, fetchModule);
  yield takeLatest(UPDATE_MODULE_REQUEST, updateModule);
}
