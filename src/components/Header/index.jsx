import React, { Component } from "react";
import SideNav from "./SideNav";
import LogoSVG from "../UI/LogoSVG";
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

  openSideNav = () => {
    document.getElementById("side-nav").style.transform = "translateX(0)";
  };

  closeSideNav = () => {
    document.getElementById("side-nav").style.transform = "translateX(100%)";
  };
  render() {
    const { navAtTop } = this.state;
    return (
      <header className="header">
        <h1 className="head_logo">
          <LogoSVG />
          <span>dmi.</span>
        </h1>
        <div
          style={navAtTop ? {} : { background: "#000" }}
          className="hamburger"
        >
          <a onClick={this.openSideNav} href="#!">
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" strokeWidth="3" />
              <path d="M0,14 30,14" stroke="#fff" strokeWidth="3" />
              <path d="M0,23 30,23" stroke="#fff" strokeWidth="3" />
            </svg>
          </a>
        </div>
        <SideNav closeSideNav={this.closeSideNav} />
      </header>
    );
  }
}

export default Header;
