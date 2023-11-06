import React, { ReactNode, useState } from "react";
import Modal from 'react-bootstrap/Modal';

type BasicModal = {
  children?: ReactNode;
  modalshow?: any;
  size?: any;
  onCancel?: any;

};

export default function BasicModal(props: BasicModal) {
  const { children, modalshow, size, onCancel } = props;

  return (
    <>

    <Modal show={modalshow} className="border border-danger rounded-3 "
      // {...props}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Body className="border border-primary rounded-3 " >
        {children}
      </Modal.Body>
    </Modal>
  </>
  );
}
