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

import { createDebateRequest, updateGeneralInfoRequest } from "../../../actions/debate"

const englishChecked = false;

function GeneralInfo(props) {
    const { debate } = props;

    const [disable, setDisable] = useState(false)
    const [name, setName] = useState("")
    const [slug, setSlug] = useState("")
    const [debateType, setDebateType] = useState('public')

    const dispatch = useDispatch();

    function handleOnSubmit() {
        if (mode === 'create') {
            dispatch(createDebateRequest(
                name,
                slug,
                debateType
            ))
        }
        if (mode === 'clone') {
            dispatch(createDebateRequest(
                name,
                slug,
                debateType
            ))
        }
        if (mode === 'update') {
            const info = {
                name,
                slug,
                debateType
            };

            dispatch(updateGeneralInfoRequest(
                debate.id,
                info
            ))
        }
    }

    // const debate = useSelector(state => state.debate.debate);
    const error = useSelector(state => state.debate.error);
    const processing = useSelector(state => state.debate.processing);

    useEffect(() => {
        // Debate exists, transition to edit
        if (debate) {
            // Transfer values to state
            setName(debate.name);
            setSlug(debate.slug);
            setDebateType(debate.debateType);
        }
    }, [debate]);

    useEffect(() => {
        // Error somewhere
    }, [error]);

    const { mode } = props;
    let text = 'Creating your debate...';

    if (mode === 'update') {
        text = 'Updating your debate..';
    }
    if (mode === 'clone') {
        text = 'Cloning your debate...';
    }
    return (
        <>
        <LoadingOverlay
            active={processing}
            spinner={<RingLoader size={150} color={"#123abc"} />}
            text={text}
        >
        <Card small className="h-100">
            <CardHeader className="border-bottom">
                <h6 className="m-0">General Info</h6>
            </CardHeader>
            <CardBody className="pt-0">
                <Form>
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
                                    value={name}
                                    onChange={(event) =>{
                                        setName(event.target.value);
                                    }}
                                />
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
                                    value={slug}
                                    onChange={(event) =>{
                                        setSlug(event.target.value);
                                    }}
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
                    {mode === 'update' ?
                    <Button type="button" onClick={() => {  handleOnSubmit() }} disabled={disable}>Update General Settings</Button>
                    : <Button type="button" onClick={() => {  handleOnSubmit() }} disabled={disable}>Create Debate</Button>}
                </Form>
            </CardBody>
        </Card>
        </LoadingOverlay>
        </>
    )
}

export default GeneralInfo;
