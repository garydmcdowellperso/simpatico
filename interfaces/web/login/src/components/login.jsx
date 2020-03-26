import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import { loginRequest } from "../actions/auth";


export default function Logn(props) {
  const dispatch = useDispatch();
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={require("../images/intelligence-collective1.png")} /> Log-in to your account
        </Header>
        <Form 
          size='large'               
          onSubmit={(e, {formData}) => {
            e.preventDefault();
                setSubmitting(true);
                console.log('here', formData)
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
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button 
              color='teal' 
              content='Login' 
              fluid 
              size='large' 
              disabled={isSubmitting} />
          </Segment>
        </Form>
        <Message>
          New to us ? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  )
}
