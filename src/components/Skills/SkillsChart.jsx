import React, { Component } from "react";
import { Bar, Pie } from "react-chartjs-2";
import Bounce from "react-reveal/Bounce";

class SkillsChart extends Component {
  state = {
    mobile: false,
    chartData: {
      labels: [
        "Javascript/ES6",
        "HTML5",
        "CSS3",
        "Python",
        "C#/.NET",
        "AWS",
        "NodeJS/Express",
        "MongoDb",
        "React"
      ],
      datasets: [
        {
          label: "Rating",
          data: [9, 10, 10, 3, 1, 4, 8, 7, 9],
          backgroundColor: "#379ae6"
        }
      ]
    }
  };

  componentDidMount() {
    if (window.innerWidth < 475 && !this.state.mobile) {
      this.setState({ mobile: true });
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 475 && !this.state.mobile) {
        this.setState({ mobile: true });
      } else if (window.innerWidth > 475) {
        this.setState({ mobile: false });
      }
    });
  }

  renderChart = () => {
    const data = this.state.chartData;
    if (!this.state.mobile) {
      return (
        <Bounce delay={500}>
          <Bar
            data={data}
            options={{
              title: {
                display: true,
                text: "Rated from currently learning to efficient",
                fontSize: !this.state.mobile ? 25 : 12
              },
              legend: {
                display: false,
                position: "right"
              },
              animation: {
                duration: 1000
              }
            }}
          />
        </Bounce>
      );
    } else {
      return (
        <Bounce delay={500}>
          <Pie
            data={data}
            options={{
              title: {
                display: true,
                text: "Rated from currently learning to efficient",
                fontSize: !this.state.mobile ? 25 : 12
              },
              legend: {
                display: false,
                position: "right"
              },
              animation: {
                duration: 1000
              }
            }}
          />
        </Bounce>
      );
    }
  };
  render() {
    return this.renderChart();
  }
}

export default SkillsChart;
