import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./AppHeader.css"; // eslint-disable-line

const AppHeader = props => {
  return (
    <header className="app-header">
      <div className="app-title-wrapper">
        <div className="app-title-wrapper">
          <div className="app-left-nav">
            <img src={logo} className="app-logo" alt="logo" />
            <div className="app-title-text">
              <h1 className="app-title">Groupo 4</h1>
              <p className="app-intro">2020 | Applicacion de necesidades</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
