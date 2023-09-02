import React, { useState, useEffect, useReducer } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Backdrop from "../Backdrop";
import { unsetToken } from "../../../redux/features/authTokenSlice";
import { useDispatch } from "react-redux";

const linkActive = ({ isActive }) => {
  return {
    backgroundColor: isActive && "#f2f2f2",
    borderLeft: isActive && "3px solid #16956c",
  };
};

const Sidebar = ({ linkText, scroll, handleAddQuestionModal }) => {
  //Note this will accept props that will be an object
  // containing LINK url and Link Text
  const [addedSubjects, setAddedSubjects] = useState(["Chemistry", "Biology"]);
  const dispatch = useDispatch()
  const [allSubjects, setAllSubjects] = useState([
    "Physics",
    "Mathematics",
    "Economics",
    "English",
    "Agricultural Science",
    "Civic",
    "Further Mathematics",
    "Data Processing",
  ]);
  const [warning, setWarning] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [showSubjectsModal, setShowSubjectsModal] = useState(false);

  // const addedSubjects = ["Chemistry", "Mathematics"];

  const handleAddSubject = (addSubject) => {
    if (addedSubjects.length < 4) {
      setAddedSubjects([...addedSubjects, addSubject]);
      const updateAllSubjects = allSubjects.filter((sub) => sub !== addSubject);
      setAllSubjects([...updateAllSubjects]);
      setWarning("");
    }
    if (addedSubjects.length >= 4) {
      setWarning("Only 4 subjects can be added to dashboard");
    }
  };

  const handleSubjectSearch = (e) => {
    setSearchValue(e.target.value);
    let result;
    if (searchValue !== "" || searchValue !== undefined) {
      console.log("There is a value");
      result = allSubjects.filter((sub) =>
        sub.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      setAllSubjects([...result]);
      console.log(result);
      // if (result.length === 0) {
      //   console.log("Subject not found");
      //   setAllSubjects([...allSubjects]);
      //   console.log(allSubjects);
      // }
    } else {
      console.log("Subject not found");
      setAllSubjects([...allSubjects]);
      console.log(allSubjects);
    }
  };

  return (
    <>
      {showSubjectsModal && <Backdrop />}
      <div className={scroll ? "list-container sticky" : "list-container"}>
        <div>
          <ul>
            {linkText.map((link) => (
              <li className={link.text === "Sign Out" ? "signOut" : ""} key={link.id} onClick={()=> link.text ==='Sign Out' && dispatch(unsetToken())}>
                <NavLink style={linkActive} to={link.link}>
                  {link.text}
                </NavLink>
              </li>
            ))}
            {}
          </ul>
        </div>
        <div className="add-question">
          <div className="book-img">
            <img src="../assets/icons/add-bk.svg" alt="add-book" />
          </div>
          <p className="text">Add more subjects to dashboard.</p>
          <button
            className="add-btn"
            onClick={() => setShowSubjectsModal(true)}
          >
            <img src="../assets/icons/add-icon.svg" alt="add-icon" />
            <span>Add</span>
          </button>
        </div>
      </div>
      <ModalComponent show={showSubjectsModal}>
        <div className="modal-container">
          <div className="modal-header flex">
            <h5>Subjects</h5>
            <img
              src="../assets/icons/close.svg"
              alt="close-modal"
              onClick={() => setShowSubjectsModal(false)}
            />
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for subject"
              onChange={handleSubjectSearch}
            />
            <div className="search-icon">
              <img src="../assets/icons/search-icon.svg" alt="search-icon" />
            </div>
          </div>
          <div className="added-subjects">
            {addedSubjects.map((subject) => (
              <button className="subject" key={subject}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                >
                  <path
                    d="M15.8242 0.188965L6.79991 9.47113L3.7918 6.37707L0.783691 9.47113L6.79991 15.6592L18.8323 3.28302L15.8242 0.188965Z"
                    fill="white"
                  />
                </svg>
                <span>{subject}</span>
              </button>
            ))}
          </div>

          <div className="suggestions">
            <p className="warning">{warning}</p>
            <h4>Suggestions</h4>
            <div className="added-subjects">
              {allSubjects.map((subject, index) => {
                if (index < 6) {
                  return (
                    <button
                      className="subject"
                      onClick={() => handleAddSubject(subject)}
                      key={subject}
                    >
                      <span>{subject}</span>
                    </button>
                  );
                }
              })}
            </div>
          </div>
          <button className="btn-done">Done</button>
        </div>
      </ModalComponent>
    </>
  );
};

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
  transform: ${(props) =>
    props.show ? "translateY(0%)" : "translateY(-120%)"};
  // transform: ${(props) => (props.show ? "scale(1)" : "scale(0)")};
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

export default Sidebar;
