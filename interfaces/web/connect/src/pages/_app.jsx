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

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(Simpatico);
