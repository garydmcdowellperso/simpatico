import React, { Component } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import { Grommet } from "grommet";
import PropTypes from "prop-types";

import SlideOutSidebar from "../components/slideoutsidebar";
import { fetchUserInfo } from "../actions/auth";
import { fetchPostsForThread } from "../actions/post";

class Home extends Component {
  static async getInitialProps({ ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  componentDidUpdate(prevProps) {
    const {
      auth: { isValidToken, firstName, lastName, email, token },
      dispatch
    } = this.props;

    if (!prevProps.auth.isValidToken && isValidToken) {
      // Transfer to local storage
      localStorage.setItem("token", token);
      history.pushState(
        {
          id: "homepage"
        },
        "Home",
        "https://f84bf21a.ngrok.io/"
      );
      dispatch(fetchUserInfo());
      dispatch(fetchPostsForThread(localStorage.getItem("thread")));
    }

    if (!prevProps.auth.firstName && firstName) {
      // Transfer to local storage
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
    }
  }

  render() {
    const {
      auth: { isValidToken }
    } = this.props;

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
        <Grommet>
          {isValidToken ? <SlideOutSidebar /> : <p>Processing</p>}
        </Grommet>
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(state => state)(Home);
