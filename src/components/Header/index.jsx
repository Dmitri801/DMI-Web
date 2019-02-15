import React, { Component } from "react";
import SideNav from "./SideNav";
import LogoSVG from "../UI/LogoSVG";
import Fade from "react-reveal/Fade";

class Header extends Component {
  state = {
    navAtTop: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.navAnimateOnScroll);
  }

  navAnimateOnScroll = () => {
    if (window.scrollY > 15) {
      this.setState({ navAtTop: false });
    } else if (window.scrollY < 15) {
      this.setState({ navAtTop: true });
    }
  };

  render() {
    const { navAtTop } = this.state;
    return (
      <header className="header">
        <Fade>
          <h1 className="head_logo">
            <LogoSVG />
            <span>dmi.</span>
          </h1>
        </Fade>
        <Fade>
          <div
            style={navAtTop ? {} : { background: "#000" }}
            className="hamburger"
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={this.props.openSideNav}
              aria-label="Side Nav Open"
            >
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#fff" strokeWidth="3" />
                <path d="M0,14 30,14" stroke="#fff" strokeWidth="3" />
                <path d="M0,23 30,23" stroke="#fff" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </Fade>

        <SideNav
          sideNavOpen={this.props.sideNavOpen}
          closeSideNav={this.props.closeSideNav}
        />
      </header>
    );
  }
}

export default Header;
