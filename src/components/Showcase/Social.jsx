import React from "react";
import Fade from "react-reveal/Fade";

function Social() {
  return (
    <Fade delay={2000}>
      <div className="social">
        <a
          data-rh-at="right"
          data-rh="Stack Overflow"
          href="https://stackoverflow.com/users/9613899/dmitriy?tab=profile"
        >
          <i className="fab fa-stack-overflow icon" />
        </a>
        <a
          data-rh-at="right"
          data-rh="Github"
          href="https://github.com/Dmitri801"
        >
          <i className="fab fa-github icon" />
        </a>
        <a
          data-rh-at="right"
          data-rh="Linked In"
          href="https://www.linkedin.com/in/dmitriysharshiner/"
        >
          <i className="fab fa-linkedin icon" />
        </a>
      </div>
    </Fade>
  );
}

export default Social;
