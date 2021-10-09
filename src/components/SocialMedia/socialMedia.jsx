import React from "react";
import "./socialMedia.css";
import {socialMediaLinks} from "../../portfolio";

const SocialMedia = () => {
  return (
    <div class="social-media-div">
      <a
        href={socialMediaLinks.github}
        class="icon-button github"
        target="_blank">
        <span
          class="iconify icon-button github"
          data-icon="logos:github-icon"></span>
        {/* <i className="fab fa-github"></i> */}
        {/* <span></span> */}
      </a>
      <a
        href={socialMediaLinks.linkedin}
        class="icon-button linkedin"
        target="_blank">
        {/* <i className="icon-linkedin"></i> */}
        <span
          class="iconify icon-button linkedin"
          data-icon="logos:linkedin-icon"></span>
        {/* <span></span> */}
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank">
        <span
          class="iconify icon-button google"
          data-icon="logos:google-gmail"></span>

        {/* <i className="icon-envelope"></i> */}
        {/* <span></span> */}
      </a>
    </div>
  );
};

export default SocialMedia;
