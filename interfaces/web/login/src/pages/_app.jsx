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
import config from '../../config';

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
      // Get the name part which is the sub-domain
      const subdomain =  host.split('.')[1] ? host.split('.')[0] : false;

      if (subdomain) {      
        const res = await fetch(`${config.api.host}/v1/fetchDebate?name=${subdomain}`)

        const debate = await res.json()
        return { pageProps, debate };
      } else {
        return { pageProps };
      }
    } else {
      return { pageProps };
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

