import React from "react";
import styled from "styled-components";

const Backdrop = () => {
  return (
    <>
      <BackdropCom />
    </>
  );
};

const BackdropCom = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 35;
  background: rgba(0, 0, 0, 0.6);
  transition: opacity 1s;
`;

export default Backdrop;
