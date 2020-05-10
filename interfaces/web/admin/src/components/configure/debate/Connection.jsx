import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Col,
    Form,
    FormCheckbox,
    FormGroup,  
    FormInput,
    FormSelect,
    Row
} from "shards-react";
import RingLoader from "react-spinners/RingLoader";
import LoadingOverlay from 'react-loading-overlay';

import { updateConnectionRequest } from "../../../actions/debate"

const englishChecked = false;

function Connection(props) {
    const { debate } = props;

    const [disable, setDisable] = useState(false)
    const [firstname, setFirstName] = useState(true)
    const [lastname, setLastName] = useState(true)
    const [username, setUserName] = useState(true)
    const [email, setEmail] = useState(true)
    const [password, setPassword] = useState(true)
    const [google, setGoogle] = useState(false)
    const [linkedin, setLinkedIn] = useState(false)
    const [type1, setType1] = useState('')
    const [type1name, setType1Name] = useState('')
    const [type1active, setType1Active] = useState(false)

    const dispatch = useDispatch();

    function handleOnSubmit() {
        const connection = {
            firstname,
            lastname,
            username,
            email,
            password,
            google,
            linkedin,
            additional_fields: [
                {
                    type: type1,
                    name: type1name, 
                    active: type1active
                }
            ]
        }
        dispatch(updateConnectionRequest(
            debate.id,
            connection
        ))
    }

    // const debate = useSelector(state => state.debate.debate);
    const error = useSelector(state => state.debate.error);
    const processing = useSelector(state => state.debate.processing);

    useEffect(() => {
        // Debate exists, transition to edit
        console.log('debateHERE', debate)
        if (debate && debate.connection) {
            // Transfer values to state
            setFirstName(debate.connection.firstname);
            setLastName(debate.connection.lastname);
            setUserName(debate.connection.username);
            setEmail(debate.connection.email);
            setPassword(debate.connection.password);
            setGoogle(debate.connection.google);
            setLinkedIn(debate.connection.linkedin);

            debate.connection.additional_fields.map((field, idx) => {
                if (idx === 0) {
                    setType1(field.type);
                    setType1Name(field.name);
                    setType1Active(field.active);
                }
            });
        }
    }, [debate]);

    useEffect(() => {
        // Error somewhere
    }, [error]);

    return (
        <>
        <LoadingOverlay
            active={processing}
            spinner={<RingLoader size={150} color={"#123abc"} />}
            text='Creating your new debate...'
        >
        <Card small className="h-100">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Connection Info</h6>
            </CardHeader>
            <CardBody className="pt-0">
                <Form>
                    <FormGroup>
                        <Row form>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <label>Personal Info</label>
                            </Col>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                &nbsp;
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                <label>Social Media</label>
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                &nbsp;
                            </Col>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <label>Additional Fields</label>
                            </Col>
                        </Row>
                        <Row form>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <label htmlFor="firstname">First Name</label>
                            </Col>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <FormCheckbox
                                    id="firstname"
                                    name="firstname"
                                    checked={firstname}
                                    onChange={(event) => {
                                        setFirstName(!firstname);
                                    }}
                                />
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                <i class="fab fa-google-plus-g fa-2x"></i>
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                <FormCheckbox
                                    id="google"
                                    name="google"
                                    checked={google}
                                    onChange={(event) => {
                                        setGoogle(!google);
                                    }}
                                />
                            </Col>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <FormSelect
                                    id="type1"
                                    name="type1"
                                >
                                    <option value="text">Text</option>
                                </FormSelect>
                            </Col>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <FormInput
                                    id="type1name"
                                    name="type1name"
                                    value={type1name}
                                    placeholder="name"
                                />
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                <label htmlFor="type1active">Active?</label>
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                <FormCheckbox
                                    id="type1active"
                                    name="type1active"
                                    checked={type1active}
                                />
                            </Col>
                        </Row>    
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <label htmlFor="lastname">Last Name</label>
                            </Col>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <FormCheckbox
                                    id="lastname"
                                    name="lastname"
                                    checked={lastname}
                                    onChange={(event) =>{
                                        setLastName(!lastname);
                                    }}
                                />
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                <i class="fab fa-linkedin-in fa-2x"></i>
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                <FormCheckbox
                                    id="linkedin"
                                    name="linkedin"
                                    checked={linkedin}
                                    onChange={(event) => {
                                        setLinkedIn(!linkedin);
                                    }}
                                />
                            </Col>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <FormSelect
                                    id="type1"
                                    name="type1"
                                >
                                    <option value="text">Text</option>
                                </FormSelect>
                            </Col>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <FormInput
                                    id="type1name"
                                    name="type1name"
                                    value={type1name}
                                    placeholder="name"
                                />
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                <label htmlFor="type1active">Active?</label>
                            </Col>
                            <Col lg="1" md="1" sm="1" className="mb-1">
                                <FormCheckbox
                                    id="type1active"
                                    name="type1active"
                                    checked={type1active}
                                />
                            </Col>                        </Row>    
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <label htmlFor="username">Username</label>
                            </Col>
                            <Col lg="6" md="6" sm="6" className="mb-6">
                                <FormCheckbox
                                    id="username"
                                    name="username"
                                    checked={username}
                                    onChange={(event) =>{
                                        setUserName(!username);
                                    }}
                                />
                            </Col>
                        </Row>    
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <label htmlFor="email">Email (mandatory)</label>
                            </Col>
                            <Col lg="6" md="6" sm="6" className="mb-6">
                                <FormCheckbox
                                    id="email"
                                    name="email"
                                    readOnly
                                    checked={email}
                                />
                            </Col>
                        </Row>    
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col lg="2" md="2" sm="2" className="mb-2">
                                <label htmlFor="password">Password (mandatory)</label>
                            </Col>
                            <Col lg="6" md="6" sm="6" className="mb-6">
                                <FormCheckbox
                                    id="password"
                                    name="password"
                                    readOnly
                                    checked={password}
                                />
                            </Col>
                        </Row>    
                    </FormGroup>
                    <Button 
                        type="button" 
                        onClick={() => {
                            handleOnSubmit();
                        }}
                        disabled={disable}
                    >Update Connection Settings</Button>
                </Form>
            </CardBody>
        </Card>
        </LoadingOverlay>
        </>
    )
}

export default Connection;
