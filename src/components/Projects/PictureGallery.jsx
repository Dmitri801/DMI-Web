import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const petFamHome = require("../../img/pet-fam-md.jpg");
const petFamLg = require("../../img/pet-fam-larger.jpg");
const spartaSoundsLg = require("../../img/sparta-soundslg.jpg");

const wyrLg = require("../../img/WYR-lg.jpg");
const bFittrLg = require("../../img/bfittrLg.jpg");
const quizULg = require("../../img/quizu-lg.jpg");
const quizUXl = require("../../img/quizu-xl.jpg");
const restReviewsLg = require("../../img/rest-reviewslg.jpg");
const restReviewsSm = require("../../img/rest-reviews-sm.jpg");
function PictureGallery({ device }) {
  return (
    <div className="gallery-container">
      <div className="column">
        <figure data-aos-delay="200" data-aos="fade-in" data-aos-offset="50">
          <picture>
            <source
              media="(min-width: 650px) and (max-width: 1024px)"
              srcSet={petFamHome}
            />
            <source media="(min-width: 1025px)" srcSet={petFamLg} />
            <source media="(max-width: 888px)" srcSet={petFamLg} />
            <img
              style={device !== "mobile" ? { position: "absolute" } : {}}
              src={petFamHome}
              alt="Pet Fam react native project"
            />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div
                onClick={() =>
                  window.open("https://github.com/Dmitri801/pet_fam")
                }
                data-rh-at="right"
                data-rh="Github"
                className="icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
            <div className="view-site">
              <button
                onClick={() =>
                  window.open("https://expo.io/@dmitriy88/pet-fam")
                }
              >
                View App
              </button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">Pet Fam</h3>
                <span className="sub-heading">React Native</span>
              </div>
            </div>
          </div>
        </figure>
        <figure data-aos-delay="200" data-aos="fade-up" data-aos-offset="500">
          <picture>
            <source media="(min-width: 650px)" srcSet={bFittrLg} />
            <source media="(max-width: 465px)" srcSet={bFittrLg} />
            <img
              style={device !== "mobile" ? { position: "absolute" } : {}}
              src={bFittrLg}
              alt=""
            />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div
                onClick={() =>
                  window.open("https://github.com/Dmitri801/fitter")
                }
                data-rh-at="right"
                data-rh="Github"
                className="icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
            <div className="view-site">
              <button
                onClick={() => window.open("https://bfittr.dmiwebtree.com")}
              >
                View Site
              </button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">bfittr</h3>
                <span className="sub-heading">
                  React/Redux
                  <span>&#8226;</span>
                  NodeJS/Express
                  <span>&#8226;</span>
                  MongoDb
                </span>
              </div>
            </div>
          </div>
        </figure>
        <figure
          data-aos-delay="200"
          data-aos="fade-up"
          data-aos-offset="500"
          className="grow"
        >
          <picture>
            <source media="(min-width: 650px)" srcSet={wyrLg} />
            <source media="(max-width: 465px)" srcSet={wyrLg} />
            <img
              style={device !== "mobile" ? { position: "absolute" } : {}}
              src={wyrLg}
              alt="Would you rather project"
            />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/Dmitri801/udacity_final_wouldyourather"
                  )
                }
                data-rh-at="right"
                data-rh="Github"
                className="icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
            <div className="view-site">
              <button
                onClick={() => window.open("http://would_you_rather.surge.sh")}
              >
                View Site
              </button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">Would You Rather?</h3>
                <span className="sub-heading">
                  ReactJS
                  <span>&#8226;</span>
                  Redux
                  <span>&#8226;</span>
                  Semantic UI
                </span>
              </div>
            </div>
          </div>
        </figure>
      </div>
      <div className="column">
        <figure
          data-aos-delay="200"
          data-aos="fade-in"
          data-aos-offset="50"
          className="grow"
        >
          <picture>
            {/* <source media="(min-width: 650px)" srcSet={spartaSoundsLg} /> */}
            <source media="(max-width: 1023px)" srcSet={spartaSoundsLg} />
            <source media="(min-width: 1024px)" srcSet={spartaSoundsLg} />
            <img
              style={
                device !== "mobile"
                  ? { position: "absolute", left: "-40px", width: "110%" }
                  : {}
              }
              src={spartaSoundsLg}
              alt="Sparta Sounds Project"
            />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div
                onClick={() =>
                  window.open("https://github.com/Dmitri801/spartasounds")
                }
                data-rh-at="right"
                data-rh="Github"
                className="icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
            <div className="view-site">
              <button
                onClick={() =>
                  window.open(
                    "https://sparta-sounds-notevenbeta.herokuapp.com/"
                  )
                }
              >
                View Site
              </button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">Sparta Sounds</h3>
                <span className="sub-heading">
                  React
                  <span>&#8226;</span>NodeJS
                  <span>&#8226;</span>
                  Express
                  <span>&#8226;</span>
                  MongoDb
                </span>
              </div>
            </div>
          </div>
        </figure>
        <figure data-aos-delay="200" data-aos="fade-up" data-aos-offset="500">
          <picture>
            <source media="(min-width: 650px)" srcSet={quizUXl} />
            <source media="(max-width: 465px)" srcSet={quizUXl} />
            <img
              style={device !== "mobile" ? { position: "absolute" } : {}}
              src={quizULg}
              alt="QuizU Project"
            />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div
                onClick={() =>
                  window.open("https://github.com/Dmitri801/quizU")
                }
                data-rh-at="right"
                data-rh="Github"
                className="icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
            <div className="view-site">
              <button
                onClick={() => window.open("https://expo.io/@dmitriy88/quizu")}
              >
                View App
              </button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">QuizU</h3>
                <span className="sub-heading">
                  React Native
                  <span>&#8226;</span>
                  Redux
                </span>
              </div>
            </div>
          </div>
        </figure>
        <figure data-aos-delay="200" data-aos="fade-up" data-aos-offset="500">
          <picture>
            <source media="(min-width: 650px)" srcSet={restReviewsSm} />
            <source media="(max-width: 465px)" srcSet={restReviewsSm} />
            <img
              style={device !== "mobile" ? { position: "absolute" } : {}}
              src={restReviewsLg}
              alt="Restaurant Reviews Project"
            />
          </picture>

          <div className="project-detail">
            <div className="github">
              <div
                onClick={() =>
                  window.open("https://github.com/Dmitri801/MWS-RReviews_Final")
                }
                data-rh-at="right"
                data-rh="Github"
                className="icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
            <div className="view-site">
              <button
                onClick={() => window.open("https://restaurantreviews.live")}
              >
                View Site
              </button>
            </div>
            <div className="details">
              <div className="dets-container">
                <h3 className="heading">Restaurant Reviews</h3>
                <span className="sub-heading">
                  HTML5
                  <span>&#8226;</span>
                  CSS3
                  <span>&#8226;</span>
                  Javascript/ES6
                </span>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default PictureGallery;
