import React, { Component } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import { Box, Grommet } from "grommet";
import { Formik } from 'formik';

import Nav from "../components/nav";
import Thread from "../components/thread";
import { createPostRequest } from "../actions/post";

function createCommentList(posts) {
  const items = posts.map(post => {
    return (
      <div className="border-l pl-6">
        <div key={post.id} title={post.title} contents={post.contents} />
        {post.children && this.createCommentList(post.children)}
      </div>
    );
  });

  return posts;
}

class Home extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    console.log('store', store);
    return { custom: "custom" }; // you can pass some custom props to component from here
  }

  render() {
    console.log('thsi.props', this.props);
    return (
      <Grommet>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        </Head>

        <Nav />
        <Thread />
        <Box align="center" background="neutral-2">
          <Formik
            initialValues={{ title: "", contents: "", user: "Gary" }}
            validate={values => {
              const errors = {};
              if (!values.title) {
                errors.title = "Required";
              }
              if (!values.contents) {
                errors.contents = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              const { dispatch } = this.props;
              dispatch(
                createPostRequest({
                  title: values.title,
                  contents: values.contents,
                  user: values.user
                })
              );

              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {errors.title && touched.title && errors.title}
                <input
                  type="contents"
                  name="contents"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contents}
                />
                {errors.contents && touched.contents && errors.contents}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </Box>
      </Grommet>
    );
  }
}

export default connect(state => state)(Home);
