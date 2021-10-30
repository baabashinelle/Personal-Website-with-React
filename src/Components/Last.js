import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Last() {
  return (
    <>
      <footer className="footer footer-sec">
        <div className="content has-text-centered">
          <div className="columns is-gapless mobile-ft">
            <div className="column is-two-fifths"></div>
            <div className="column is-1 is-size-3 is-size-4-mobile pl-6">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/baaba-dampare-93498a210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPczd0MSgT2%2BBRgATLEazoQ%3D%3D"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
            </div>
            <div className="column is-1 is-size-3 is-size-4-mobile">
              <a
                target="_blank"
                href="https://www.instagram.com/shinellle/"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
            </div>
            <div className="column is-1 is-size-3 is-size-4-mobile">
              <a
                target="_blank"
                href="https://github.com/baabashinelle"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Last;
