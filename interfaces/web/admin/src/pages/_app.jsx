import App from "next/app";
import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import flowRight from 'lodash/flowRight';
import { init } from "@socialgouv/matomo-next";

import sagas from "../sagas";
import allReducers from "../reducers";
import { verifyTokenRequest } from "../actions/auth";
import config from '../../config';

import i18n from '../../i18n';

const { withTranslation } = i18n;

const sagaMiddleware = createSagaMiddleware();

let store;

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
    init({ url: config.matomo.host, siteId: 1 });

    // First thing we do is to validate their cookie
    store.dispatch(
      verifyTokenRequest({
        role: "administrator"
      })
    );
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