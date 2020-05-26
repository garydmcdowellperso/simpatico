import App from "next/app";
import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import flowRight from 'lodash/flowRight';

import sagas from "../sagas";
import allReducers from "../reducers";
import { verifyTokenRequest } from "../actions/auth";
import i18n from '../../i18n';

const { withTranslation } = i18n;
const sagaMiddleware = createSagaMiddleware();

let store;

const getUrlParameter = name => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

const makeStore = initialState => {
  store = createStore(
    allReducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(sagas);

  return store;
};

class Simpatico extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  componentDidMount() {
    // Check if thread passed in and put in local storage
    if (window.location.search.includes("module")) {
      localStorage.setItem("module", getUrlParameter("module"));
    }

    if (!window.location.search.includes("token")) {
      // Not on the URL so check the localStorage
      if (localStorage.getItem("token")) {
        // Ask server to verify and set cookie
        store.dispatch(
          verifyTokenRequest({
            token: localStorage.getItem("token"),
            role: 'participant'
          })
        );
      }
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const { appWithTranslation } = i18n;

export default flowRight(
  withRedux(makeStore),
  appWithTranslation,
  withTranslation([`common`])
)(Simpatico);
