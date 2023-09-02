import React, { useState } from "react";
import SubjectCard from "../../sharedComponents/addSubjectCard/SubjectCard";
import "./questionBank.css";
import Table from "../../sharedComponents/table/Table";
import { useGetQuestionsQuery } from "../../../redux/features/QuestionsApi";
// import { useGetQuestionsQuery } from "../../../redux/features/QuestionsApi";

const subjectsCardData = [
  {
    subject: "Chemistry",
    totalContribution: 1080,
    myContribution: 90,
  },
  {
    subject: "Physics",
    totalContribution: 1280,
    myContribution: 190,
  },
  {
    subject: "Biology",
    totalContribution: 1030,
    myContribution: 900,
  },
  {
    subject: "Mathematics",
    totalContribution: 180,
    myContribution: 90,
  },
];

const QuestionBank = () => {
  // const [subjectClicked, setSubjectClicked] = useState('');
  const { data, isLoading, isFetching, error } = useGetQuestionsQuery();
  // const questions = useGetQuestionsQuery.selectFromResult(data)
  console.log(data);
  console.log(error);
  return (
    <>
      <h1>Question Bank</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search for question" />
        <div className="search-icon">
          <img src="../assets/icons/search-icon.svg" alt="search-icon" />
        </div>
      </div>
      <div className="subjects-card1">
        {subjectsCardData.map((subject) => (
          <SubjectCard key={subject.subject} cardDetails={subject} />
        ))}
      </div>
      <div className="table">
        <Table
          questions={data}
          loading_questions={isLoading}
          fetchingQuestions={isFetching}
          error={error}
        />
      </div>
    </>
  );
};

export default QuestionBank;
