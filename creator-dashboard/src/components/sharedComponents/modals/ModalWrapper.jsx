import React from "react";
import styled from "styled-components";

function ModalWrapper({ header, open, close, children }) {
  return (
    <>
      {open && <Backdrop />}
      <ModalComponent show={open}>
        <div className="modal-container">
          <div className="modal-header flex">
            <h5>{header}</h5>
            <img
              src="../assets/icons/close.svg"
              alt="close-modal"
              onClick={close}
            />
          </div>
          <div>{children}</div>
        </div>
      </ModalComponent>
    </>
  );
}

const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 35;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 1s;
`;

const ModalComponent = styled.div`
  background: #f9f9f9;
  border-radius: 20px;
  position: fixed;
  top: 10px;
  left: 32%;
  z-index: 40;
  height: fit-content;
  // overflow-y: scroll;
  // display:none;
  transition: transform 0.5s;
  // transform: ${(props) =>
    props.show ? "translateY(0%)" : "translateY(-120%)"};
  transform: ${(props) => (props.show ? "scale(1)" : "scale(0)")};
  padding: 0px 20px 10px 20px;

  @media (max-width: 1024px) {
    left: 30%;
  }
  @media (max-width: 900px) {
    left: 27%;
  }
  @media (max-width: 900px) {
    left: 23%;
  }
  @media (max-width: 665px) {
    left: 6%;
    width: 90%;
  }
  @media (max-width: 550px) {
    left: 3%;
    width: 95%;
  }
`;

export default ModalWrapper;
