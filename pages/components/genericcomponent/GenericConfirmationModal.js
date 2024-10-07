import React from 'react'
import Modal from "react-bootstrap/Modal";
import { Button } from 'react-bootstrap';

function GenericConfirmation(props) {
  return (
    <div>
      {/* Start-confirmation-modal */}
      <Modal
        show={props?.openConfirmation}
        dialogClassName="modal-dialog-centered"
        onHide={props?.closeConfirmModal}
      >
        <Modal.Header closeButton className="p-3 border-0 border-bottom">
          <Modal.Title className="fw-bolder">Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3">
          <h5 className="">
            Are you sure you want to delete.
          </h5>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            onClick={props?.onDelete}
            className="btn btn-danger"
          >Delete</Button>
          <Button
            onClick={props?.closeConfirmModal}
            className="btn btn-outline-dark"
          >Cancel</Button>
        </Modal.Footer>
      </Modal>
      {/*End-confirmation-modal */}
    </div>
  )
}

export default GenericConfirmation