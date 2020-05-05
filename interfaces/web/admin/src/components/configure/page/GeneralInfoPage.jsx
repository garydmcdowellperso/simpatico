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
    Row
} from "shards-react";
import RingLoader from "react-spinners/RingLoader";
import LoadingOverlay from 'react-loading-overlay';
import ReactCountryFlag from "react-country-flag"


// The editor core
import Editor from "@react-page/editor";
import "@react-page/core/lib/index.css"; // we also want to load the stylesheets
// Require editor ui stylesheet
import "@react-page/ui/lib/index.css";

// Load some exemplary plugins:
import slate from "@react-page/plugins-slate"; // The rich text area plugin
import "@react-page/plugins-slate/lib/index.css"; // Stylesheets for the rich text area plugin
import background from "@react-page/plugins-background"; // A plugin for background images
import "@react-page/plugins-background/lib/index.css"; // Stylesheets for  background layout plugin
import image from "@react-page/plugins-image"; // A plugin for background images
import "@react-page/plugins-image/lib/index.css"; // Stylesheets for  background layout plugin
import video from "@react-page/plugins-video"; // A plugin for background images
import "@react-page/plugins-video/lib/index.css"; // Stylesheets for  background layout plugin
import spacer from "@react-page/plugins-spacer"; // A plugin for background images
import "@react-page/plugins-spacer/lib/index.css"; // Stylesheets for  background layout plugin


import { createPageRequest, fetchPageRequest, updatePageRequest } from "../../../actions/pages"
import defaultContentEnglish from "./defaultContentEnglish"
import defaultContentFrench from "./defaultContentFrench"
import defaultContentSpanish from "./defaultContentSpanish"

// Define which plugins we want to use. We only have slate and background available, so load those.
const plugins = {
  content: [slate(), image, spacer, video], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
  layout: [background({ defaultPlugin: slate() })] // Define plugins for layout cells
};

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
}

const GeneralInfoPage = (props) => {
  const [editorValueEnglish, setEditorValueEnglish] = useState(defaultContentEnglish);
  const [editorValueFrench, setEditorValueFrench] = useState(defaultContentFrench);
  const [editorValueSpanish, setEditorValueSpanish] = useState(defaultContentSpanish);
  const [name, setName] = useState("")
  const [type, setType] = useState("internal")
  const [url, setUrl] = useState("")
  const [version, setVersion] = useState("english")
  const [disable, setDisable] = useState(false)

  const { id, debateName, mode } = props;
  const dispatch = useDispatch();

  const page = useSelector(state => state.pages.page);
  const error = useSelector(state => state.pages.error);
  const processing = useSelector(state => state.pages.processing);
  const processing_update = useSelector(state => state.pages.processing_update);

  useEffect(() => {
    if (mode === 'update') {
        // Fetch the page data
        dispatch(fetchPageRequest(
            id,
        ))
    }
  }, []);

  useEffect(() => {
    console.log('error', error)
  }, [error]);

  useEffect(() => {
    // copy to local values
    console.log('page', page)
    if (page) {
        setName(page.name);
        setType(page.type);
        setUrl(page.url);
        setEditorValueEnglish(page.languages.en);
        setEditorValueFrench(page.languages.fr);
        setEditorValueSpanish(page.languages.es);
        setVersion('english')
    }
  }, [page]);

  const prevUpdating = usePrevious(processing_update)

  useEffect(() => {
    if (processing && mode === 'new' && !error) {
        // Redirect to configure
        Router.push(`/admin/debate?name=${debateName}`);
    }
  }, [processing]);


  useEffect(() => {
    console.log('processing_update', processing_update)
    console.log('prevUpdating', prevUpdating)
    if (!processing_update && prevUpdating && !error && !page) {
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
            <h6 className="m-0">General Info</h6>
        </CardHeader>
        <CardBody className="pt-0">
            <Form onSubmit={(e) => {
                e. preventDefault();

                const languages = {
                    en: editorValueEnglish,
                    fr: editorValueFrench,
                    es: editorValueSpanish
                };

                if (mode === 'new') {
                    dispatch(createPageRequest(
                        name,
                        id,
                        type,
                        url,
                        languages
                    ))
                }
                if (mode === 'update') {
                    dispatch(updatePageRequest(
                        name,
                        id,
                        type,
                        url,
                        languages
                    ))
                }
            }} >
                <FormGroup>
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="name">Page Name</label>
                        </Col>
                        <Col lg="9" md="9" sm="9" className="mb-9">
                            <FormInput
                                id="name"
                                name="name"
                                placeholder="summary"
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
                            <label htmlFor="pagetype">Page Type</label>
                        </Col>
                        <Col lg="9" md="9" sm="9" className="mb-9">
                            <FormSelect 
                                id="type"
                                name="type"
                                onChange={(event) =>{
                                    setType(event.target.value)
                                }}>
                            >
                                {type === 'internal' ? <option id="internal" name="internal" value="internal" selected>Internal</option> : <option id="internal" name="internal" value="internal">Internal</option> }
                                {type === 'external' ? <option id="external" name="external" value="external" selected>External</option> : <option id="external" name="external" value="external">External</option> }
                            </FormSelect>
                        </Col>
                    </Row>    
                </FormGroup>
                { type === 'internal' ?
                (<FormGroup>
                    <Row form>
                        <Col lg="12" md="12" sm="12" className="mb-12">
                            <label htmlFor="page">Page ({version})</label>
                        </Col>
                    </Row>
                    <Row form>
                        <Col lg="12" md="12" sm="12" className="mb-12">
                            <div style={{border: '1px solid black'}}>
                                {version == 'english' ? (
                                <Editor 
                                    plugins={plugins} 
                                    value={editorValueEnglish} 
                                    defaultPlugin={slate()} 
                                    onChange={setEditorValueEnglish} 
                                />) : null}
                                {version == 'french' ? (
                                <Editor 
                                    plugins={plugins} 
                                    value={editorValueFrench} 
                                    defaultPlugin={slate()} 
                                    onChange={setEditorValueFrench} 
                                />) : null}
                                {version == 'spanish' ? (
                                <Editor 
                                    plugins={plugins} 
                                    value={editorValueSpanish} 
                                    defaultPlugin={slate()} 
                                    onChange={setEditorValueSpanish} 
                                />) : null}
                            </div>
                        </Col>
                    </Row>
                </FormGroup>) : null}
                { type === 'external' ?
                (<FormGroup>
                    <Row form>
                        <Col lg="3" md="3" sm="3" className="mb-3">
                            <label htmlFor="url">URL</label>
                        </Col>
                        <Col lg="9" md="9" sm="9" className="mb-9">
                            <FormInput
                                id="url"
                                name="url"
                                placeholder="https://"
                                value={url}
                                onChange={(event) =>{
                                    setUrl(event.target.value)
                                }}
                            />
                        </Col>
                    </Row>
                </FormGroup>) : null}
                {mode === 'update' ?
                <Button type="submit" disabled={disable}>Update Page Settings</Button>
                : <Button type="submit" disabled={disable}>Create page</Button>}
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

export default GeneralInfoPage;