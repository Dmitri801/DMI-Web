import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStackOverflow,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

function Social() {
  return (
    <Fade>
      <div className="social">
        <a
          aria-label="Link to stack overflow"
          data-rh-at="right"
          data-rh="Stack Overflow"
          href="https://stackoverflow.com/users/9613899/dmitriy?tab=profile"
        >
          <FontAwesomeIcon className="icon" icon={faStackOverflow} />
        </a>
        <a
          aria-label="Link to Github"
          data-rh-at="right"
          data-rh="Github"
          href="https://github.com/Dmitri801"
        >
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
        <a
          aria-label="Link to Linked In"
          data-rh-at="right"
          data-rh="Linked In"
          href="https://www.linkedin.com/in/dmitriysharshiner/"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
      </div>
    </Fade>
  );
}

export default Social;
