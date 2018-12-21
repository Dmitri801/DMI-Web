import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStackOverflow,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
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
          <li>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={closeSideNav}
              to="home"
              className="nav-link"
            >
              <span>01.</span>
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={closeSideNav}
              to="about"
              className="nav-link"
            >
              <span>02.</span>
              <div>About</div>
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={closeSideNav}
              to="projects"
              className="nav-link"
            >
              <span>03.</span>
              <div>Projects</div>
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={closeSideNav}
              to="skills"
              className="nav-link"
            >
              <span>04.</span>
              <div>Skills</div>
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={closeSideNav}
              to="contact"
              className="nav-link"
            >
              <span>05.</span>
              <div>Contact</div>
            </Link>
          </li>
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
          <a
            aria-label="Link to stack overflow"
            href="https://stackoverflow.com/questions"
          >
            <FontAwesomeIcon className="icon" icon={faStackOverflow} />
          </a>
          <a aria-label="Link to github" href="https://github.com/Dmitri801">
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
          <a
            aria-label="Link to Linked In"
            href="https://www.linkedin.com/in/dmitriysharshiner/"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
