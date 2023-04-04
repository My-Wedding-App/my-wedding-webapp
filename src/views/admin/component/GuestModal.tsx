import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../../../component/Button";
import GuestForm from "./GuestForm";

interface GuestModal {
  show: boolean;
  size: any;
  onHide?: (params?: any) => any;
  onCreate?: (params?: any) => any;
}

const GuestModal = ({ show, size, onHide, onCreate }: GuestModal) => {
  return (
    <>
      <Modal size={size} show={show} onHide={onHide}>
        <GuestForm onCloseModal={onHide} onCreate={onCreate}/>
        <Modal.Footer>
          <Button variant="secondary" title="Close" onClick={onHide} />
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default GuestModal;