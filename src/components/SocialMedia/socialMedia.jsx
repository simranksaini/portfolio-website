import React from "react";
import "./socialMedia.css";
import {socialMediaLinks} from "../../portfolio";

const SocialMedia = () => {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
    </div>
  );
};

export default SocialMedia;
