import React from "react";
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from "shards-react";

function Confirm(props) {
    const { action, open, toggle } = props;

    return (
      <div>
        <Modal size="sm" centered open={open} toggle={toggle}>
          <ModalHeader>👋 Are you sure ?</ModalHeader>
          <ModalBody>
              <Row>
                  <Col>
                      <Button onClick={() => {
                          action()
                          toggle()
                      }}>Yes</Button>
                  </Col>
                  <Col>
                      <Button onClick={toggle}>No</Button>
                  </Col>
              </Row>
          </ModalBody>
        </Modal>
      </div>
    );
}

export default Confirm;