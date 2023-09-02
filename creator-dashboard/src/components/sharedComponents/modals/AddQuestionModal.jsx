import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import { AiOutlineClose } from "react-icons/ai";
import { useCreateQuestionMutation } from "../../../redux/features/QuestionsApi";
// import LoadingButton from '@mui/lab/LoadingButton';
import { LoadingButton } from "@mui/lab";
import { Alert, Snackbar } from "@mui/material";
import {
  addQuestion,
  toggleSnackBar,
} from "../../../redux/features/modalsSlice";
import { useDispatch } from "react-redux";

function AddQuestionModal({ subject, openModal, closeModal }) {
  const [imagesArr, setImagesArr] = useState([]);
  const [showUploadBtn, setShowUploadBtn] = useState(true);
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(true);
  const [answer, setAnswer] = useState("");
  const [checkedAnswer, setCheckedAnswer] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
  });

  // Values to be submitted to endpoint
  const [questionDetails, setQuestionDetails] = useState({
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
  });
  const [errors, setErrors] = useState({
    question: true,
    optionA: true,
    optionB: true,
    optionC: true,
    optionD: true,
  });
  const ref = useRef();
  const dispatch = useDispatch();
  ////////////////////////////////
  // Functions

  // To choose the correct answer
  const handleSelectAnswer = (option) => {
    if (option === "A") {
      setAnswer(questionDetails?.optionA);
      setCheckedAnswer({
        ...checkedAnswer,
        checkedA: true,
        checkedB: false,
        checkedC: false,
        checkedD: false,
      });
    } else if (option === "B") {
      setAnswer(questionDetails?.optionB);
      setCheckedAnswer({
        ...checkedAnswer,
        checkedA: false,
        checkedB: true,
        checkedC: false,
        checkedD: false,
      });
    } else if (option === "C") {
      setAnswer(questionDetails?.optionC);
      setCheckedAnswer({
        ...checkedAnswer,
        checkedA: false,
        checkedB: false,
        checkedC: true,
        checkedD: false,
      });
    } else if (option === "D") {
      setAnswer(questionDetails?.optionD);
      setCheckedAnswer({
        ...checkedAnswer,
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: true,
      });
    }
  };

  // Helps to focus the image input on clicking upload btn
  const handleRefFocus = () => {
    ref.current.click();
  };

  const handleImageUpload = (event) => {
    setImagesArr((imagesArr) => [
      ...imagesArr,
      URL.createObjectURL(event.target.files[0]),
    ]);
    setShowUploadBtn(false);
    console.log(imagesArr);
  };

  const handleRemoveImage = (imageURL) => {
    let imageIndex = imagesArr.indexOf(imageURL);
    console.log(imageIndex);
    if (imageIndex !== -1) {
      imagesArr.splice(imageIndex, 1);
      setImagesArr((imagesArr) => [...imagesArr]);
      if (imagesArr.length === 0 || imagesArr === undefined) {
        setShowUploadBtn(true);
      }
    }
  };
  const [createQuestion, { isLoading: submitting, data, error }] =
    useCreateQuestionMutation();

  console.log(data);
  console.log(error);

  // Handle Question submission
  const handleSubmitQuestion = () => {
    if (
      questionDetails.question !== "" &&
      questionDetails.optionA !== "" &&
      questionDetails.optionB !== "" &&
      questionDetails.optionC !== "" &&
      questionDetails.optionD !== "" &&
      answer !== ""
    ) {
      // make the post request here
      createQuestion({
        question: questionDetails?.question,
        questionImageUrl: imagesArr,
        answerOptions: [
          questionDetails?.optionA,
          questionDetails?.optionB,
          questionDetails?.optionC,
          questionDetails?.optionD,
        ],
        correctAnswer: answer,
        subject: "Chemistry",
        mode: "practice",
        state: "pending",
      });
      console.log(error);
      //   console.log(imagesArr);

      setDisableSubmitBtn(false);
    }
  };
  useEffect(() => {
    if (data?.status === "success") {
      setQuestionDetails({
        ...questionDetails,
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
      });
      dispatch(addQuestion());
      dispatch(
        toggleSnackBar({
          message: `${data?.message}`,
          open: true,
          severity: "success",
        })
      );
    }
    if (error) {
      dispatch(
        toggleSnackBar({
          message: `${error?.error}`,
          open: true,
          severity: "error",
        })
      );
    }
  }, [data, error]);
  const activateButton = () => {
    if (
      questionDetails.question !== "" &&
      questionDetails.optionA !== "" &&
      questionDetails.optionB !== "" &&
      questionDetails.optionC !== "" &&
      questionDetails.optionD !== ""
    ) {
      setDisableSubmitBtn(false);
    }
    if (
      questionDetails.question === "" ||
      questionDetails.optionA === "" ||
      questionDetails.optionB === "" ||
      questionDetails.optionC === "" ||
      questionDetails.optionD === ""
    ) {
      setDisableSubmitBtn(true);
    }
  };

  // Handles Values Submitted to Endpoint

  const handleInputValues = (e) => {
    setQuestionDetails({
      ...questionDetails,
      [e.target.name]: e.target?.value,
    });
    if (e.target.value) {
      setErrors({ ...errors, [e.target.name]: false });
    } else {
      setErrors({ ...errors, [e.target.name]: true });
    }
    activateButton();
  };

  return (
    <>
      {/*      
      <Snackbar
        open={data || error}
        autoHideDuration={6000}
        // onClose={}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          //   onClose={}
          severity={data ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {data
            ? data?.message
            : error?.status === "FETCH_ERROR"
            ? "This question already exist"
            : "An input field is empty or answer not checked"}
        </Alert>
      </Snackbar> */}

      <ModalWrapper
        header={`${subject} Question Bank`}
        open={openModal}
        close={closeModal}
      >
        {/* <div className="input-field">
                <label>
                  Select subject <span>*</span>
                </label>
                <select name="" id="">
                  <option value="">Choose subject</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                  <option value="Biology">Biology</option>
                  <option value="English">English</option>
                  <option value="Mathematics">Mathematics</option>
                </select>
                <p className="select-err err-message">
                  You must select subject
                </p>
              </div> */}

        <div className="modal-body">
          <div className="input-field">
            <label>
              Question <span>*</span>
            </label>
            <textarea
              name="question"
              cols="30"
              rows="5"
              onChange={handleInputValues}
              placeholder="Enter Question"
            ></textarea>
            {errors.question && (
              <p className="select-err">Question field cannot be empty *</p>
            )}
          </div>
          <div className="input-field">
            <label>Upload Image</label>
            <div>
              {showUploadBtn && (
                <button className="upload" onClick={handleRefFocus}>
                  <img src="../assets/icons/upload.svg" alt="upload" />
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
                      <img src="../assets/icons/add.svg" alt="add" />
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
                      <input
                        type="checkbox"
                        checked={checkedAnswer.checkedA}
                        onClick={() => handleSelectAnswer("A")}
                      />
                      <input
                        type="text"
                        name="optionA"
                        onChange={handleInputValues}
                        placeholder="Type option A"
                      />
                    </div>
                    {errors.optionA && (
                      <p className="err-message">Required *</p>
                    )}
                  </div>
                  <div className="input-box">
                    <div className="inputs">
                      <input
                        type="checkbox"
                        checked={checkedAnswer.checkedB}
                        onClick={() => handleSelectAnswer("B")}
                      />
                      <input
                        type="text"
                        name="optionB"
                        onChange={handleInputValues}
                        placeholder="Type option B"
                      />
                    </div>
                    {errors.optionB && (
                      <p className="err-message">Required *</p>
                    )}
                  </div>
                  <div className="input-box">
                    <div className="inputs">
                      <input
                        type="checkbox"
                        checked={checkedAnswer.checkedC}
                        onClick={() => handleSelectAnswer("C")}
                      />
                      <input
                        type="text"
                        name="optionC"
                        onChange={handleInputValues}
                        placeholder="Type option C"
                      />
                    </div>
                    {errors.optionC && (
                      <p className="err-message">Required *</p>
                    )}
                  </div>
                  <div className="input-box">
                    <div className="inputs">
                      <input
                        type="checkbox"
                        checked={checkedAnswer.checkedD}
                        onClick={() => handleSelectAnswer("D")}
                      />
                      <input
                        type="text"
                        name="optionD"
                        onChange={handleInputValues}
                        placeholder="Type option D"
                      />
                    </div>
                    {errors.optionD && (
                      <p className="err-message">Required *</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LoadingButton
          onClick={handleSubmitQuestion}
          loading={submitting}
          style={{ background: "#16956c", width: "100%" }}
          variant="contained"
        >
          <span>Submit</span>
        </LoadingButton>
      </ModalWrapper>
    </>
  );
}

export default AddQuestionModal;
