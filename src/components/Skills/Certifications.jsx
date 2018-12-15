import React from "react";
import GridOverlay from "../UI/GridOverlay";
function Certifications() {
  return (
    <section className="certifications">
      <div className="certifications-content">
        <GridOverlay />
        <div className="certs-header">
          <h3 className="sub-heading">Certification Programs</h3>
          <h1>Currently enrolled or completed</h1>
        </div>
        <div className="certs-programs">
          <span>
            React Nanodegree
            <div className="school">Udacity</div>
          </span>
          <span>
            Mobile Web Specialist
            <div className="school">Google/Udacity</div>
          </span>
          <span>
            CSIS AS Degree
            <div className="school">SLCC</div>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
