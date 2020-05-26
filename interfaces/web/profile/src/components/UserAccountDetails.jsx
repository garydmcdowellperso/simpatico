import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import { useDispatch } from "react-redux";
import flowRight from 'lodash/flowRight';

import nextI18NextInstance from '../../i18n';
import { getCurrentLang } from '../lib/utils';

const { withTranslation } = nextI18NextInstance;

import Popup from "./Popup";

import { deleteUser, updateUserInfo } from "../actions/auth";

const invalid = {
  color: '#dc3545', 
  fontSize: '80%', 
  marginTop: '.25rem'
};

function UserAccountDetails(props) {
  const [id, setId] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [avatar, setAvatar] = useState("")
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({ password: '' })

  const { userDetails, t }  = props;
  const dispatch = useDispatch();

  useEffect(() => { // Fire once we get user data
    if (userDetails) {
      setId(userDetails.id)
      setFirstName(userDetails.firstName)
      setLastName(userDetails.lastName)
      setEmail(userDetails.email)
      setBio(userDetails.bio)
      setAvatar(userDetails.avatar)
    }
  }, [userDetails]);

  function toggle() {
    setConfirmDelete(!confirmDelete);
  }

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{t('profile')}</h6>
      </CardHeader>
      {userDetails ? (
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">First Name</label>
                    <FormInput
                      id="feFirstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(event) => {
                        setFirstName(event.target.value)
                      }}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Last Name</label>
                    <FormInput
                      id="feLastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(event) => {
                        setLastName(event.target.value)
                      }}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmail">Email</label>
                    <FormInput
                      type="email"
                      id="feEmail"
                      placeholder="Email Address"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value)
                      }}
                      autoComplete="email"
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Password */}
                  <Col md="6" className="form-group">
                    <label htmlFor="password">Password</label>
                    <FormInput
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => {
                        setErrors({
                          password: ''
                        })

                        setPassword(event.target.value)

                        console.log('password', password)
                        console.log('confirmPassword', confirmPassword)

                        if (confirmPassword) {
                          if (confirmPassword !== event.target.value) {
                            setErrors({
                              password: (<div style={invalid}>Passwords must match</div>)
                            })
                          }
                        }
                      }}
                      autoComplete="current-password"
                    />
                    {errors.password}
                  </Col>
                  <Col md="6" className="form-group">
                    <label htmlFor="confirm">Confirm Password</label>
                    <FormInput
                      type="password"
                      id="confirm"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(event) => {
                        setErrors({
                          password: ''
                        })

                        setConfirmPassword(event.target.value)

                        console.log('password', password)
                        console.log('confirmPassword', confirmPassword)
                        if (password) {
                          if (event.target.value !== password) {
                            setErrors({
                              password: (<div style={invalid}>Passwords must  match</div>)
                            })
                          }
                        }
                      }}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Bio */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Bio</label>
                    <FormTextarea 
                      id="bio" 
                      rows="5" 
                      value={bio}
                      onChange={(event) => {
                        setBio(event.target.value)
                      }}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* avatar */}
                  <Col md="8" className="form-group">
                    <label htmlFor="avatar">Avatar</label>
                    <FormInput
                      id="avatar"
                      placeholder="Avatar"
                      value={avatar}
                      onChange={(event) => {
                        setAvatar(event.target.value)
                      }}
                    />
                  </Col>
                  <Col md="4" className="form-group">
                    <img
                      className="rounded-circle"
                      src={avatar}
                      alt={firstName}
                      width="110"
                    />
                  </Col>
                </Row>
                <Row form>
                  <Col md="10" className="form-group">
                    <Button 
                      theme="accent" 
                      onClick={() => {
                        if (password && !confirmPassword) {
                          setErrors({
                            password: (<div style={invalid}>Passwords must  match</div>)
                          })

                          return
                        }
                        if (!password && confirmPassword) {
                          setErrors({
                            password: (<div style={invalid}>Passwords must  match</div>)
                          })

                          return
                        }

                        const userInfo = {
                          id,
                          firstName,
                          lastName,
                          email,
                          bio,
                          avatar,
                          password,
                          confirmPassword
                        };

                        dispatch(updateUserInfo(userInfo));
                      }}>Update Account</Button>
                  </Col>
                  <Col md="2" className="form-group">
                    <Button 
                      theme="warning"
                      onClick={() => {
                        toggle()
                      }}>Delete Account</Button>
                  </Col>
                  <Popup 
                    header='Confirm Delete'
                    action={() => {
                        dispatch(deleteUser(id));
                    }}
                    body='This will remove all your personal data but anonymise your contributions'
                    confirmDelete={confirmDelete} 
                    toggle={toggle} />
                </Row>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>) : null }
    </Card>
  )
}

export default flowRight(
  withTranslation(['common'])
)(UserAccountDetails);
