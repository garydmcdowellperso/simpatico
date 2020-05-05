import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router'

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Col,
    Form,
    FormGroup,  
    FormInput,
    FormSelect,
    FormTextarea,
    Row
} from "shards-react";
import RingLoader from "react-spinners/RingLoader";
import LoadingOverlay from 'react-loading-overlay';
import ReactCountryFlag from "react-country-flag"

import { fetchDebateRequest } from "../../../actions/debate";

import { createModuleRequest, fetchModuleRequest, updateModuleRequest } from "../../../actions/modules"

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}

const GeneralInfoModule = (props) => {
  const [titleEnglish, setTitleEnglish] = useState("")
  const [titleFrench, setTitleFrench] = useState("")
  const [titleSpanish, setTitleSpanish] = useState("")
  const [name, setName] = useState("")
  const [type, setType] = useState("thread")
  const [helpEnglish, setHelpEnglish] = useState("")
  const [helpFrench, setHelpFrench] = useState("")
  const [helpSpanish, setHelpSpanish] = useState("")
  const [version, setVersion] = useState("english")
  const [disable, setDisable] = useState(false)

  const { id, debateName, mode } = props;
  const dispatch = useDispatch();

  const module = useSelector(state => state.modules.module);
  const error = useSelector(state => state.modules.error);
  const processing = useSelector(state => state.modules.processing);
  const processing_update = useSelector(state => state.modules.processing_update);

  const debate = useSelector(state => state.debate.debate);

  console.log('debate', debate);

  useEffect(() => {
    if (mode === 'update') {
        // Fetch the page data
        dispatch(fetchModuleRequest(
            id,
        ))
    }
  }, []);

  useEffect(() => {
    console.log('error', error)
  }, [error]);

  useEffect(() => {
    if (!debate) {
        // We're here without loading the debate - go get it
        dispatch(fetchDebateRequest(debateName));
    }
  }, [debate]);

  useEffect(() => {
    // copy to local values
    console.log('module', module)
    if (module) {
        setTitleEnglish(module.title.en);
        setTitleFrench(module.title.fr);
        setTitleSpanish(module.title.es);
        setName(module.name);
        setType(module.moduleType);
        setHelpEnglish(module.help.en);
        setHelpFrench(module.help.fr);
        setHelpSpanish(module.help.es);
        setVersion('english')
    }
  }, [module]);

  const prevUpdating = usePrevious(processing_update)

  useEffect(() => {
    if (processing && mode === 'new' && !error) {
        // Redirect to configure
        Router.push(`/admin/debate?name=${debateName}`);
    }
  }, [processing]);


  useEffect(() => {
    if (!processing_update && prevUpdating && !error && !module) {
        // Redirect to configure
        Router.push(`/admin/debate?name=${debateName}`);
    }
  }, [processing_update]);

  return (
    <>
    <LoadingOverlay
        active={processing || processing_update}
        spinner={<RingLoader size={150} color={"#123abc"} />}
        text='Wheels turning, please wait...'
    >
    <Card small className="h-100">
        <CardHeader className="border-bottom">
            <h6 className="m-0">Module Info</h6>
        </CardHeader>
        <CardBody className="pt-0">
            <Form onSubmit={(e) => {
                e. preventDefault();

                const title = {
                    en: titleEnglish,
                    fr: titleFrench,
                    es: titleSpanish
                };
                const help = {
                    en: helpEnglish,
                    fr: helpFrench,
                    es: helpSpanish
                };

                if (mode === 'new') {
                    dispatch(createModuleRequest(
                        title,
                        debate.id,
                        type,
                        help,
                        name
                    ))
                }
                if (mode === 'update') {
                    dispatch(updateModuleRequest(
                        title,
                        id,
                        type,
                        help,
                        name
                    ))
                }
            }} >
                <FormGroup>
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="name">Module Name</label>
                        </Col>
                        <Col lg="9" md="9" sm="9" className="mb-9">
                            <FormInput
                                id="name"
                                name="tinametle"
                                placeholder="name"
                                value={name}
                                onChange={(event) =>{
                                    setName(event.target.value)
                                }}
                            />
                        </Col>
                    </Row>    
                </FormGroup>
                <FormGroup>
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="title">Module Title</label>
                        </Col>
                        <Col lg="9" md="9" sm="9" className="mb-9">
                            {version === 'english' ? (
                            <FormInput
                                id="title"
                                name="title"
                                placeholder="title"
                                value={titleEnglish}
                                onChange={(event) =>{
                                    setTitleEnglish(event.target.value)
                                }}
                            />) : null }
                            {version === 'french' ? (
                            <FormInput
                                id="title"
                                name="title"
                                placeholder="title"
                                value={titleFrench}
                                onChange={(event) =>{
                                    setTitleFrench(event.target.value)
                                }}
                            />) : null }
                            {version === 'spanish' ? (
                            <FormInput
                                id="title"
                                name="title"
                                placeholder="title"
                                value={titleSpanish}
                                onChange={(event) =>{
                                    setTitleSpanish(event.target.value)
                                }}
                            />) : null }
                        </Col>
                    </Row>    
                </FormGroup>
                <FormGroup>
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="type">Module Type</label>
                        </Col>
                        <Col lg="9" md="9" sm="9" className="mb-9">
                            <FormSelect 
                                id="type"
                                name="type"
                                onChange={(event) =>{
                                    setType(event.target.value)
                                }}>
                            >
                                <option id="thread" name="thread" value="thread" selected>Thread</option>
                            </FormSelect>
                        </Col>
                    </Row>    
                </FormGroup>
                <FormGroup>
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="help">Module Help</label>
                        </Col>
                        <Col lg="9" md="9" sm="9" className="mb-9">
                            {version === 'english' ? (
                            <FormTextarea
                                id="help"
                                name="help"
                                placeholder="help"
                                value={helpEnglish}
                                onChange={(event) =>{
                                    setHelpEnglish(event.target.value)
                                }}
                            />) : null }
                            {version === 'french' ? (
                            <FormTextarea
                                id="help"
                                name="help"
                                placeholder="help"
                                value={helpFrench}
                                onChange={(event) =>{
                                    setHelpFrench(event.target.value)
                                }}
                            />) : null }
                            {version === 'spanish' ? (
                            <FormTextarea
                                id="help"
                                name="help"
                                placeholder="help"
                                value={helpSpanish}
                                onChange={(event) =>{
                                    setHelpSpanish(event.target.value)
                                }}
                            />) : null }                            
                        </Col>
                    </Row>    
                </FormGroup>
                {mode === 'update' ?
                <Button type="submit" disabled={disable}>Update Module Settings</Button>
                : <Button type="submit" disabled={disable}>Create Module</Button>}
            </Form>
        </CardBody>
        <CardFooter>
            <Row>
                <Col lg="1" md="1" sm="1" className="mb-1">
                    {version === 'english' ? 
                    (
                        <ReactCountryFlag 
                            style={{
                                fontSize: '2em',
                                lineHeight: '2em',
                            }}
                            onClick={()=> {
                                setVersion('english')
                            }}
                            countryCode="GB" svg 
                        />
                    ) :
                    (
                        <ReactCountryFlag 
                            onClick={()=> {
                                setVersion('english')
                            }}
                            countryCode="GB" svg 
                        />
                    )
                    }
                </Col>
                <Col lg="1" md="1" sm="1" className="mb-1">
                {version === 'french' ? 
                (
                    <ReactCountryFlag 
                        style={{
                            fontSize: '2em',
                            lineHeight: '2em',
                        }}
                        onClick={()=> {
                            setVersion('french')
                        }}
                        countryCode="FR" svg 
                    />
                ) :
                (
                    <ReactCountryFlag 
                        onClick={()=> {
                            setVersion('french')
                        }}
                        countryCode="FR" svg 
                    />
                )
                }
                </Col>
                <Col lg="1" md="1" sm="1" className="mb-1">
                {version === 'spanish' ?
                ( 
                    <ReactCountryFlag 
                        style={{
                            fontSize: '2em',
                            lineHeight: '2em',
                        }}
                        onClick={()=> {
                            setVersion('spanish')
                        }}
                        countryCode="ES" svg 
                    />
                ) :
                (
                    <ReactCountryFlag 
                        onClick={()=> {
                            setVersion('spanish')
                        }}
                        countryCode="ES" svg 
                    />
                )
                }    
                </Col>
            </Row>
        </CardFooter>
    </Card>
    </LoadingOverlay>
    </>
  );
};

export default GeneralInfoModule;