import React, { Component } from "react";
import Main from "./Main";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import Social from "./Social";
const showcaseBg = require("../../img/dmi-web-bg.jpg");
class Showcase extends Component {
  render() {
    return (
      <section
        id="home"
        style={{
          background: `linear-gradient(223.53deg, rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.43), rgba(0, 3, 12, 0.75)), url(${showcaseBg})`,
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          backgroundAttachment: "fixed"
        }}
        className="showcase"
      >
        <Fade bottom>
          <Main />
        </Fade>
        <div className="bottom_container">
          <Fade>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <div className="mouse" />
            </Link>
          </Fade>

          <Social />
        </div>
      </section>
    );
  }
}

export default Showcase;
