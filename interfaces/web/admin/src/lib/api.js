import fetch from 'isomorphic-unfetch';

let store;

export const callApi = (route, method, body, options) => {
  options = {
    method,
    body,
    headers: {},
    ...options
  };
  options.headers["Content-Type"] = "application/json; charset=UTF-8";

  return fetch(`/api/${route}`, options).then(response => {
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        // Log the user out
        window.location.href = '/admin/'
      }

      if (response.status === 400 || response.status === 502 || response.status === 500) {
        return response.json().then(error => {
          throw new Error(error.response);
        });
      }
    }
    return response.json();
  });
};

export const get = (route, options) => {
  return callApi(route, "GET", undefined, options);
};

export const post = (route, body, options) => {
  return callApi(route, "POST", body, options);
};

export const putApi = (route, body, options) => {
  return callApi(route, "PUT", body, options);
};

export const remove = (route, body, options) => {
  return callApi(route, "DELETE", body, options);
};

export const init = _store => {
  store = _store;
};

const Api = {
  get,
  post,
  putApi,
  remove,
  callApi,
  init
};

export default Api;
