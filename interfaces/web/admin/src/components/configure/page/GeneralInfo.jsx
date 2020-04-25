import React, { Component} from 'react';
import { connect } from "react-redux";
import flowRight from 'lodash/flowRight';
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
import dynamic from 'next/dynamic'
import { createPageRequest } from "../../../actions/pages"
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import ReactCountryFlag from "react-country-flag"

const Editor = dynamic(
    () => {
      return import('react-draft-wysiwyg').then((mod) => mod.Editor);
    },
    { loading: () => null, ssr: false },
);

class GeneralInfo extends Component {
    static async getInitialProps() {
      this.props.i18n.changeLanguage(this.props.locale);
  
      return {};
    }
  
    state = { 
      name: "",
      type: "internal",
      disable: false,
      url: "",
      editorState: null
    };
  
    RichTextEditor = null;
    Editor = null;

    handleOnSubmit = () => {
        const { dispatch, id } = this.props;
        const { editorState, name, type, url } = this.state;      

        let content = null;
        if (type === 'internal') {
            content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        }
        console.log('content', content)
        dispatch(createPageRequest(
            name,
            type,
            id,
            url,
            content
        ))
    }

    onChange = (value) => {
        this.setState({value});
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState, disable, name, type, url, value } = this.state;      
        const { mode, id, processing } = this.props;      
          
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
                    <Form onSubmit={this.handleOnSubmit}>
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
                                            this.setState({
                                                name: event.target.value
                                            });
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
                                        onChange={(event) =>{
                                            this.setState({
                                                type: event.target.value
                                            });
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
                                    <Editor
                                        editorState={editorState ? editorState : EditorState.createEmpty()}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        localization={{
                                            locale: 'fr',
                                        }}
                                        mention={{
                                            separator: ' ',
                                            trigger: '@',
                                            suggestions: [
                                              { text: 'APPLE', value: 'apple', url: 'apple' },
                                              { text: 'BANANA', value: 'banana', url: 'banana' },
                                              { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                                              { text: 'DURIAN', value: 'durian', url: 'durian' },
                                              { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                                              { text: 'FIG', value: 'fig', url: 'fig' },
                                              { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                                              { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                                            ],
                                          }}
                                        hashtag={{
                                            separator: ' ',
                                            trigger: '#',
                                          }}  
                                        onEditorStateChange={this.onEditorStateChange}
                                    />
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
                                            this.setState({
                                                url: event.target.value
                                            });
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
                    Hello
                    <ReactCountryFlag code="US" svg />
                </CardFooter>
            </Card>
            </LoadingOverlay>
            </>
        )
    }
}
  

export default flowRight(
    connect(state => state),
)(GeneralInfo);