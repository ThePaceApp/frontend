import React, { useState, useEffect } from "react";
import Navbar from "./components/sharedComponents/navbar/Navbar";
import Sidebar from "./components/sharedComponents/sidebar/Sidebar";
import "./index.css";
import Overview from "./components/creatorDashboard/overview/Overview";
import SubjectCard from "./components/sharedComponents/addSubjectCard/SubjectCard";
import QuestionBank from "./components/creatorDashboard/questionBank/QuestionBank";
import Footer from "./components/sharedComponents/footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/creatorDashboard/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  resetCount,
  addAmount,
} from "./redux/features/counterSlice";
import { useGetApostQuery, useGetPostQuery } from "./redux/features/PostsApi";
import Slider from "./utils/helperFunctions";
import { useGetQuestionsQuery } from "./redux/features/QuestionsApi";
import AddQuestionModal from "./components/sharedComponents/modals/AddQuestionModal";
import SnackBar from "./components/sharedComponents/modals/Snackbar";
import Login from "./components/creatorDashboard/Auth/login/Login";
import RequireAuth from "./components/creatorDashboard/Auth/RequireAuth";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [postNum, setPostNum] = useState(0);
  const navigate = useNavigate();
  // console.log(count);
  if (count < 0) {
    dispatch(resetCount());
  }
  let { data, isLoading } = useGetPostQuery();
  const { singlePost, loadingPost } = useGetApostQuery(postNum, {
    selectFromResult: ({ data, isLoading }) => ({
      singlePost: data,
      loadingPost: isLoading,
    }),
  });

  return (
    <>
      {/* <AddQuestionModal /> */}
      <SnackBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              Welcome to pace app{" "}
              <button onClick={() => navigate("/creator/login")}>Login</button>
            </>
          }
        />

        <Route
          path="/creator"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            path="over-view"
            element={
              <RequireAuth>
                <Overview />
              </RequireAuth>
            }
          />
          <Route
            path="question-bank"
            element={
              <RequireAuth>
                <QuestionBank />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="*" element={<h1>Error 404: Page Not Found</h1>} />
          <Route path="/creator/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
