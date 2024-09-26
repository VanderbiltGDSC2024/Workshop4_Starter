import React from "react";
import "./Socials.css";

export const Socials = () => {
  return (
    <div className="socials-div">
      <h1>Socials</h1>
      <div className="connect">
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="media"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn Profile"
            width="50"
            height="50"
          />
        </a>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="media"
        >
          <img
            src="assets/github.png"
            alt="GitHub Profile"
            width="50"
            height="50"
          />
        </a>
      </div>
    </div>
  );
};
