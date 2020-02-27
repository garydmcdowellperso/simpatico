import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import { Formik } from "formik";

import { loginRequest } from "../actions/auth";

class Login extends PureComponent {
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo.png" /> Log-in to your account
          </Header>
          <Button
            color="google plus"
            fluid
            size="large"
            onClick={() => {
              window.location = "/api/login/google";
            }}
          >
            <Icon name="google plus" /> Google Plus
          </Button>
          <Formik
            initialValues={{ username: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.username) {
                errors.username = "Required";
              }
              if (!values.password) {
                errors.password = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              const { dispatch } = this.props;

              dispatch(
                loginRequest({
                  username: values.username,
                  password: values.password
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
                <Segment stacked>
                  <Form.Field>
                    <Form.Input
                      fluid
                      type="username"
                      name="username"
                      placeholder="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                      icon="user"
                    />
                    {errors.username && touched.username && errors.username}
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      fluid
                      type="password"
                      name="password"
                      placeholder="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      icon="lock"
                    />
                    {errors.password && touched.password && errors.password}
                  </Form.Field>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    color="teal"
                    fluid
                    size="large"
                  >
                    Submit
                  </Button>
                </Segment>
              </Form>
            )}
          </Formik>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(state => state)(Login);
