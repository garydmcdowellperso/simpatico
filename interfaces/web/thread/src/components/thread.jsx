import React, { Component } from "react";
import { Button, Comment, Form, Header, Icon, Image, Modal } from "semantic-ui-react";
import { Formik } from "formik";
import { Box } from "grommet";
import { connect } from "react-redux";

import { replyPostRequest } from "../actions/post";

const renderComments = (posts, dispatch, handleOpen, handleClose, state) => {
  let output;

  if (posts && posts.length > 0) {
    output = posts.map(post => {
      return (
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
                <Icon name='thumbs up' />5 Likes
              </div>
              <div>
                <Icon name='thumbs down' />5 Dislikes
              </div>
            </Comment.Metadata>
            <Comment.Text>
              <p>{post.title}</p>
            </Comment.Text>
            <Box direction="row" fill="horizontal" flex="grow">
              <Box width="large" flex="grow">
                <Form reply>
                  <Form.TextArea readOnly value={post.contents} />
                </Form>
              </Box>
              <Box direction="column" gap="medium">
                <p />
                <Icon size="large" color="blue" name="smile" />
                <Icon size="large" color="red" name="frown" />
                <Modal
                  trigger={<Icon size="large" name="share alternate" />}
                  size="small"
                >
                  <Modal.Header>Share post</Modal.Header>
                  <Modal.Content image>
                    <Modal.Description></Modal.Description>
                  </Modal.Content>
                </Modal>
              </Box>
            </Box>
            <Comment.Actions>
              <Modal
                trigger={
                  <Icon size="large" name="share" onClick={handleOpen} />
                }
                size="fullscreen"
                open={state.modalOpen}
                onClose={handleClose}
              >
                <Modal.Header>Add Comment</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <Formik
                      initialValues={{ contents: "" }}
                      validate={values => {
                        const errors = {};
                        if (!values.contents) {
                          errors.contents = "Required";
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
                              placeholder="contents"
                              value={values.contents}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            {errors.contents &&
                              touched.contents &&
                              errors.contents}
                          </Form.Field>
                          <Button type="submit" disabled={isSubmitting}>
                            Submit
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              <Modal
                header="Are you sure?"
                trigger={<Icon size="large" name="trash alternate" />}
                size="mini"
                basic
                actions={[
                  "Cancel",
                  { key: "done", content: "OK", positive: true }
                ]}
              />
            </Comment.Actions>
          </Comment.Content>
          {post.replies && post.replies.length > 0 ? (
            <Comment.Group>
              {renderComments(post.replies, dispatch, handleOpen, handleClose, state)}
            </Comment.Group>
          ) : null}
        </Comment>
      );
    });
  }
  return output;
};

class Thread extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { post } = this.props;

    return (
      <Comment.Group threaded>
        <Header as="h3" dividing>
          Comments
        </Header>
        {renderComments(post.posts, this.props.dispatch, this.handleOpen, this.handleClose, this.state)}
      </Comment.Group>
    );
  }
}

export default connect(state => state)(Thread);
