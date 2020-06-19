import React from "react";
import "./softwareSkills.css";
import {skillsSection} from "../../portfolio";
import {Icon, InlineIcon} from "@iconify/react";
import djangoIcon from "@iconify/icons-logos/django";

const SoftwareSkills = ({icons}) => {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {icons.map((i) => {
          return (
            <li className="software-skill-inline" name={i.skillName}>
              {i.icon ? (
                <div>
                  <span class="iconify" data-icon={i.icon}></span>
                </div>
              ) : null}
              <p>{i.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SoftwareSkills;
