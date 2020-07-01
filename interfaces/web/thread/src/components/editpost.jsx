import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import { EditorState, convertToRaw } from 'draft-js';
import dynamic from 'next/dynamic'
import draftToHtml from 'draftjs-to-html';

const Editor = dynamic(
  () => {
    return import('react-draft-wysiwyg').then((mod) => mod.Editor);
  },
  { loading: () => null, ssr: false },
);

class EditPost extends Component {
  state = {
     open: true ,
     editorState: null
  };

  show = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open, editorState } = this.state;
    const { show } = this.props;

    return (
      <div>
        <Modal open={show} onClose={this.close}>
          <Modal.Header>Edit Post</Modal.Header>
          <Modal.Content>
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
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default EditPost;
