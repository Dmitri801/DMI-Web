import React from "react";
import { Link } from "react-scroll";
function SideNav({ closeSideNav, sideNavOpen }) {
  return (
    <div
      style={
        sideNavOpen
          ? { transform: "translateX(0)" }
          : { transform: "translateX(100%)" }
      }
      id="side-nav"
      className="navbar-nav"
    >
      <div className="side-nav-content">
        <div className="side-nav-header">
          <h1
            style={
              sideNavOpen
                ? {
                    transition: "all 0.5s ease-out",
                    transitionDelay: "500ms",
                    opacity: "1",
                    transform: "translateY(0)"
                  }
                : {
                    transform: "translateX(50px)",
                    opacity: "0"
                  }
            }
          >
            Navigate around
          </h1>
          <hr
            style={
              sideNavOpen
                ? {
                    transition: "all 0.5s ease-out",
                    transitionDelay: "500ms",
                    opacity: "1",
                    transform: "translateY(0)"
                  }
                : {
                    transform: "translateX(50px)",
                    opacity: "0"
                  }
            }
          />
          <div className="btn-close" onClick={closeSideNav}>
            &times;
          </div>
        </div>
        <ul
          style={
            sideNavOpen
              ? {
                  transition: "all 0.5s ease-out",
                  transitionDelay: "500ms",
                  opacity: "1",
                  transform: "translateY(0)"
                }
              : {
                  transform: "translateX(50px)",
                  opacity: "0"
                }
          }
          className="inner-nav"
        >
          <Link
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={closeSideNav}
            to="home"
            className="nav-link"
          >
            <span>01.</span>
            <li>Home</li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={closeSideNav}
            to="about"
            className="nav-link"
          >
            <span>02.</span>
            <li>About</li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={closeSideNav}
            to="projects"
            className="nav-link"
          >
            <span>03.</span>
            <li>Projects</li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={closeSideNav}
            to="skills"
            className="nav-link"
          >
            <span>04.</span>
            <li>Skills</li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={closeSideNav}
            to="contact"
            className="nav-link"
          >
            <span>05.</span>
            <li>Contact</li>
          </Link>
        </ul>
        <p
          style={
            sideNavOpen
              ? {
                  transition: "all 0.5s ease-out",
                  transitionDelay: "500ms",
                  opacity: "1",
                  transform: "translateY(0)"
                }
              : {
                  transform: "translateX(50px)",
                  opacity: "0"
                }
          }
          className="side-nav-snippet"
        >
          Engaging user interface design for both web , and mobile applications.
        </p>

        <div
          style={
            sideNavOpen
              ? {
                  transition: "all 0.5s ease-out",
                  transitionDelay: "500ms",
                  opacity: "1",
                  transform: "translateY(0)"
                }
              : {
                  transform: "translateX(50px)",
                  opacity: "0"
                }
          }
          className="side-nav-social"
        >
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
