import React from "react";
import Modal from "react-bootstrap/Modal";
import image from "../images/detailed-placeholder.jpg";
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
        <div className="left">
          <img src={image} alt="" />
        </div>
        <div className="right">
          <h4>{project.title}</h4>
          <textarea readOnly={true}>{project.description}</textarea>
        </div>
      </Modal.Body>
    </Modal>
  );
}
