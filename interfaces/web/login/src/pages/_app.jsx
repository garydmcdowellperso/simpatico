import App from 'next/app';
import React from 'react';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import flowRight from 'lodash/flowRight';

import sagas from "../sagas";
import allReducers from "../reducers";
import i18n from '../../i18n';

const { withTranslation } = i18n;

const sagaMiddleware = createSagaMiddleware();

const makeStore = (initialState, options) => {
  const store = createStore(
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

    if (ctx.req) {
      const host = ctx.req.get('host');
      const res = await fetch(`https://e8e5120fec0b.ngrok.io/api/v1/fetchDebate?name=${host}`)
      const debate = await res.json()
      return { pageProps, debate };
    }
  }

  render() {
    const { Component, debate, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} {...debate} />
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

