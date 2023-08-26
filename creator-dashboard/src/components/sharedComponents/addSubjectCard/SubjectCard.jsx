import React, { useState, useRef, useReducer, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import "./SubjectCard.css";
import AddQuestionModal from "../modals/AddQuestionModal";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../../redux/features/modalsSlice";

const SubjectCard = ({ cardDetails}) => {
  // console.log(cardDetails);
  const addQuestionModalState = useSelector(
    (state) => state.modalsState.addQuestion
  );
  const dispatch = useDispatch();
  return (
    <>
      <AddQuestionModal
        subject={cardDetails?.subject}
        openModal={addQuestionModalState}
        closeModal={() => dispatch(addQuestion())}
      />
      <div className="sub-card">
        <div>
          <div className="sub-icon">
            <img src="../assets/icons/chm1.svg" alt="testube" />
          </div>
          <div>
            <h3>{cardDetails?.subject}</h3>
            <p>Total contribution: {cardDetails?.totalContribution}</p>
            <p>My contribution: {cardDetails?.myContribution}(8.3%)</p>
          </div>
        </div>
        <div
          className="add-svg"
          onClick={() => dispatch(addQuestion())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M14.8538 3.75875L15 3.75C15.3062 3.75004 15.6017 3.86245 15.8305 4.06589C16.0593 4.26934 16.2054 4.54969 16.2413 4.85375L16.25 5V13.75H25C25.3062 13.75 25.6017 13.8624 25.8305 14.0659C26.0593 14.2693 26.2054 14.5497 26.2412 14.8538L26.25 15C26.25 15.3062 26.1376 15.6017 25.9341 15.8305C25.7307 16.0593 25.4503 16.2054 25.1463 16.2413L25 16.25H16.25V25C16.25 25.3062 16.1376 25.6017 15.9341 25.8305C15.7307 26.0593 15.4503 26.2054 15.1462 26.2412L15 26.25C14.6938 26.25 14.3983 26.1376 14.1695 25.9341C13.9407 25.7307 13.7946 25.4503 13.7587 25.1463L13.75 25V16.25H5C4.69383 16.25 4.39833 16.1376 4.16954 15.9341C3.94074 15.7307 3.79457 15.4503 3.75875 15.1462L3.75 15C3.75004 14.6938 3.86245 14.3983 4.06589 14.1695C4.26934 13.9407 4.54969 13.7946 4.85375 13.7587L5 13.75H13.75V5C13.75 4.69383 13.8624 4.39833 14.0659 4.16954C14.2693 3.94074 14.5497 3.79457 14.8538 3.75875L15 3.75L14.8538 3.75875Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default SubjectCard;
