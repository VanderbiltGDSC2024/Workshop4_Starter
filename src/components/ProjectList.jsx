import React from "react";
import { ProjectCard } from "./ProjectCard.jsx";
import "./ProjectCard.css";

const projects = [
  {
    title: "Fullstack Application",
    summary: "Python, Angular, AWS",
    description:
      "Designed and implemented a fullstack application using Python for the backend, Angular for the frontend, and AWS for deployment. Features included user authentication, real-time data processing, and responsive design.",
    imageSrc: "./assets/angular.jpg",
    codeSrc: "https://github.com/DanielPHenricks/F1Grid",
  },
  {
    title: "Data Structures Visualizer",
    summary: "JavaScript, D3.js",
    description:
      "Created an interactive web application to visualize various data structures such as linked lists, trees, and graphs. Implemented algorithms for insertion, deletion, and traversal with animated visualizations.",
    imageSrc: "./assets/data.jpg",
    codeSrc: "https://github.com/DanielPHenricks/",
  },
  {
    title: "Machine Learning Model",
    summary: "Python, TensorFlow, Scikit-learn",
    description:
      "Developed a machine learning model for image classification using convolutional neural networks. Achieved 95% accuracy on a custom dataset and deployed the model as a web service.",
    imageSrc: "./assets/ml.jpg",
    codeSrc: "https://github.com/DanielPHenricks/",
  },
];

export const ProjectList = () => {
  return (
    <div style={{ padding: "10vh", margin: "0 auto" }}>
      <h1 className="list-container">My Projects</h1>
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
