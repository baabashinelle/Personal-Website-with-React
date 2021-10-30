import React from "react";
import { Link } from "react-scroll";

function MobileLinks(props) {
  return (
    <>
      <div className="navbar-menu mobile-menu">
        <div
          className="navbar-end pr-6 mr-6 "
          data-aos="fade-in"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <Link
            to="header"
            className="navbar-item navelement is-size-5 "
            activeClassName="selectedLink"
            style={{ color: "white" }}
            spy={true}
            smooth={true}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Home
          </Link>

          <Link
            to="about"
            className="navbar-item navelement is-size-5 "
            activeClassName="selectedLink"
            spy={true}
            smooth={true}
            style={{ color: "white" }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            About Me
          </Link>

          <Link
            to="projects"
            className="navbar-item navelement is-size-5 "
            activeClassName="selectedLink"
            style={{ color: "white" }}
            spy={true}
            smooth={true}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Projects
          </Link>

          <Link
            to="skills"
            className="navbar-item navelement is-size-5 "
            activeClassName="selectedLink"
            style={{ color: "white" }}
            spy={true}
            smooth={true}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            Skills
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileLinks;
