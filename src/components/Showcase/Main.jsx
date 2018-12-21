import React from "react";

import { scroller } from "react-scroll";

function Main() {
  const handleScrollTo = element => {
    scroller.scrollTo(element, {
      duration: 500,
      offset: 50,
      smooth: true
    });
  };

  return (
    <div className="main_content">
      <h1 className="main_logo">DMI Web Design</h1>
      <p className="subheading">
        Modern web design. Immaculate user experience.
      </p>
      <div className="btn-group">
        <button
          onClick={() => handleScrollTo("projects")}
          className="btn btn-about"
        >
          PROJECTS
        </button>
        <button
          onClick={() => handleScrollTo("contact")}
          className="btn btn-talk"
        >
          LETS TALK
        </button>
      </div>
    </div>
  );
}

export default Main;
