import React from "react";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { Landing } from "./components/Landing";
import { ProjectList } from "./components/ProjectList";
import { Socials } from "./components/Socials";
import { TestimonialList } from "./components/TestimonialList";
import { AddTestimony } from "./components/AddTestimony";

function App() {
  return (
    <>
      <div id="home">
        <Landing />
      </div>
      <Navbar />
      <div id="portfolio">
        <ProjectList />
      </div>
      <div id="testimonies">
        <TestimonialList />
      </div>
      <div id="social">
        <Socials />
      </div>
    </>
  );
}

export default App;
