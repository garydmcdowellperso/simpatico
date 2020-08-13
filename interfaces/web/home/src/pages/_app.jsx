import App from "next/app";
import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import flowRight from 'lodash/flowRight';

import sagas from "../sagas";
import allReducers from "../reducers";
import { verifyTokenRequest, verifyTokenRequestFailure } from "../actions/auth";
import '../styles.css'
import i18n from '../../i18n';
import config from '../../config';

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

    if (ctx.req) {
      const host = ctx.req.headers.host;
      // Get the name part which is the sub-domain
      const subdomain =  host.split('.')[1] ? host.split('.')[0] : false;

      if (subdomain) {
        const res = await fetch(`${config.api.host}/v1/fetchDebate?name=${subdomain}`)

        const debate = await res.json()
        return { pageProps, debate };
      } else {
        const debate = {
          "_id" : "5f314c57599e7b54c7675890",
          "id" : 9,
          "name" : "gary",
          "url" : "gary.simpatico.cloud",
          "debateType" : "public",
          "languages" : {
              "english" : true,
              "french" : true,
              "spanish" : true
          },
          "header" : {
              "share" : true,
              "sections" : [ 
                  {
                      "page" : 1,
                      "languages" : {
                          "en" : "Here1",
                          "fr" : "Here1",
                          "es" : ""
                      }
                  }, 
                  {
                      "languages" : {
                          "en" : "",
                          "fr" : "",
                          "es" : ""
                      }
                  }, 
                  {
                      "languages" : {
                          "en" : "",
                          "fr" : "",
                          "es" : ""
                      }
                  }, 
                  {
                      "languages" : {
                          "en" : "",
                          "fr" : "",
                          "es" : ""
                      }
                  }
              ]
          },
          "overview" : {
              "title" : {
                  "en" : "English Title",
                  "fr" : "Titre en Francais",
                  "es" : "Spanish"
              },
              "description" : {
                  "en" : "English Descripton",
                  "fr" : "Description en Francais",
                  "es" : "Spanish"
              },
              "linkText" : {
                  "en" : "Click me",
                  "fr" : "Voir plus",
                  "es" : "Spanish"
              },
              "url" : "https://source.unsplash.com/random"
          },
          "themes" : [],
          "footer" : {
              "sections" : [ 
                  {
                      "languages" : {
                          "en" : "",
                          "fr" : "",
                          "es" : ""
                      }
                  }, 
                  {
                      "languages" : {
                          "en" : "",
                          "fr" : "",
                          "es" : ""
                      }
                  }, 
                  {
                      "languages" : {
                          "en" : "",
                          "fr" : "",
                          "es" : ""
                      }
                  }, 
                  {
                      "languages" : {
                          "en" : "",
                          "fr" : "",
                          "es" : ""
                      }
                  }
              ]
          },
          "metaTags" : [],
          "connection" : {
              "firstname" : true,
              "lastname" : true,
              "username" : true,
              "email" : true,
              "password" : true,
              "google" : false,
              "linkedin" : false,
              "additional_fields" : []
          },
          "deleted" : false,
          "accountId" : 36,
          "trackingId" : 15,
          "sidebar" : {
              "about" : {
                  "en" : "This is my about info",
                  "fr" : "This is my about info",
                  "es" : "Espagnole"
              },
              "social" : [ 
                  {
                      "name" : "",
                      "url" : ""
                  }, 
                  {
                      "name" : "",
                      "url" : ""
                  }, 
                  {
                      "name" : "",
                      "url" : ""
                  }
              ]
          }
      };
        return { pageProps, debate };
      }
    } else {
      return { pageProps };
    }
  }

  componentDidMount() {
    store.dispatch(
      verifyTokenRequest({
        role: "participant"
      })
    );
  }

  render() {
    const { Component, debate, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} debateServer={debate} />
      </Provider>
    );
  }
}

const { appWithTranslation } = i18n;

export default flowRight(
  withRedux(makeStore),
  appWithTranslation
)(Simpatico);