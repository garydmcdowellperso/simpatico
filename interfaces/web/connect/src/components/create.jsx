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
import { useDispatch, useSelector } from 'react-redux'
import flowRight from 'lodash/flowRight';
import { useRouter } from 'next/router'

import { createAccountRequest, forgottenPasswordReset } from "../actions/auth";
import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

function Create(props) {
  const { t } = props;
  const [visible, setVisible] = useState(false);

  const { sending } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    // Animations
    setVisible(true)

    // Resends sending to null
    dispatch(
      forgottenPasswordReset()
    );
  }, []);

  useEffect(() => {
    if (sending === false) {
      // Redirect to login
      router.push('/login/');
    }
  }, [sending]);

  const Footer = () => {
    return (
      <Segment>
        <Grid columns={2}>
            <Grid.Column floated='left' width={5}>
              <Label as='a' basic  size='mini'>
              {t('already')} <Link href="/connect/"><a href='#'>{t('connect')}</a></Link>
              </Label>
            </Grid.Column>
            <Grid.Column floated='right'  width={5}>
              <Label as='a' basic  size='mini'>
                <Link href="/connect/forgotten"><a href='#'>{t('forgotten')}</a></Link>
              </Label>
            </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Container textAlign='center'>{t('connectwith')}</Container>
          <Button animated='vertical'>
            <Button.Content hidden>{t('connect')}</Button.Content>
            <Button.Content visible>
              <Icon color='blue' name='facebook' />
            </Button.Content>
          </Button>
          <Button animated='vertical'>
            <Button.Content hidden>{t('connect')}</Button.Content>
            <Button.Content visible>
              <Icon color='blue' name='linkedin' />
            </Button.Content>
          </Button>
      </Segment>
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
                    {t('resetmessage')}
                    </Message>
                  </Grid.Column>  
                </Grid>
              </Segment>
            <Footer />
          </Segment.Group>
          ) : (
          <Formik
            initialValues={{ account: "", firstname: "", lastname: "", email: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.firstname) {
                errors.firstname = t('required');
              }
              if (!values.lastname) {
                errors.lastname = t('required');
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
                createAccountRequest(
                  values.account,
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
                <Segment.Group>
                  <Segment raised>
                    <Form.Field>
                      <Form.Input
                        fluid
                        name="account"
                        placeholder={t('account')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.account}
                        icon="user"
                      />
                      {errors.account && touched.account && errors.account}
                    </Form.Field>
                    <Form.Field>
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
                    </Form.Field>
                    <Form.Field>
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
                    </Form.Field>
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