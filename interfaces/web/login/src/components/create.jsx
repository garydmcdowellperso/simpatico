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

function Create({ debate }) {
  console.log('debate', debate)
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
        {debate.connection.google ?
        (<Button
            color="google plus"
            fluid
            size="large"
            onClick={() => {
              window.location = "/api/login/google";
            }}
          >
            <Icon name="google plus" /> Google Plus
          </Button> ) : null}    
        {debate.connection.linkedin ?
        (<Button
            color="linkedin"
            fluid
            size="large"
            onClick={() => {
              window.location = "/api/login/linkedin";
            }}
          >
            <Icon name="linkedin" /> LinkedIn
          </Button> ) : null}   
        <Formik
          initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
          validate={values => {
            const errors = {};
            if (debate && debate.connection.firstname) {
              if (!values.firstname) {
                errors.firstname = "Required";
              }
            }
            if (debate && debate.connection.lastname) {
              if (!values.lastname) {
                errors.lastname = "Required";
              }
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

            // Redirect to login
            window.location.href = "/login/";
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
                {debate.connection.firstname ?
                (<Form.Field>
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
                </Form.Field>) : null }
                {debate.connection.lastname ?
                (<Form.Field>
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
                </Form.Field>) : null}
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
                {debate.connection.additional_fields.map((field, idx) => {
                  console.log('field', field)
                    if (field.active) {
                      (<Form.Field>
                        {field.text === 'text' ?
                        (<Form.Input
                          fluid
                          name={field.name}
                          placeholder={field.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values[field.name]}
                          icon="lock"
                        />) : null}
                      </Form.Field>)
                    }
                })}
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
          Already have an account? <Link href="/login/"><a>Connect</a></Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default Create;
