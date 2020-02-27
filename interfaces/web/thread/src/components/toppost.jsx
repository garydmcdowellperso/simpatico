import React, { Component } from "react";
import { Box } from "grommet";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import PropTypes from "prop-types";

import { createPostRequest } from "../actions/post";

class TopPost extends Component {
  render() {
    return (
      <Box direction="row">
        <Box width="xlarge">
          <Formik
            initialValues={{ title: "", contents: "" }}
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
                  thread: localStorage.getItem("thread")
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
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <Form.Input
                    type="title"
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  {errors.title && touched.title && errors.title}
                </Form.Field>
                <Form.Field>
                  <Form.TextArea
                    type="textarea"
                    name="contents"
                    placeholder="contents"
                    value={values.contents}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.contents && touched.contents && errors.contents}
                </Form.Field>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    );
  }
}

TopPost.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(state => state)(TopPost);
