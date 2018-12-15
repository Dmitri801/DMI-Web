import React, { Component } from "react";
import Main from "./Main";

import Fade from "react-reveal/Fade";
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
      </section>
    );
  }
}

export default Showcase;
