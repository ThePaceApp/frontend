import React from "react";
import "./overview.css";
import { useGetUserQuery } from "../../../redux/features/UserApi";
const Overview = () => {
  const {
    data: user,
    isLoading: loading_details,
    error: error_fetching_user,
  } = useGetUserQuery();
  // console.log(user);
  // console.log(error_fetching_user);
  const userData = user?.data;
  const creatorProfileStats = userData?.creatorProfileStats[0];
  const statsByState = creatorProfileStats?.statsByState
  // console.log(creatorProfileStats);

  return (
    <div className="overview">
      <h1 className="header">Overview</h1>
      <div className="content jc-b">
        <div className="user-details flex flex-column jc-b align-c">
          <div className="img flex">
            <img src="../assets/images/user.svg" alt="user" />
          </div>
          <div className="details">
            <span>
              {userData?.creatorDetails?.firstName}{" "}
              {userData?.creatorDetails.lastName}
            </span>
            <p>{userData?.creatorDetails?.phoneNumber}</p>
            <a href="#">{userData?.creatorDetails?.email}</a>
          </div>
        </div>
        <div className="stats">
          <h3>Stats</h3>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="4.5"
                  fill="#F9F9F9"
                  stroke="#A9AEB8"
                />
              </svg>
            </span>
            <p>
              Total Questions Contributed:{" "}
              <strong>{creatorProfileStats?.totalQuestions || 0}</strong>
            </p>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="4.5"
                  fill="#30E0A8"
                  stroke="#16956C"
                />
              </svg>
            </span>
            <p>
              Approved:{" "}
              <strong>{ statsByState && statsByState[2]?.count || 0}</strong>
            </p>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="4.5"
                  fill="#F2C94C"
                  stroke="#FFC000"
                />
              </svg>
            </span>
            <p>
              Pending: <strong>{statsByState && statsByState[1]?.count || 0}</strong>
            </p>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="4.5"
                  fill="#EB5757"
                  stroke="#FF0000"
                />
              </svg>
            </span>
            <p>
              Rejected: <strong>{statsByState && statsByState[0]?.count || 0}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
