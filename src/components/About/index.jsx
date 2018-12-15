import React from "react";
import { Zoom, Fade } from "react-reveal";
const meImg = require("../../img/me.jpg");
function About() {
  return (
    <section id="about" className="about">
      <Zoom bottom>
        <div className="about-header">
          <h3 className="sub-head">WHO I AM</h3>
          <div className="bio">
            <img src={meImg} alt="" />
            <h2>
              My name is Dmitriy, I've lived in Salt Lake City, Utah my whole
              life. I'm passionate about building ground-breaking, and beautiful
              websites{" "}
              <span role="img" aria-label="cool emoji">
                😎
              </span>
            </h2>
          </div>
        </div>
      </Zoom>
      <Fade bottom>
        <div className="about-details">
          <p>
            I want to think <strong>big</strong> and outside the box when
            building my sites and applications. In todays world of development
            providing an intuitive, unique experience for the user, while
            maintaining accessibility and scalability standards, can be the key
            to jumpstarting your site to the highest realms of the interwebs.
          </p>
        </div>
      </Fade>

      <Fade bottom>
        <div className="about-bullet-points">
          <div className="point web">
            <div className="point-head">
              <span>1</span>
              <h1>Web Sites</h1>
            </div>
            <p>
              From fully featured e-commerce sites with an administrator
              dashboard and paypal/stripe checkouts, to beautiful single page
              blog websites, I have experience and the eye for design to help
              you build your next great site.
            </p>
          </div>
          <div className="point pwa">
            <div className="point-head">
              <span>2</span>
              <h1>Progressive Web Apps</h1>
            </div>
            <p>
              Web sites that have features of mobile applications like offline
              capabilities, push notifications, responsiveness, and even the
              ability to download the site to your phones home screen might
              possibly be the future of the web. This website hits a 95 PWA
              rating. But it still has that annoying loading wheel at the
              beginning ..
            </p>
          </div>
          <div className="point mobile">
            <div className="point-head">
              <span>3</span>
              <h1>Mobile Applications</h1>
            </div>
            <p>
              With the emergence of React Native, web developers can not only
              build your website, but also build a fully featured mobile
              application for both Android and iOS devices, for a quarter of the
              cost.
            </p>
          </div>
          <div className="point hosting">
            <div className="point-head">
              <span>4</span>
              <h1>Deployment/Hosting</h1>
            </div>
            <p>
              Using Amazon Web Services, and various other technologies like
              Heroku and Microsoft Azure, I can handle the deployment and
              hosting needed for the site.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
