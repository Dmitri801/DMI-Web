import React from "react";
import BackToTop from "./BackToTop";
import { Link } from "react-scroll";
function Footer() {
  return (
    <footer className="footer">
      <div className="inner-footer-container">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="home"
          className="back-to-top"
        >
          <BackToTop />
        </Link>
        <h1>DMI Web Design</h1>
        <div className="copyright">Copyright &copy; 2019</div>
      </div>
    </footer>
  );
}

export default Footer;
