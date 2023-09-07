import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container nav-container">
          <div className="logo">
            <img src="../assets/icons/PaceApplogo.svg" alt="Pace App Logo" />
          </div>
          <div className="nav-icons">
            <div>
              <img src="../assets/icons/settings.svg" alt="settings" />
            </div>
            <div>
              <img
                src="../assets/icons/notification-bell.svg"
                alt="notification bell"
              />
            </div>
            <div>
              <img src="../assets/icons/messages.svg" alt="messages" />
            </div>
            <div>
              <img src="../assets/icons/user-icon.svg" alt="user-icon" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
