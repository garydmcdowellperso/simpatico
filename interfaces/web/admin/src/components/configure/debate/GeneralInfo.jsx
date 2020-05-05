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

import { createDebateRequest } from "../../../actions/debate"

const englishChecked = false;

function GeneralInfo(props) {
    const { debate } = props;

    console.log('debate', debate);
    const [disable, setDisable] = useState(false)
    const [name, setName] = useState("")
    const [slug, setSlug] = useState("")
    const [englishChecked, setCheckEnglish] = useState(false)
    const [frenchChecked, setCheckFrench] = useState(false)
    const [spanishChecked, setCheckSpanish] = useState(false)
    const [debateType, setDebateType] = useState('public')

    const dispatch = useDispatch();

    function handleOnSubmit() {
        dispatch(createDebateRequest(
            name,
            slug,
            debateType,
            {
                english: englishChecked ? true : false,
                french: frenchChecked ? true :  false,
                spanish: spanishChecked ? true : false
            }
        ))
    }

    // const debate = useSelector(state => state.debate.debate);
    const error = useSelector(state => state.debate.error);
    const processing = useSelector(state => state.debate.processing);

    useEffect(() => {
        // Debate exists, transition to edit
        console.log('debate changed',debate)
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
    console.log('mode', props);
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
