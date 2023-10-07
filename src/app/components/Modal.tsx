"use client";
import { Button, Modal } from "antd";
import React from "react";
import IsOpenModal from "../store/IsOpenModal";
import { observer } from "mobx-react-lite";
const ModalComponent = observer(() => {
  return (
    <>
      <Button type="primary" onClick={() => IsOpenModal.showModal()}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={IsOpenModal.isModalOpen}
        onOk={() => IsOpenModal.handleOk()}
        onCancel={() => IsOpenModal.handleCancel()}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
});

export default ModalComponent;
