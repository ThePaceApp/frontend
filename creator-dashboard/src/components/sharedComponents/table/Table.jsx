import React, { useState, useEffect, useRef } from "react";
import "./table.css";
// import MOCK_DATA from "./MOCK_DATA.json";
import styled from "styled-components";
import TableSkeleton from "./TableSkeleton";
import { useGetQuestionsQuery } from "../../../redux/features/QuestionsApi";
import { forMatISODate } from "../../../utils/helperFunctions";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../../../redux/features/otherSlice";
import { cellStyles, TableBtn, TableTitle } from "./TableCustomStyles";
// MdNotifications // notification bell

const Table = ({ questions, loading_questions, fetchingQuestions, error }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const tabStatus = useSelector((state) => state.others.questionStatus);
  console.log(tabStatus);
  const [modalStatusDisplay, setModalStatusDisplay] = useState({
    active: false,
    nonActive: false,
    deactivated: false,
  });
  const [displayedData, setDisplayedData] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showActionModal, setShowActionModal] = useState(false);

  // This handles the data being served to the Table component
  useEffect(() => {
    setFetchedData(questions?.data?.questions);
    // console.log(fetchedData);
    let data;
    if (tabStatus === "approved") {
      data = fetchedData?.filter((data) => data?.state === "approved");
    } else if (tabStatus === "pending") {
      data = fetchedData?.filter((data) => data?.state === "pending");
    } else if (tabStatus === "all") {
      data = fetchedData;
    } else if (tabStatus === "rejected") {
      data = fetchedData?.filter((data) => data?.state === "rejected");
    }
    // console.log(data);
    setDisplayedData(data);
    console.log(displayedData?.length);
  }, [
    questions?.data?.questions,
    tabStatus,
    questions,
    loading_questions,
    error,
    fetchingQuestions,
    fetchedData,
    displayedData,
  ]);

  const handleMouseMove = (event) => {
    setPosition({ ...position, x: event.clientX, y: event.clientY });
    console.log(position);
    showActionModal ? setShowActionModal(false) : setShowActionModal(true);
  };

  const handleModalDisplay = (userStatus) => {
    if (userStatus === "pending") {
      setModalStatusDisplay({
        // ...modalStatusDisplay,
        active: true,
        nonActive: false,
        deactivated: true,
      });
    } else if (userStatus === "approved") {
      setModalStatusDisplay({
        // ...modalStatusDisplay,
        active: false,
        nonActive: false,
        deactivated: true,
      });
    } else if (!userStatus) {
      setModalStatusDisplay({
        // ...modalStatusDisplay,
        active: true,
        nonActive: false,
        deactivated: false,
      });
    }
    // console.log(modalStatusDisplay);
  };

  const columns = [
    {
      name: <TableTitle name="Subject" />,
      selector: (row) => row.subject,
      cell: (row, index, column, id) => `${index + 1}. ${" "}${row.subject}`,
      grow: 1,
      style: cellStyles,
    },
    {
      name: <TableTitle name="Questions" />,
      selector: (row) => row.question,
      grow: 4,
      style: cellStyles,
    },

    {
      name: <TableTitle name="Status" />,
      selector: (row) => row.state,
      cell: (row) => <TableBtn status={row?.state} />,
      grow: 1,
      // button:true,
    },
    {
      name: <TableTitle name="Date" />,
      selector: (row) => row.createAt,
      cell: (row) => forMatISODate(row?.createdAt),
      grow: 1,
      style: cellStyles,
    },
  ];
  return (
    <>
      <div>
        <div className="status-tab">
          <button
            onClick={() => dispatch(setStatus("all"))}
            className={tabStatus === "all" && "active-tab"}
          >
            All
          </button>
          <button
            onClick={() => dispatch(setStatus("approved"))}
            className={tabStatus === "approved" && "active-tab"}
          >
            Approved
          </button>
          <button
            onClick={() => dispatch(setStatus("pending"))}
            className={tabStatus === "pending" && "active-tab"}
          >
            Pending
          </button>
          <button
            onClick={() => dispatch(setStatus("rejected"))}
            className={tabStatus === "rejected" && "active-tab"}
          >
            Rejected
          </button>
        </div>
        {loading_questions && (
          <TableSkeleton
            text="Loading..."
            addBtn={
              displayedData?.length === 0 || !loading_questions ? true : false
            }
          />
        )}
        {displayedData?.length === 0 && !loading_questions ? (
          <TableSkeleton text={`There are no ${tabStatus} questions.`} />
        ) : (
          <DataTable
            columns={columns}
            data={displayedData}
            pagination
            responsive
          />
        )}
        {showActionModal && (
          <ActionModal xy={position}>
            <ul>
              <li>View Details</li>
              {modalStatusDisplay.active && <li>Activate User</li>}
              {modalStatusDisplay.deactivated && <li>Deactivate User</li>}
            </ul>
          </ActionModal>
        )}
      </div>
    </>
  );
};

const ActionModal = styled.div`
  position: fixed;
  top: ${(props) => props.xy.y}px;
  left: ${(props) => props.xy.x - 170}px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  width: 150px;
  z-index: 30;
`;
export default Table;

/* 

        <ModalComponent show={showModal}>
          <div className="modal-container">
            <div className="modal-header flex">
              <h5>Edit Question</h5>
              <img
                src="./assets/icons/close.svg"
                alt="close-modal"
                onClick={() => setShowModal(false)}
              />
            </div>

            <div className="modal-body">
              <div className="input-field">
                <label>
                  Question <span>*</span>
                </label>
                <textarea
                  name="question"
                  cols="30"
                  rows="5"
                  // onChange={handleInputValues} 
                  placeholder="Enter Question"
                ></textarea>
              </div>
              <div className="input-field">
                <label>Upload Image</label>
                <div>
                  {showUploadBtn && (
                    <button className="upload" onClick={handleRefFocus}>
                      <img src="./assets/icons/upload.svg" alt="upload" />
                      Upload
                    </button>
                  )}
                  <div className="select-display-image">
                    <input type="file" onChange={handleImageUpload} ref={ref} />
                    <div className="display-image">
                      {imagesArr &&
                        imagesArr.map((imageURL) => (
                          <div className="img-q" key={imageURL}>
                            <img src={imageURL} alt="question image" />
                            <span
                              className="rm-image"
                              onClick={() => handleRemoveImage(imageURL)}
                            >
                              <AiOutlineClose />
                            </span>
                          </div>
                        ))}

                      {!showUploadBtn ? (
                        <button onClick={handleRefFocus}>
                          <img src="./assets/icons/add.svg" alt="add" />
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <div className="options-container">
                    <div>
                      <p className="answer">
                        Kindly click on the checkbox of the correct answer !
                      </p>
                    </div>
                    <div className="options flex">
                      <div className="input-box">
                        <div className="inputs">
                          <input type="radio" />
                          <p>1 kilogram</p>
                        </div>
                        <div className="inputs">
                          <input type="radio" />
                          <p>500 gram</p>
                        </div>
                        <div className="inputs">
                          <input type="radio" />
                          <p>250 gram</p>
                        </div>
                        <div className="inputs">
                          <input type="radio" />
                          <p>Practically none</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn-done active">Edit</button>
          </div>
        </ModalComponent>



 */
