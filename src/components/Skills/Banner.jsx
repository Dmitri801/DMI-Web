import React from "react";
const bannerImg = require("../../img/skills-banner.jpg");
function Banner() {
  return (
    <section className="banner">
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          background: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          opacity: "0.3"
        }}
        className="img-overlay"
      />
      <div className="quote-box">
        <div className="quote">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 40 40"
            style={{ fill: "#000000" }}
          >
            <g id="surface1">
              <path
                style={{ fill: "#DFF0FE" }}
                d="M 1.5 33.5 L 1.5 18 C 1.5 11.394531 5.996094 6.734375 12.5 6.507813 L 12.5 9.625 C 8.078125 10.996094 7.5 14.804688 7.5 18 L 7.5 18.5 L 16.5 18.5 L 16.5 33.5 Z "
              />
              <path
                style={{ fill: "#379ae6" }}
                d="M 12 7.035156 L 12 9.261719 C 7.535156 10.847656 7 14.96875 7 18 L 7 19 L 16 19 L 16 33 L 2 33 L 2 18 C 2 11.863281 6.0625 7.480469 12 7.035156 M 13 6 C 6.003906 6 1 11.003906 1 18 L 1 34 L 17 34 L 17 18 L 8 18 C 8 14.503906 8.757813 11.132813 13 10 Z "
              />
              <path
                style={{ fill: "#DFF0FE" }}
                d="M 23.5 33.5 L 23.5 18 C 23.5 11.394531 27.996094 6.734375 34.5 6.507813 L 34.5 9.625 C 30.078125 10.996094 29.5 14.804688 29.5 18 L 29.5 18.5 L 38.5 18.5 L 38.5 33.5 Z "
              />
              <path
                style={{ fill: "#379ae6" }}
                d="M 34 7.035156 L 34 9.261719 C 29.535156 10.847656 29 14.96875 29 18 L 29 19 L 38 19 L 38 33 L 24 33 L 24 18 C 24 11.863281 28.0625 7.480469 34 7.035156 M 35 6 C 28.003906 6 23 11.003906 23 18 L 23 34 L 39 34 L 39 18 L 30 18 C 30 14.503906 30.757813 11.132813 35 10 Z "
              />
            </g>
          </svg>
        </div>
        <div className="review">
          I was really impressed with the responsiveness of the app and the
          professional design you put in the app. Excellent work.
        </div>
        <div className="signature">Recent Udacity code review</div>
      </div>
    </section>
  );
}

export default Banner;
