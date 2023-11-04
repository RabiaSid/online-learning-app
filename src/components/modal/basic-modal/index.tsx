import React, { ReactNode, useState } from "react";
import Modal from 'react-bootstrap/Modal';

type BasicModal = {
  children: ReactNode;
  modalshow?: any;
  onOk?: any;
  onCancel?: any;
};

export default function BasicModal(props: BasicModal) {
  const { children, modalshow, onOk, onCancel } = props;

  return (
    <>

    <Modal show={modalshow} >
      <Modal.Body className="border border-none rounded-3 ">
        {children}
      </Modal.Body>
    </Modal>
  </>
  );
}
