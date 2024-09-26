import React from "react";
import "./Landing.css";

export const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <img
          src="src/assets/kowalski.png"
          alt="Headshot"
          className="headshot"
        />
        <div className="landing-text">
          <h1>Your Name</h1>
          <p>Student and Penguin</p>
          <p>Welcome to my portfolio!</p>
        </div>
      </div>
    </div>
  );
};
