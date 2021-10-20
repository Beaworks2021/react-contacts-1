import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import EditUserInput from "./EditUserInput"
import { connect } from "react-redux";
import { deleteUser } from "../actions/userActions";

function User(props) {
  const [showModal, setShowModal] = useState(false);

  const user = props.user;

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h3>{user.gen}</h3>
      <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>
      <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
        Delete
      </Button>

      {/* modal to edit users */}

      <Modal className="modal" show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <EditUserInput
            user={user}
            toggleModal={toggleModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="close-btn"
            variant="secondary"
            onClick={() => toggleModal()}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = {
	deleteUser,
};

export default connect(null, mapDispatchToProps)(User);


