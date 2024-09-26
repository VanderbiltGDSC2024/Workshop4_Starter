// src/components/ProjectCard.js
import React, { useState, useEffect, useRef } from "react";
import { MDCRipple } from "@material/ripple";
import "./ProjectCard.css"; // Import the CSS file

export const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const learnMoreBtnRef = useRef(null);
  const viewCodeBtnRef = useRef(null);

  useEffect(() => {
    if (learnMoreBtnRef.current) {
      MDCRipple.attachTo(learnMoreBtnRef.current);
    }
    if (viewCodeBtnRef.current) {
      MDCRipple.attachTo(viewCodeBtnRef.current);
    }
  }, []);

  const handleLearnMore = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
      <div className="mdc-card project-card">
        <div className="mdc-card__primary-action" tabIndex="0">
          <div className="project-card__image-wrapper">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="project-card__image"
            />
          </div>

          <div className="mdc-card__primary">
            <h2 className="mdc-typography mdc-typography--headline6">
              {project.title}
            </h2>
            <h3 className="mdc-typography mdc-typography--subtitle2">
              {project.summary}
            </h3>
          </div>
          <div className="mdc-card__secondary mdc-typography mdc-typography--body2 project-card__description">
            {expanded
              ? project.description
              : `${project.description.substring(0, 100)}...`}
          </div>
        </div>
        <div className="mdc-card__actions">
          <button
            className="mdc-button mdc-card__action mdc-card__action--button"
            onClick={handleLearnMore}
            ref={learnMoreBtnRef}
          >
            <div className="mdc-button__ripple"></div>
            <span className="mdc-button__label">
              {expanded ? "Show Less" : "Learn More"}
            </span>
          </button>
          <button
            className="mdc-button mdc-card__action mdc-card__action--button right-justify"
            ref={viewCodeBtnRef}
          >
            <div className="mdc-button__ripple"></div>
            <span className="mdc-button__label">
              <a
                href={project.codeSrc}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
