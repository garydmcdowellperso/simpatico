import React, { Component } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import { Grommet } from "grommet";
import PropTypes from "prop-types";

import SlideOutSidebar from "../components/slideoutsidebar";
import { fetchPostsForModule } from "../actions/post";
import { fetchModuleRequest } from "../actions/module";

import 'react-flags-select/css/react-flags-select.css';

class Home extends Component {
  static async getInitialProps({ ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  componentDidMount() {
    const { dispatch } = this.props;    
    const module = localStorage.getItem("module");

    if (!module) {
      return
    }
    
    dispatch(
      fetchPostsForModule(module, 1)
    );

    dispatch(
      fetchModuleRequest(module)
    );
  }

  render() {
    const { auth: { isValidToken } } = this.props;

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
          <SlideOutSidebar isValidToken={isValidToken} />
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
