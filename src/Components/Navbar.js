import React from "react";
import { Link } from "react-scroll";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <>
      <nav
        className="navbar is-fixed-top pt-3 pb-3"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <h3
              className="has-text-weight-bold logo-txt navelement is-size-4 is-size-6-mobile pl-6 ml-4"
              style={{ color: "white" }}
            >
              Shinelle
            </h3>
          </div>

          <div className="is-hidden-desktop">
            <MobileNav />
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end"></div>
          <div className="navbar-end"></div>
          <div className="navbar-end pr-6 mr-6 ">
            <Link
              to="header"
              className="navbar-item navelement is-size-5 "
              activeClassName="selectedLink"
              style={{ color: "white" }}
              spy={true}
              smooth={true}
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
            >
              Skills
            </Link>
          </div>
          <div className="navbar-end"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
