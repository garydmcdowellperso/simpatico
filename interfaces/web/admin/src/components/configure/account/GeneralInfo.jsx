import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Col,
    Form,
    FormGroup,  
    FormInput,
    Row
} from "shards-react";
import RingLoader from "react-spinners/RingLoader";
import LoadingOverlay from 'react-loading-overlay';

import { updateAccountInfoRequest } from "../../../actions/account"

function GeneralInfo(props) {
    const { account } = props;

    const [disable, setDisable] = useState(false)
    const [name, setName] = useState("")

    const dispatch = useDispatch();

    function handleOnSubmit() {
        dispatch(updateAccountInfoRequest(
            account.id,
            name
        ))
    }

    // const debate = useSelector(state => state.debate.debate);
    const error = useSelector(state => state.debate.error);
    const processing = useSelector(state => state.debate.processing);

    useEffect(() => {
        if (account) {
            // Transfer values to state
            setName(account.name);
        }
    }, [account]);

    useEffect(() => {
        // Error somewhere
    }, [error]);

    return (
        <>
        <LoadingOverlay
            active={processing}
            spinner={<RingLoader size={150} color={"#123abc"} />}
            text='Wheels turning, please wait...'
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
                                <label htmlFor="name">Account Name</label>
                            </Col>
                            <Col lg="9" md="9" sm="9" className="mb-9">
                                <FormInput
                                    id="name"
                                    name="name"
                                    placeholder="blahblah"
                                    value={name}
                                    onChange={(event) =>{
                                        setName(event.target.value);
                                    }}
                                />
                            </Col>
                        </Row>    
                    </FormGroup>
                    <Button type="button" onClick={() => {  handleOnSubmit() }} disabled={disable}>Update General Settings</Button>
                </Form>
            </CardBody>
        </Card>
        </LoadingOverlay>
        </>
    )
}

export default GeneralInfo;
