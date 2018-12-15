import React, { Component } from "react";
import AOS from "aos";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import ReactHintFactory from "react-hint";
import LoadingDots from "./components/UI/LoadingDots";
import Backdrop from "./components/UI/Backdrop";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "react-hint/css/index.css";
import "aos/dist/aos.css";

const ReactHint = ReactHintFactory(React);

class App extends Component {
  state = {
    loading: true,
    sideNavOpen: false
  };

  componentDidMount() {
    this.loadSite(() => {
      AOS.init({
        disable: "mobile"
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.sideNavOpen !== this.state.sideNavOpen) {
      this.updateBodyScroll(this.state.sideNavOpen);
    }
  }

  updateBodyScroll = navOpen => {
    if (navOpen) {
      document.getElementById("bod").style.overflow = "hidden";
    } else {
      document.getElementById("bod").style.overflow = "visible";
    }
  };

  loadSite = (callback, time) => {
    callback();
    setTimeout(() => {
      this.setState({ loading: false });
    }, time);
  };
  openSideNav = () => {
    this.setState({ sideNavOpen: true });
  };

  closeSideNav = () => {
    this.setState({ sideNavOpen: false });
  };
  renderPage = () => {
    const { loading } = this.state;
    if (loading) {
      return (
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <LoadingDots />;
        </div>
      );
    } else {
      return (
        <div className="App">
          <ReactHint autoPosition events delay={{ show: 100, hide: 100 }} />
          <ReactHint
            persist
            attribute="data-custom"
            className="custom-hint"
            events={{ click: true }}
            onRenderContent={this.onRenderContent}
            ref={ref => (this.instance = ref)}
          />
          {this.state.sideNavOpen && (
            <Backdrop closeSideNav={this.closeSideNav} />
          )}
          <Header
            openSideNav={this.openSideNav}
            closeSideNav={this.closeSideNav}
            sideNavOpen={this.state.sideNavOpen}
          />
          <Showcase />
          <main className="main-container">
            <About />
            <Projects />
            <Skills />

            <Contact />
          </main>
          <Footer />
        </div>
      );
    }
  };
  render() {
    return this.renderPage();
  }
}

export default App;
