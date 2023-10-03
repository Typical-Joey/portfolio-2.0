import React from "react";
import Modal from "react-bootstrap/Modal";
import "./projectModal.css";

export default function projectModal({ show, project, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-container"
    >
      {/* <Modal.Header closeButton /> */}
      <Modal.Body className="modal-body-container">
        <div className="left">project-image</div>
        <div className="right">
          <h4>{project.title}</h4>
          <textarea>{project.description}</textarea>
        </div>
      </Modal.Body>
    </Modal>
  );
}
