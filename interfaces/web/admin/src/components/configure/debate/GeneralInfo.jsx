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
} from 'shards-react';
import RingLoader from 'react-spinners/RingLoader';
import LoadingOverlay from 'react-loading-overlay';

import { createDebateRequest, updateGeneralInfoRequest } from "../../../actions/debate"

const englishChecked = false;

function GeneralInfo(props) {
    const { debate } = props;

    const [disable, setDisable] = useState(false)
    const [name, setName] = useState("")
    const [url, setURL] = useState("")
    const [debateType, setDebateType] = useState('public')

    const dispatch = useDispatch();

    function handleOnSubmit() {
        if (mode === 'create') {
            dispatch(createDebateRequest(
                name,
                url,
                debateType
            ))
        }
        if (mode === 'clone') {
            dispatch(createDebateRequest(
                name,
                url,
                debateType
            ))
        }
        if (mode === 'update') {
            const info = {
                name,
                url,
                debateType
            };

            dispatch(updateGeneralInfoRequest(
                debate.id,
                info
            ))
        }
    }

    const { error, processing, created } = useSelector(state => state.debate);

    useEffect(() => {
        // Debate exists, transition to edit
        if (debate) {
            // Transfer values to state
            setName(debate.name);
            setSlug(debate.url);
            setDebateType(debate.debateType);
        }
    }, [debate]);

    useEffect(() => {
        // Debate exists, transition to edit
        if (created === true) {
            // Go back to summary
            window.location.href = '/admin/configure';
        }
    }, [created]);

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
                                    placeholder="mydebate"
                                    value={name}
                                    onChange={(event) =>{
                                        setName(event.target.value);
                                        setURL(`${event.target.value}.simpatico.cloud`);
                                    }}
                                />
                            </Col>
                        </Row>    
                    </FormGroup>
                    <FormGroup>
                        <Row form>
                            <Col lg="3" md="3" sm="3" className="mb-3">
                                <label htmlFor="url">URL</label>
                            </Col>
                            <Col lg="9" md="9" sm="9" className="mb-9">
                                <FormInput
                                    id="url"
                                    name="url"
                                    placeholder="mydebate.simpatico.cloud"
                                    value={url}
                                    onChange={(event) =>{
                                        setURL(event.target.value);
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
