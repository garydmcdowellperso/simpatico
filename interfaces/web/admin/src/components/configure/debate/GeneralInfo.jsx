import React, { useState } from 'react';
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
import { useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";
import LoadingOverlay from 'react-loading-overlay';

import useForm from '../../../lib/useForm';
import { createDebateRequest } from "../../../actions/debate"

const englishChecked = false;

function GeneralInfo(props) {
    const [englishChecked, setCheckEnglish] = useState(false)
    const [frenchChecked, setCheckFrench] = useState(false)
    const [spanishChecked, setCheckSpanish] = useState(false)
    const [debateType, setDebateType] = useState('public')

    const dispatch = useDispatch();

    const stateSchema = {
        name: { value: '', error: '' },
        slug: { value: '', error: '' }
    };

    const validationStateSchema = {
        name: {
          required: true,
          validator: {
            regEx: /^[a-zA-Z0-9\.]+$/,
            error: 'Invalid name format.',
          },
        },
        slug: {
          required: true,
          validator: {
            regEx: /^[a-zA-Z]+$/,
            error: 'Invalid slug format.',
          },
        }
      };

    function onSubmitForm(state) {
        dispatch(createDebateRequest(
            state.name.value,
            state.slug.value,
            debateType,
            {
                english: englishChecked ? true : false,
                french: frenchChecked ? true :  false,
                spanish: spanishChecked ? true : false
            }
        ))
    }

    const { state, handleOnChange, handleOnSubmit, disable } = useForm(
        stateSchema,
        validationStateSchema,
        onSubmitForm
    );
    const debate = useSelector(state => state.debate.debate);
    const error = useSelector(state => state.debate.error);
    const processing = useSelector(state => state.debate.processing);

    useEffect(() => {
        // Debate exists, transition to edit
    }, [debate]);

    useEffect(() => {
        // Error somewhere
    }, [error]);

    const { mode } = props.mode;

    return (
        <>
        <LoadingOverlay
            active={processing}
            spinner={<RingLoader size={150} color={"#123abc"} />}
            text='Creating your new debate...'
        >
        <Card small className="h-100">
            <CardHeader className="border-bottom">
                <h6 className="m-0">General Info</h6>
            </CardHeader>
            <CardBody className="pt-0">
                <Form onSubmit={handleOnSubmit}>
                    <FormGroup>
                        <Row form>
                            <Col lg="3" md="3" sm="3" className="mb-3">
                                <label htmlFor="name">Debate Name</label>
                            </Col>
                            <Col lg="9" md="9" sm="9" className="mb-9">
                                <FormInput
                                    id="name"
                                    name="name"
                                    placeholder="mydebate.simpatico.com"
                                    value={state.name.value}
                                    onChange={handleOnChange}
                                />
                                {state.name.error && <p>{state.name.error}</p>}
                            </Col>
                        </Row>    
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col lg="3" md="3" sm="3" className="mb-3">
                                <label htmlFor="slug">Slug</label>
                            </Col>
                            <Col lg="9" md="9" sm="9" className="mb-9">
                                <FormInput
                                    id="slug"
                                    name="slug"
                                    placeholder="mydebate.simpatico.com/slug"
                                    value={state.slug.value}
                                    onChange={handleOnChange}
                                />
                            </Col>
                        </Row>    
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col lg="3" md="3" sm="3" className="mb-3">
                                <label htmlFor="^debatetype">Debate Type</label>
                            </Col>
                            <Col lg="9" md="9" sm="9" className="mb-9">
                                <FormSelect 
                                    id="debatetype"
                                    onChange={(event) =>{
                                        setDebateType(event.target.value);
                                    }}>
                                >
                                    {debateType === 'public' ? <option id="public" name="public" value="public" selected>Public</option> : <option id="public" name="public" value="public">Public</option> }
                                    {debateType === 'private' ? <option id="private" name="private" value="private" selected>Private</option> : <option id="private" name="private" value="private">Private</option> }
                                </FormSelect>
                            </Col>
                        </Row>    
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col lg="3" md="3" sm="3" className="mb-3">
                                <label htmlFor="languages">Lanuages</label>
                            </Col>
                            <Col lg="9" md="9" sm="9" className="mb-9">
                                <Row form>
                                    <Col lg="2" md="2" sm="2" className="mb-2">
                                        <FormCheckbox 
                                            id="english"
                                            name="english"
                                            checked={englishChecked}
                                            onChange={() =>{
                                                setCheckEnglish(!englishChecked)
                                            }}>
                                            English
                                        </FormCheckbox>
                                    </Col>
                                    <Col lg="2" md="2" sm="2" className="mb-2">
                                        <FormCheckbox 
                                            id="french"
                                            name="french"
                                            checked={frenchChecked}
                                            onChange={() =>{
                                                setCheckFrench(!frenchChecked)
                                            }}>
                                            French
                                        </FormCheckbox>
                                    </Col>
                                    <Col lg="2" md="2" sm="2" className="mb-2">
                                        <FormCheckbox 
                                            id="spanish"
                                            name="spanish"
                                            checked={spanishChecked}
                                            onChange={() =>{
                                                setCheckSpanish(!spanishChecked)
                                            }}>
                                            French
                                        </FormCheckbox>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>    
                    </FormGroup>
                    {mode === 'update' ?
                    <Button type="submit" disabled={disable}>Update General Settings</Button>
                    : <Button type="submit" disabled={disable}>Create Debate</Button>}
                </Form>
            </CardBody>
        </Card>
        </LoadingOverlay>
        </>
    )
}

export default GeneralInfo;
