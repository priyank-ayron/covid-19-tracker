import React from "react";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Contact Priyank Agarwal at:</h3>
            <div className="contact_details">
              <p className="each_detail">
                <a
                  href="https://www.linkedin.com/in/priyank-agarwal-iiita/"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon></LinkedInIcon>
                  <p>LinkedIn</p>
                </a>
              </p>
              <p className="each_detail">
                <a
                  href="https://github.com/priyank-ayron/"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon></GitHubIcon>
                  <p>Github</p>
                </a>
              </p>
              <p className="each_detail">
                <a
                  href="https://www.facebook.com/priyank.agarwal.731/"
                  target="_blank"
                  className="display_contact"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon></FacebookIcon>
                  <p>Facebook</p>
                </a>
              </p>
              <li className="display_contact">
                <PhoneIcon></PhoneIcon>
                <p>+91-6386947948</p>
              </li>
              <li className="display_contact">
                <EmailIcon></EmailIcon>
                <p>priyank.ayron@gmail.com</p>
              </li>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
