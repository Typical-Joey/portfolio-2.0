import React from "react";
import Modal from "react-bootstrap/Modal";

export default function projectModal({ show, project, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
      </Modal.Body>
    </Modal>
  );
}
