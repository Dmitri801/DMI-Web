import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Bounce from "react-reveal/Bounce";

class SkillsChart extends Component {
  state = {
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
  render() {
    const data = this.state.chartData;
    return (
      <Bounce delay={500}>
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: "Rated from currently learning to efficient",
              fontSize: 25
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
}

export default SkillsChart;
