import React, { useEffect, useState } from 'react'
import { Button, Form, Divider, Grid, Header, Icon, Input, Label, Message, Image, Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { changePasswordRequest, changePasswordVerifyTokenRequest,  forgottenPasswordReset } from "../actions/auth";

const getUrlParameter = name => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

export default function ChangePassword({ debate }) {
  const dispatch = useDispatch();
  const [isSubmitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [validURL, setValidURL] = useState(true);
  const [verifying, setVerifying] = useState(false);

  const { sending, sent, isValidToken, token } = useSelector(state => state.auth);
  const router = useRouter()
  
  useEffect(() => {
    // Clear out any state
    dispatch(
      forgottenPasswordReset()
    );

    // Verify url is ok and token is good
    if (window && !window.location.search) {
      // Not a valid URL
      setValidURL(false);
    }
    if (window && window.location.search) {
      if (!window.location.search.includes("email") || !window.location.search.includes("token")) {
        // Not a valid URL
        setValidURL(false);
      } else {
        setVerifying(true);
        dispatch(
          changePasswordVerifyTokenRequest(getUrlParameter("email"), getUrlParameter("token"))
        );    
      }
    }
  }, []);

  useEffect(() => {
    if (isValidToken === true) {
      setVerifying(false);
    }
  }, [isValidToken]);

  useEffect(() => {
    if (token) {
      // Put this into localStorage for the other apps
      localStorage.setItem("token", token);

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

  const Footer = () => (
    <Segment>
      <Grid columns={2}>
        <Grid.Column floated='left' width={5}>
          <Label as='a' basic  size='mini'>
            Already have an account? <Link href="/login/"><a href='#'>Connect</a></Link>
          </Label>
        </Grid.Column>
        <Grid.Column floated='right'  width={5}>
          <Label as='a' basic  size='mini'>
            <Link href="/login/forgotten"><a href='#'>Forgotten password</a></Link>
          </Label>
        </Grid.Column>
      </Grid>
    </Segment>
  )

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Grid columns={2}>
            <Grid.Column width={4}>
              <Image src={require("../images/intelligence-collective1.png")} /> 
            </Grid.Column>            
            <Grid.Column width={8}>
              Change Password
            </Grid.Column>   
          </Grid>
        </Header>
        <Form 
          size='large'               
          onSubmit={e => {
            if (!password) {
              setErrors({
                password: "Required"
              });

              return;
            }
            if (!confirmpassword) {
              setErrors({
                confirmpassword: "Required"
              });

              return;
            }
            if (confirmpassword !== password) {
              setErrors({
                common: "Not the same"
              });

              return;
            }

            e.preventDefault();
                setSubmitting(true);
                dispatch(
                  changePasswordRequest({
                    email: getUrlParameter("email"),
                    password: password,
                    debateName: window.location.hostname,
                    token: getUrlParameter("token")
                  })
                );

                setTimeout(() => {
                  setSubmitting(false);
                }, 400);
            }}
          >
            {isValidToken ===  false ? (
                <Segment.Group>
                <Segment raised >
                  <Grid>
                    <Grid.Column>
                      <Message>
                      We cannot find this change password request. Maybe you have let your request expipre (24h) or you have requested another change of password (only one valid at a time)
                      </Message>
                    </Grid.Column>  
                  </Grid>
                </Segment>
                <Footer />
              </Segment.Group>            
            ) :
            verifying ? (
            <Segment.Group>
              <Segment raised >
                <Grid>
                  <Grid.Column>
                    <Message>
                    Verifying request
                    </Message>
                  </Grid.Column>  
                </Grid>
                <Divider hidden />
                <Button 
                  type="submit"
                  color='teal' 
                  fluid 
                  size='large' 
                  animated
                  disabled={isSubmitting}>
                    <Button.Content >
                      <Icon loading name='spinner' />
                    </Button.Content>  
                </Button>
              </Segment>
            <Footer />
          </Segment.Group>
          ) :     
          validURL ? (
          <Segment.Group>
            <Segment raised >
              {errors.common ? (      
                <Label basic color='red' pointing>
                  {errors.common}
                  </Label>) : null}

              <Form.Field inline>
                <Input 
                  fluid 
                  icon='eye' 
                  iconPosition='left' 
                  label={{ icon: 'asterisk' }}
                  labelPosition='right corner'
                  placeholder='password'
                  type='password'
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value)
                    setErrors({})
                  }}
                />
                {errors.password ? (      
                  <Label basic color='red' pointing>
                    Please enter a value
                    </Label>) : null}
              </Form.Field>
              <Divider hidden />
              <Form.Field inline>
                <Input 
                  fluid 
                  icon='eye' 
                  iconPosition='left' 
                  label={{ icon: 'asterisk' }}
                  labelPosition='right corner'
                  placeholder='Confirm password'
                  type='password'
                  value={confirmpassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value)
                    setErrors({})
                  }}
                />
                {errors.email ? (      
                  <Label basic color='red' pointing>
                    Please enter a value
                    </Label>) : null}
              </Form.Field>
              <Divider hidden />
              <Button 
                type="submit"
                color='teal' 
                content='Login' 
                fluid 
                size='large' 
                animated
                disabled={isSubmitting}>
                  {!sending ?
                  (
                    <>
                    <Button.Content visible>Ok</Button.Content>
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
                    Invalid request
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
