import App from "next/app";
import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import fetch from 'isomorphic-unfetch';

import sagas from "../sagas";
import allReducers from "../reducers";
import { verifyTokenRequest } from "../actions/auth";

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
  static async getInitialProps({ Component, ctx, req }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    const parts = ctx.req.headers.host.split('.');
    let name = '';

    if (parts) {
      name = parts[0];
    }
    // Do a check if this debatee exists before trying to render (no saga here, server side)
    const res = await fetch(`https://buchy.eu/api/v1/fetchDebate?name=${name}`)
    const json = await res.json()
    console.log('json', json);
    return { pageProps };
  }

  componentDidMount() {
    // Check if token passed in - validate it and use the response to populate local storage
    if (window.location.search.includes("token")) {
      // Ask server to verify and set cookie
      store.dispatch(
        verifyTokenRequest({
          token: getUrlParameter("token")
        })
      );
    }

    if (!window.location.search.includes("token")) {
      // Not on the URL so check the localStorage
      if (localStorage.getItem("token")) {
        // Ask server to verify and set cookie
        store.dispatch(
          verifyTokenRequest({
            token: localStorage.getItem("token")
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

export default withRedux(makeStore)(Simpatico);
