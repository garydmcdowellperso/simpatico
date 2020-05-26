import React, { useEffect, useState } from 'react'
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

import { loginRequest } from "../actions/auth";


export default function Logn({ debate }) {
  const dispatch = useDispatch();
  const [isSubmitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      console.log('token', token);

      // Put this into localStorage for the other apps
      localStorage.setItem("token", token);

      // Cookie automatically set by server

      // Redirect to home
      window.location.href = '/';
    }
  }, [token]);

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={require("../images/intelligence-collective1.png")} /> Log-in to your account
        </Header>
        {debate.connection.google ?
        (<Button
            color="google plus"
            fluid
            size="small"
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
            size="small"
            onClick={() => {
              window.location = "/api/login/linkedin";
            }}
          >
            <Icon name="linkedin" /> LinkedIn
          </Button> ) : null}    
        <Form 
          size='large'               
          onSubmit={(e, {formData}) => {
            e.preventDefault();
                setSubmitting(true);
                dispatch(
                  loginRequest({
                    email: email,
                    password: password
                  })
                );

                setTimeout(() => {
                  setSubmitting(false);
                }, 400);
            }}
          >
          <Segment stacked>
            <Form.Input 
              fluid 
              icon='user' 
              iconPosition='left' 
              placeholder='E-mail address'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />

            <Button 
              type="submit"
              color='teal' 
              content='Login' 
              fluid 
              size='large' 
              disabled={isSubmitting} />
          </Segment>
        </Form>
        <Message>
          New to us ? <Link href="/login/signup"><a href='#'>Sign Up</a></Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}
