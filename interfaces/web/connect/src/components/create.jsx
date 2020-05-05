import React, { PureComponent } from "react";
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
import { Formik } from "formik";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";

import { createAccountRequest } from "../actions/auth";

function Create(props) {
  const dispatch = useDispatch();

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={require("../images/intelligence-collective1.png")} /> Create an account
        </Header>
        <Formik
          initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
          validate={values => {
            const errors = {};
            if (!values.firstname) {
              errors.firstname = "Required";
            }
            if (!values.lastname) {
              errors.lastname = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(
              createAccountRequest(
                values.firstname,
                values.lastname,
                values.email,
                values.password
              )
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
                    type="firstname"
                    name="firstname"
                    placeholder="firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                    icon="user"
                  />
                  {errors.firstname && touched.firstname && errors.firstname}
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    fluid
                    type="lastname"
                    name="lastname"
                    placeholder="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    icon="user"
                  />
                  {errors.lastname && touched.lastname && errors.lastname}
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    fluid
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    icon="user"
                  />
                  {errors.email && touched.email && errors.email}
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
          Already have an account? <Link href="/connect/"><a>Connect</a></Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Create;
