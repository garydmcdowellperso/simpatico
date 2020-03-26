import React, { Component } from "react";
import { Button, Comment, Form, Header, Icon, Modal } from "semantic-ui-react";
import { Formik } from "formik";
import { Box } from "grommet";
import { connect } from "react-redux";
import flowRight from 'lodash/flowRight';
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

import Placeholder from "./placeholder";
import { replyPostRequest } from "../actions/post";
import nextI18NextInstance from '../../i18n';
import { dislikePost, fetchPostsForThread, likePost } from "../actions/post";

const { withTranslation } = nextI18NextInstance;

const getCurrentLang = () => nextI18NextInstance.i18n.language || '';

const isMyPost = (post) => {
  if (!post) return false;

  if (typeof window !== 'undefined') {
    if (post.uid === parseInt(localStorage.getItem("uid"), 10)) {
      return true;
    }
  }
  return false;
}

const renderComments = (posts, dispatch, handleOpen, handleClose, state, isValidToken, t) => {
  let output;

  if (posts && posts.length > 0) {
    output = posts.map(post => (
      <Comment key={post.id}>
        <Comment.Avatar
          as="a"
          src="https://react.semantic-ui.com//images/avatar/small/matt.jpg"
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
                (<Form.TextArea value={post.contents} />) :
                (<Form.TextArea readOnly value={post.contents} />)
                }
              </Form>
            </Box>
            <Box direction="column" gap="medium">
              <p />
              <Icon 
                size="large" 
                color="blue" 
                name="smile" 
                onClick={()=> {
                  dispatch(
                    likePost(post.id)
                  );
                }}
              />
              <Icon 
                size="large" 
                color="red" 
                name="frown" 
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
            {isValidToken && isMyPost(post) ?
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
              actions={[
                t('cancel'),
                { key: "done", content: t('ok'), positive: true }
              ]}
            />) : null}
            {isValidToken && isMyPost(post) ?
            (<Modal
              header={t('are-you-sure')}
              trigger={<Icon size="large" name="save" />}
              size="mini"
              basic
              actions={[
                t('cancel'),
                { key: "done", content: t('ok'), positive: true }
              ]}
            />) : null}
          </Comment.Actions>
        </Comment.Content>
        {post.replies && post.replies.length > 0 ? (
          <Comment.Group  threaded style={{minWidth:'100%'}}>
            {renderComments(post.replies, dispatch, handleOpen, handleClose, state, isValidToken, t)}
          </Comment.Group>
        ) : null}
      </Comment>
    ));
  }
  return output;
};

class ThreadScroll extends Component {
  static async getInitialProps() {
    this.props.i18n.changeLanguage(this.props.locale);

    return {};
  }

  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  fetchData = () => {
    const { dispatch, post } = this.props;    
    const thread = localStorage.getItem("thread");
    if (!thread) {
      return
    }
    setTimeout(() => {
      dispatch(
        fetchPostsForThread(thread, post.page + 1)
      );
    }, 1500);
  }

  render() {
    const { post, posts, isValidToken, t } = this.props;

    console.log('t',t)
    return (
      <Comment.Group threaded style={{minWidth:'100%'}}>
        <Header as="h3" dividing>
          {t('comments')}
        </Header>
        <InfiniteScroll
          dataLength={posts.length}
          next={this.fetchData}
          hasMore={post.more}
          loader={<Placeholder />}
        >
          {renderComments(posts, this.props.dispatch, this.handleOpen, this.handleClose, this.state, isValidToken, t)}
        </InfiniteScroll>
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
