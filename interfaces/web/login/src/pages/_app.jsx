import App from 'next/app';
import React from 'react';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { withRouter } from 'next/router';
import withRedux from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

import sagas from "../sagas";
import allReducers from "../reducers";

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
      const res = await fetch(`https://0040d099ab7e.ngrok.io/api/v1/fetchDebate?name=${host}`)
      const debate = await res.json()
      console.log('debate', debate)
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

export default withRedux(makeStore)(Simpatico);
