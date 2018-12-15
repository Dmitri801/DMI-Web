import React from "react";
import SkillsChart from "./SkillsChart";
import Certifications from "./Certifications";
import Banner from "./Banner";
function Skills() {
  return (
    <div className="skills-container">
      <section id="skills" className="skills">
        <div className="skills-header">
          <h3 className="sub-head">SKILLS</h3>

          <h2 className="heading">
            Take a look at the skill set of technologies I can bring to your
            team or project.
          </h2>
        </div>
        <div className="chart-container">
          <SkillsChart />
        </div>
      </section>
      <Certifications />
      <Banner />
    </div>
  );
}

export default Skills;
