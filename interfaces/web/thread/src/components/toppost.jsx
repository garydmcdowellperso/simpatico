
import React, { Component } from "react";
import { Box } from "grommet";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Accordion, Icon, Button, Form } from "semantic-ui-react";
import PropTypes from "prop-types";
import flowRight from 'lodash/flowRight';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import dynamic from 'next/dynamic'

import { createPostRequest } from "../actions/post";
import nextI18NextInstance from '../../i18n';

const { withTranslation } = nextI18NextInstance;

const Editor = dynamic(
  () => {
    return import('react-draft-wysiwyg').then((mod) => mod.Editor);
  },
  { loading: () => null, ssr: false },
);

class TopPost extends Component {
  state = {
    editorState: null,
    active: false
  }

  onEditorStateChange = (editorState) => {
    this.setState({
        editorState,
    });
  };

  handleClick = (e, titleProps) => {
    const { active } = this.state;
    this.setState({ active: !active })
  }

  render() {
    const { suggestions, t, handleToggleInProgress, post: { error } } = this.props;
    const { editorState, active } = this.state;
   
    return (
      <Accordion>
        <Accordion.Title
          active={active}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          {t('start-new-thread')}
        </Accordion.Title>
        <Accordion.Content active={active}>
          <Box direction="row">
            <Box width="xlarge">
              <Formik
                initialValues={{ title: "" }}
                validate={values => {
                  const errors = {};
                  const { editorState } = this.state;      

                  if (editorState) {
                    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
                    if (content === '<p></p>') {
                      errors.contents = t('required');
                    }
                  }

                  if (!values.title) {
                    errors.title = t('required');
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  const { dispatch } = this.props;
                  const { editorState } = this.state;      

                  if (!editorState) {
                    return;
                  }
                  const content = draftToHtml(convertToRaw(editorState.getCurrentContent()))

                  handleToggleInProgress(true);

                  dispatch(
                    createPostRequest({
                      title: values.title,
                      contents: content,
                      module: localStorage.getItem("module"),
                      accountId: localStorage.getItem("accountId")
                    })
                  );

                  setTimeout(() => {
                    setSubmitting(false);

                    this.handleClick();
                    handleToggleInProgress(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                  /* and other goodies */
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Field>
                      <Form.Input
                        type="title"
                        name="title"
                        placeholder={t('title')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                      />
                      {errors.title && touched.title && errors.title}
                    </Form.Field>
                    <Form.Field>
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
                              suggestions: suggestions,
                            }}
                          hashtag={{
                              separator: ' ',
                              trigger: '#',
                            }}  
                          onEditorStateChange={this.onEditorStateChange}
                      />                  
                      {errors.contents && touched.contents && errors.contents}
                    </Form.Field>
                    <Button type="submit" disabled={isSubmitting}>
                      {t('submit')}
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
       </Accordion.Content>
      </Accordion>
    );
  }
}

TopPost.propTypes = {
  dispatch: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default flowRight(
  connect(state => state),
  withTranslation(['common'])
)(TopPost);
