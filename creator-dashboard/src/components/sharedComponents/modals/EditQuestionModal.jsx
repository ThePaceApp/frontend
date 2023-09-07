import React, { useState } from "react";
import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";

function EditQuestionModal() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ModalWrapper header="Edit Question" open={true}>
        <h1>Here is my modal</h1>
      </ModalWrapper>
    </>
  );
}

export default EditQuestionModal;
