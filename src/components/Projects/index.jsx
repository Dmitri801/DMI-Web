import React, { Component } from "react";
import PictureGallery from "./PictureGallery";
const bgAbstract = require("../../img/dmi-web-abstract.jpg");
class Projects extends Component {
  state = {
    device: "laptop"
  };

  componentDidMount() {
    if (window.innerWidth < 888) {
      this.setState({ device: "mobile" });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 888) {
        this.setState({ device: "mobile" });
      } else if (window.innerWidth > 888) {
        this.setState({ device: "laptop" });
      }
    });
  }
  render() {
    return (
      <section id="projects" className="projects">
        <div
          style={{
            background: `url(${bgAbstract})`,
            position: "absolute",
            right: "0",
            top: "0",
            backgroundSize: "cover",
            zIndex: "1",
            width: "50%",
            height: "100%",
            opacity: "0.3"
          }}
        />
        <div className="projects_container">
          <div className="projects-header">
            <h3 className="sub-heading">Projects</h3>
            <h1>
              A few recent projects I've worked on include Sparta Sounds - a
              full stack e-commerce website, and Pet Fam - a social app to meet
              your new pet.
            </h1>
          </div>
          <hr className="line-break" />
          <PictureGallery device={this.state.device} />
        </div>
      </section>
    );
  }
}

export default Projects;
