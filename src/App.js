import React, { Component } from "react";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import ReactHintFactory from "react-hint";
import "react-hint/css/index.css";

const ReactHint = ReactHintFactory(React);
class App extends Component {
  render() {
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
        <Header />
        <Showcase />
      </div>
    );
  }
}

export default App;
