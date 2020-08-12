import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Segment,
  Transition
} from "semantic-ui-react";
import { Formik } from "formik";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import flowRight from 'lodash/flowRight';

import { createUserRequest,  forgottenPasswordReset } from "../actions/auth";
import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

function Create(props) {
  const { debate, t } = props;
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const { sending } = useSelector(state => state.auth);

  useEffect(() => {
    // Animations
    setVisible(true)

    dispatch(
      forgottenPasswordReset()
    );
  }, []);

  const Footer = () => {
    return (
      <>
        <Segment>
          <Grid columns={2}>
              <Grid.Column floated='left' width={5}>
                <Label as='a' basic  size='mini'>
                {t('already')} <Link href="/login/"><a href='#'>{t('connect')}</a></Link>
                </Label>
              </Grid.Column>
              <Grid.Column floated='right'  width={5}>
                <Label as='a' basic  size='mini'>
                  <Link href="/login/forgotten"><a href='#'>{t('forgotten')}</a></Link>
                </Label>
              </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <Container textAlign='center'>{t('connectwith')}</Container>
          {debate.connection.google || true ?
            (<Button animated='vertical'>
              <Button.Content hidden>{t('connect')}</Button.Content>
              <Button.Content visible>
                <Icon color='blue' name='facebook' />
              </Button.Content>
            </Button>) : null
          } 
          {debate.connection.linkedin || true?
            (<Button animated='vertical'>
              <Button.Content hidden>{t('connect')}</Button.Content>
              <Button.Content visible>
                <Icon color='blue' name='linkedin' />
              </Button.Content>
            </Button>) : null
          } 
        </Segment>
      </>
    )
  }

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Image src={require("../images/intelligence-collective1.png")} /> 
            </Grid.Column>            
            <Grid.Column width={11  }>
              {t('createaccount')}
            </Grid.Column>   
          </Grid>
        </Header>
        <Transition visible={visible} animation='fade' duration={800}>
        {sending === false ? (
            <Segment.Group>
              <Segment raised >
                <Grid>
                  <Grid.Column>
                    <Message>
                    {t('createmessage')}
                    </Message>
                  </Grid.Column>  
                </Grid>
              </Segment>
            <Footer />
          </Segment.Group>
        ) : (
          <Formik
            initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
            validate={values => {
              const errors = {};
              if (debate && debate.connection.firstname) {
                if (!values.firstname) {
                  errors.firstname = t('required');
                }
              }
              if (debate && debate.connection.lastname) {
                if (!values.lastname) {
                  errors.lastname = t('required');
                }
              }
              if (!values.email) {
                errors.email = t('required');
              }
              if (!values.password) {
                errors.password = t('required');
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(
                createUserRequest(
                  values.firstname,
                  values.lastname,
                  values.email,
                  values.password,
                  debate.id,
                  debate.accountId
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
                <Segment.Group>
                  <Segment raised>
                    {debate.connection.firstname ?
                    (<Form.Field>
                      <Form.Input
                        fluid
                        type="firstname"
                        name="firstname"
                        placeholder={t('firstname')}
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
                        placeholder={t('lastname')}
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
                        placeholder={t('email')}
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
                        placeholder={t('password')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        icon="lock"
                      />
                      {errors.password && touched.password && errors.password}
                    </Form.Field>
                    {debate.connection.additional_fields.map((field, idx) => {
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
                  <Footer />
                </Segment.Group>
              </Form>
            )}
          </Formik>)}
        </Transition>
      </Grid.Column>
    </Grid>
  );
}

export default flowRight(
  withTranslation(['common'])
)(Create);