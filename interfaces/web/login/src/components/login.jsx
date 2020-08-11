import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Grid, Header, Icon, Label, Image, Segment, Transition } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import flowRight from 'lodash/flowRight';

import { loginRequest } from "../actions/auth";
import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

function Login(props) {
  const { debate, t } = props;

  const dispatch = useDispatch();
  const [isSubmitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const { token } = useSelector(state => state.auth);
  const router = useRouter()

  useEffect(() => {
    // Animations
    setVisible(true)
  }, []);

  console.log('debate', debate)
  useEffect(() => {
    if (token) {
      // Cookie automatically set by server

      // Do we have a next to redirect to ?
      if (router.query && router.query.next) {
        window.location.href = `/${router.query.next}`;
      } else {
        // Redirect to home
        window.location.href = '/';
      }
    }
  }, [token]);

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Image src={require("../images/intelligence-collective1.png")} /> 
            </Grid.Column>            
            <Grid.Column width={11  }>
              {t('login')}
            </Grid.Column>   
          </Grid>
        </Header>
        <Transition visible={visible} animation='fade' duration={800}>
          <Form 
            size='large'               
            onSubmit={(e, {formData}) => {
              e.preventDefault();
                  setSubmitting(true);
                  dispatch(
                    loginRequest({
                      email: email,
                      password: password,
                      debateName: window.location.hostname
                    })
                  );

                  setTimeout(() => {
                    setSubmitting(false);
                  }, 400);
              }}
            >
            <Segment.Group>
              <Segment raised >
                <Form.Input 
                  fluid 
                  icon='user' 
                  iconPosition='left' 
                  placeholder={t('email')}
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder={t('password')}
                  type='password'
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value)
                  }}
                />
                <Button 
                  type="submit"
                  color='teal' 
                  fluid 
                  size='large' 
                  animated
                  disabled={isSubmitting}>
                    <Button.Content visible>{t('loginbutton')}</Button.Content>
                    <Button.Content hidden>
                      <Icon name='right arrow' />
                    </Button.Content>
                  </Button>
              </Segment>
              <Segment>
              <Grid columns={2}>
                  <Grid.Column floated='left' width={5}>
                    <Label as='a' basic  size='mini'>
                    {t('newtous')} 
                    <Link 
                      href="signup"
                      as="/login/signup">
                        <a href='#'>{t('signup')}</a>
                    </Link>
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
              {debate && debate.connection && debate.connection.google || true ?
                (<Button animated='vertical'>
                  <Button.Content hidden>{t('connect')}</Button.Content>
                  <Button.Content visible>
                    <Icon color='blue' name='facebook' />
                  </Button.Content>
                </Button>) : null
              } 
              {debate && debate.connection && debate.connection.linkedin || true?
                (<Button animated='vertical'>
                  <Button.Content hidden>{t('connect')}</Button.Content>
                  <Button.Content visible>
                    <Icon color='blue' name='linkedin' />
                  </Button.Content>
                </Button>) : null
              } 
              </Segment>
            </Segment.Group>
          </Form>
        </Transition>
      </Grid.Column>
    </Grid>
  )
}

export default flowRight(
  withTranslation(['common'])
)(Login);