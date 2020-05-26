import React, { useEffect, useState } from "react";
import { Button, Modal, ModalFooter, ModalBody, ModalHeader } from "shards-react";

function Popup(props) {
    const { body, confirmDelete, header, toggle, action } = props;

    return (
      <div>
        <Modal centered open={confirmDelete} toggle={toggle}>
          <ModalHeader>{header}</ModalHeader>
          <ModalBody>👋 {body}</ModalBody>
          <ModalFooter>
              <Button
                onClick={() =>{
                    action()
                }}
              >OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

export default Popup;