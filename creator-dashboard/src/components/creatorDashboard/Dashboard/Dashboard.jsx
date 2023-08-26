import React, { useState, useEffect } from "react";
import Navbar from "../../sharedComponents/navbar/Navbar";
import Footer from "../../sharedComponents/footer/Footer";
import Overview from "../overview/Overview";
import QuestionBank from "../questionBank/QuestionBank";
import Sidebar from "../../sharedComponents/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const sideBarLinks = [
  {
    id: 1,
    link: "over-view",
    text: "Overview",
  },
  {
    id: 2,
    link: "question-bank",
    text: "Question Bank",
  },

  {
    id: 3,
    link: "/creator/login",
    text: "Sign Out",
  },
];

const Dashboard = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="content-container">
          <div className="sideNav">
            <Sidebar linkText={sideBarLinks} scroll={scroll} />
          </div>
          <div className={scroll ? "content-tabs adjust" : "content-tabs"}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
