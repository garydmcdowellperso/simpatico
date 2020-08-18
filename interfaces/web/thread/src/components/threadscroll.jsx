import React, { Component } from "react";
import { Button, Comment, Form, Header, Icon, Modal } from "semantic-ui-react";
import dynamic from 'next/dynamic'
import { Formik } from "formik";
import { Box } from "grommet";
import { connect } from "react-redux";
import flowRight from 'lodash/flowRight';
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components'
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Placeholder from "./placeholder";
import { replyPostRequest } from "../actions/post";
import nextI18NextInstance from '../../i18n';
import { deletePost, dislikePost, fetchPostsForModule, likePost, updatePost } from "../actions/post";

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || 'en';

const Span = styled.span`
  background: #fff;
  padding: .67857143em 1em;
`;

const isMyPost = (post) => {
  if (!post) return false;

  if (typeof window !== 'undefined') {
    if (post.uid === parseInt(localStorage.getItem("uid"), 10)) {
      return true;
    }
  }
  return false;
}

function SaveOption(props) {
  const { editorState, post, savePostEdit, handleToggleInProgress } = props;

  function savePost() {
    const draftToHtml = require('draftjs-to-html');
    post.contents = draftToHtml(convertToRaw(editorState.getCurrentContent()))

    savePostEdit(post.id, post.contents);
  };

  return (
    <div onClick={savePost}><Icon size="large" name="save" /></div>
  );
}

const renderComments = (posts, dispatch, handleOpen, handleClose, handlePostEdit, handlePostEditFinished, onChange, savePostEdit, state, isValidToken, t, editorState, onEditorStateChange, suggestions) => {
  let output;

  if (posts && posts.length > 0) {
    output = posts.map(post => {

      return (<Comment key={post.id} id={post.id}>
        <Comment.Avatar
          as="a"
          src={post.avatar}
        />
        <Comment.Content>
          <Comment.Author as="a">{post.user}</Comment.Author>
          <Comment.Metadata>
            <span>{post.timestamp}</span>
            <div>
              <Icon name='thumbs up' />{post.likes ? post.likes : 0} {t('likes')}
            </div>
            <div>
              <Icon name='thumbs down' />{post.dislikes ? post.dislikes : 0} {t('dislikes')}
            </div>
          </Comment.Metadata>
          <Comment.Text>
            <p>{post.title}</p>
          </Comment.Text>
          <Box direction="row" fill="horizontal" flex="grow">
            <Box width="small" flex="grow">
              <Form reply>
                {isValidToken && isMyPost(post) ?
                (<Box 
                  onClick={() => {
                    // editing but moved away to new post
                    if (state.postEdit && state.postEditId === post.id) {
                      // Do nothing they are clicking in the editor still
                    } else if (state.postEdit && state.postEditId !== post.id) {
                      handlePostEditFinished();
                      handlePostEdit(post.id);

                      const htmlToDraft = require('html-to-draftjs').default;

                      const contentBlock = htmlToDraft(post.contents);
                      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                      const editorState = EditorState.createWithContent(contentState);
                      onEditorStateChange(editorState);
                    } else if (!state.postEdit) {
                      // not editing yet so set up the editor
                      handlePostEdit(post.id);
                      const htmlToDraft = require('html-to-draftjs').default;

                      const contentBlock = htmlToDraft(post.contents);
                      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                      const editorState = EditorState.createWithContent(contentState);
                      onEditorStateChange(editorState);
                    }
                  }}
                  background="white" 
                  height="small"
                  overflow="auto"
                  border={{ color: 'black', size: 'small' }}>
                  {state.postEdit && post.id === state.postEditId ?   
                  (
                  <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"  
                    toolbarCustomButtons={[<SaveOption post={post} savePostEdit={savePostEdit} />]}
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
                    onEditorStateChange={onEditorStateChange}
                />
                  ):
                  (<span dangerouslySetInnerHTML={{__html: post.contents}} />) 
                  }
                </Box>) :
                (<Box
                  background="white" 
                  height="small"
                  border={{ color: 'black', size: 'small' }}>
                    <span dangerouslySetInnerHTML={{__html: post.contents}} />
                </Box>)
                }
              </Form>
            </Box>
            <Box direction="column" gap="medium">
              <p />
              <Icon 
                size="large" 
                color="blue" 
                name="thumbs up" 
                onClick={()=> {
                  dispatch(
                    likePost(post.id)
                  );
                }}
              />
              <Icon 
                size="large" 
                color="red" 
                name="thumbs down" 
                onClick={()=> {
                  dispatch(
                    dislikePost(post.id)
                  );
                }}
              />
              <Modal
                trigger={<Icon size="large" name="share alternate" />}
                size="small"
              >
                {isValidToken ?
                (<Modal.Header>Share post</Modal.Header>) : (<Modal.Header>Login to share</Modal.Header>) }
                <Modal.Content image>
                  <Modal.Description></Modal.Description>
                </Modal.Content>
              </Modal>
            </Box>
          </Box>
          <Comment.Actions>
            {isValidToken && !isMyPost(post) ?
            (<Modal
              trigger={
                <Icon size="large" name="share" onClick={handleOpen} />
              }
              size="fullscreen"
              open={state.modalOpen}
              onClose={handleClose}
            >
              <Modal.Header>{t('add-comment')}</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <Formik
                    initialValues={{ contents: "" }}
                    validate={values => {
                      const errors = {};
                      if (!values.contents) {
                        errors.contents = t('required');
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      dispatch(
                        replyPostRequest({
                          id: post.id,
                          contents: values.contents
                        })
                      );

                      setTimeout(() => {
                        setSubmitting(false);
                        handleClose();
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
                    }) => (
                      <Form onSubmit={handleSubmit} reply>
                        <Form.Field>
                          <Form.TextArea
                            type="textarea"
                            name="contents"
                            placeholder={t('contents')}
                            value={values.contents}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />
                          {errors.contents &&
                            touched.contents &&
                            errors.contents}
                        </Form.Field>
                        <Button type="submit" disabled={isSubmitting}>
                        {t('submit')}
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Modal.Description>
              </Modal.Content>
            </Modal>) : null}
            {isValidToken && isMyPost(post) ?
            (<Modal
              header={t('are-you-sure')}
              trigger={<Icon size="large" name="trash alternate" />}
              size="mini"
              basic
              onActionClick={(event) => {
                handlePostEditFinished();

                if (event.target.value === 'ok') {
                  // Save this new value
                  dispatch(
                    deletePost(post.id)
                  );
                }
              }}
              actions={[
                { value: 'nok', key: 'cancel', content: t('cancel') },
                { value: 'ok', key: "done", content: t('ok'), positive: true }
              ]}
            />) : null}
          </Comment.Actions>
        </Comment.Content>
        {post.replies && post.replies.length > 0 ? (
          <Comment.Group  threaded style={{minWidth:'85%'}}>
            {renderComments(post.replies, dispatch, handleOpen, handleClose, handlePostEdit, handlePostEditFinished, onChange, savePostEdit, state, isValidToken, t, editorState, onEditorStateChange, suggestions)}
          </Comment.Group>
        ) : null}
      </Comment>
    )})
  }

  return output;
};

const Editor = dynamic(
  () => {
    return import('react-draft-wysiwyg').then((mod) => mod.Editor);
  },
  { loading: () => null, ssr: false },
);

class ThreadScroll extends Component {
  static async getInitialProps() {
    this.props.i18n.changeLanguage(this.props.locale);

    return {};
  }

  state = { 
    modalOpen: false,
    value: null,
    postEdit: false,
    postEditId: null,
    editorState: null
  };

  Editor = null;

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handlePostEdit = (id) => {
    this.setState({ 
      postEdit: true,
      postEditId: id
    });
  }

  handlePostEditFinished = () => {
    this.setState({ 
      postEdit: false,
      postEditId: null
    });
  }

  onChange = (value) => {
    this.setState({value});
  };

  savePostEdit = (id, value) => {
    const { dispatch } = this.props;   

    dispatch(
      updatePost(id, value)
    );
  };

  fetchData = () => {
    const { dispatch, post } = this.props;    
    const module = localStorage.getItem("module");
    if (!module) {
      return
    }
    setTimeout(() => {
      dispatch(
        fetchPostsForModule(module, post.page + 1, post.sort)
      );
    }, 500);
  }

  onEditorStateChange = (editorState) => {
    this.setState({
        editorState,
    });
  };

  render() {
    const { post, searches, posts, isValidToken, t, suggestions } = this.props;
    console.log('props', this.props)
    const { editorState } = this.state;

    return (
      <Comment.Group threaded style={{minWidth:'100%'}}>
        <Header as="h3" dividing>
          {t('comments')}
        </Header>
        {searches && searches.length > 0 ?
          (<InfiniteScroll
          dataLength={searches.length}
          next={this.fetchData}
          hasMore={false}
          loader={<Placeholder />}
        >
          {renderComments(searches, this.props.dispatch, this.handleOpen, this.handleClose, this.handlePostEdit, this.handlePostEditFinished, this.onChange, this.savePostEdit, this.state, isValidToken, t, editorState, this.onEditorStateChange, suggestions)}
          </InfiniteScroll>) : 
          <InfiniteScroll
          dataLength={posts.length}
          next={this.fetchData}
          hasMore={post.more}
          loader={<Placeholder />}
        >
          {renderComments(posts, this.props.dispatch, this.handleOpen, this.handleClose, this.handlePostEdit, this.handlePostEditFinished, this.onChange, this.savePostEdit, this.state, isValidToken, t, editorState, this.onEditorStateChange, suggestions)}
        </InfiniteScroll>      
        }
      </Comment.Group>
    );
  }
}

ThreadScroll.propTypes = {
  dispatch: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default flowRight(
  connect(state => state),
  withTranslation(['common'])
)(ThreadScroll);
