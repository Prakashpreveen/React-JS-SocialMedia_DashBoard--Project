import React, { Children } from "react";
import "../Styles/Header.css";

function Header({ children }) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social Media Dashboard</h1>
            <p className="header-total">Total Followers : 105, 004</p>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
