import React, { useEffect, useState } from 'react'
import { Button, Form, Divider, Grid, Header, Icon, Input, Label, Message, Image, Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import flowRight from 'lodash/flowRight';

import { forgottenPasswordReset, forgottenPasswordRequest } from "../actions/auth";
import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

function Password(props) {
  const { t } = props;

  const dispatch = useDispatch();
  const [isSubmitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const { sending, sent } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(
      forgottenPasswordReset()
    );
  }, []);

  const Footer = () => {
    return (
      <Segment>
      <Grid columns={2}>
        <Grid.Column floated='left' width={5}>
          <Label as='a' basic  size='mini'>
          {t('newtous')} <Link href="/connect/signup"><a href='#'>{t('signup')}</a></Link>
          </Label>
        </Grid.Column>
        <Grid.Column floated='right'  width={5}>
            <Label as='a' basic  size='mini'>
            {t('already')}  <Link href="/connect/"><a href='#'>{t('connect')} </a></Link>
            </Label>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Image src={require("../images/intelligence-collective1.png")} /> 
            </Grid.Column>            
            <Grid.Column width={8}>
            {t('resetpassword')}
            </Grid.Column>   
          </Grid>
        </Header>
        <Form 
          size='large'               
          onSubmit={e => {
            if (!email) {
              setErrors({
                email: t('required')
              });

              return;
            }

            e.preventDefault();
                setSubmitting(true);
                dispatch(
                  forgottenPasswordRequest({
                    email: email
                  })
                );

                setTimeout(() => {
                  setSubmitting(false);
                }, 400);
            }}
          >
          {!sent ? (
          <Segment.Group>
            <Segment raised >
              <Form.Field inline>
                <Input 
                  fluid 
                  icon='user' 
                  iconPosition='left' 
                  label={{ icon: 'asterisk' }}
                  labelPosition='right corner'
                  placeholder={t('email')}
                  type='email'
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    setErrors({})
                  }}
                />
                {errors.email ? (      
                  <Label basic color='red' pointing>
                    {t('required')}
                    </Label>) : null}
              </Form.Field>
              <Divider hidden />
              <Button 
                type="submit"
                color='teal' 
                fluid 
                size='large' 
                animated
                disabled={isSubmitting}>
                  {!sending ?
                  (
                    <>
                    <Button.Content visible>{t('ok')}</Button.Content>
                    <Button.Content hidden>
                      <Icon name='right arrow' />
                    </Button.Content>  
                    </>
                  ) :
                  (
                    <Button.Content >
                      <Icon loading name='spinner' />
                    </Button.Content>  
                  )
                  }
                </Button>
            </Segment>
            <Footer />
          </Segment.Group>
          ) : (
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
          )
          }
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default flowRight(
  withTranslation(['common'])
)(Password);
