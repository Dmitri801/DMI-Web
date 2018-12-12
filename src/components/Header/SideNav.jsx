import React from "react";

function SideNav({ closeSideNav }) {
  return (
    <div id="side-nav" className="navbar-nav">
      <div className="side-nav-content">
        <div className="side-nav-header">
          <h1>Navigate around</h1>
          <hr />
          <div className="btn-close" onClick={closeSideNav}>
            &times;
          </div>
        </div>
        <ul className="inner-nav">
          <div className="nav-link">
            <span>01.</span>
            <li>Home</li>
          </div>
          <div className="nav-link">
            <span>02.</span>
            <li>About</li>
          </div>
          <div className="nav-link">
            <span>03.</span>
            <li>Work</li>
          </div>
          <div className="nav-link">
            <span>04.</span>
            <li>Skills</li>
          </div>
          <div className="nav-link">
            <span>05.</span>
            <li>Contact</li>
          </div>
        </ul>
        <p className="side-nav-snippet">
          Engaging user interface design for both web , and mobile applications.
        </p>
        <p className="side-nav-snippet">
          Lets build something great <strong>together.</strong>
        </p>
        <div className="side-nav-social">
          <a href="https://stackoverflow.com/questions">
            <i className="fab fa-stack-overflow icon" />
          </a>
          <a href="https://github.com/Dmitri801">
            <i className="fab fa-github icon" />
          </a>
          <a href="https://www.linkedin.com/in/dmitriysharshiner/">
            <i className="fab fa-linkedin icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
