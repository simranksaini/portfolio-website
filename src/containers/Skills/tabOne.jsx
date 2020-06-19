import React from "react";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import "./tabOne.css";
import SoftwareSkills from "../../components/SoftwareSkills/softwareSkills";

const TabOne = () => {
  return (
    <div className="main skills-main-div">
      <Fade left duration={1000}>
        <div className="skills-text-div">
          <h1 className="skills-heading">{skillsSection.title} </h1>

          {/* <p className="subTitle skills-text-subtitle">
            {skillsSection.subTitle}
          </p> */}
          <div className="textt">
            {skillsSection.skills.map((skill) => {
              return (
                <div>
                  {" "}
                  <h4
                    className="subTitle skills-text"
                    style={{
                      marginBlockEnd: "0.5rem",
                      marginBlockStart: "1rem",
                      fontWeight: "bold",
                    }}>
                    {skill.aboutSkill}
                  </h4>
                  <em className="descrip">{skill.aboutSub}</em>
                  <br />
                  <br />
                  {skill.softwareIcons ? (
                    <SoftwareSkills icons={skill.softwareIcons} />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
      <Fade right duration={1000}>
        <div className="skills-image-div">
          <img
            alt="skills"
            src={require("../../illustrations/coding.svg")}></img>
        </div>
      </Fade>
    </div>
  );
};

export default TabOne;
