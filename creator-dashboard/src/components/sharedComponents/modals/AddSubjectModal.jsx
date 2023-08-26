import React, { useState } from "react";
import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";

function AddSubjectModal() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ModalWrapper header="Question Subject" open={true}>
        <h1>Here is my modal</h1>
      </ModalWrapper>
    </>
  );
}

export default AddSubjectModal;
