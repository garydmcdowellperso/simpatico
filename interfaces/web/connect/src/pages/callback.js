import React, { Component } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { Grommet } from "grommet";
import { connect } from "react-redux";

import { callBackRequest } from "../actions/auth";

class Callback extends Component {
  static async getInitialProps(ctx) {
    // Do nothing, just don't get rendered static
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(callBackRequest(window.location.search));
  }

  render() {
    const {
      auth: { processing, token }
    } = this.props;

    if (token !== "") {
      window.location.href = `/thread`;
    }

    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
        </Head>
        <Grommet>{processing ? <p>Processing</p> : ""}</Grommet>
      </div>
    );
  }
}

Callback.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(state => state)(Callback);
