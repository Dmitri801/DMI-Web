import React from "react";
import { Zoom, Fade } from "react-reveal";
import { Link } from "react-scroll";
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
              My name is Dmitriy, I'm a full stack web developer living in Salt
              Lake City, UT. Let me tell you a bit about my{" "}
              <span>DEVosophy.</span>
            </h2>
          </div>
        </div>
      </Zoom>
      <Fade bottom>
        <div className="about-details">
          <p>
            I want to think <strong>big</strong> and efficient when building my
            sites and applications. I believe in providing an intuitive, and
            unique experience for the user, while also maintaining accessibility
            and performance standards. That just might be the key to
            jumpstarting your site to the highest realms of the interwebs.
            <span className="border-bottom" />
          </p>
          <h3>What can I do for you?</h3>
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
              From full stack e-commerce sites with an administrator dashboard
              and a paypal checkout, to beautiful single page blog websites. I
              have experience and the eye for design to help you build your next
              great site, front to back.
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
              ability to download the site to your phones home screen could be
              the future of the web. This website hits a perfect 100 PWA rating.
              And you can even download it if you really want too...
            </p>
          </div>
          <div className="point mobile">
            <div className="point-head">
              <span>3</span>
              <h1>Mobile Applications</h1>
            </div>
            <p>
              Take a{" "}
              <Link
                style={{ color: "#1179c7", cursor: "pointer" }}
                spy={true}
                smooth={true}
                duration={500}
                to="projects"
              >
                glance
              </Link>{" "}
              at a couple different mobile applications i've built using React
              Native. Now, with just Javascript, the power is there to build
              websites and native apps for both iOS and Android.
            </p>
          </div>
          <div className="point hosting">
            <div className="point-head">
              <span>4</span>
              <h1>Deployment/Hosting</h1>
            </div>
            <p>
              Using Amazon Web Services, and various other technologies like
              Heroku and Netlify, I can handle the deployment and hosting needed
              for the site.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
