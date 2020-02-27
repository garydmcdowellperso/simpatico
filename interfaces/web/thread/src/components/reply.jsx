import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

class Reply extends Component {
  state = { open: false };

  show = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    const { show } = this.props;

    return (
      <div>
        <Modal open={show} onClose={this.close}>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
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

export default Reply;
