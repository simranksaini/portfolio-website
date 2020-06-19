import React from "react";
import {certificates} from "../../portfolio";
import {Fade} from "react-reveal";
import Modalm from "../../components/Modalm/modalm";
import "./tabTwo.css";
const TabTwo = () => {
  return (
    <div className="certis-main-div">
      <Fade left duration={1000}>
        <div className="certis-text-div">
          <h1 className="certis-heading">{certificates.title} </h1>
          {/* <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p> */}
          <div style={{paddingLeft: "2rem"}}>
            {certificates.certis.map((certi) => {
              return (
                <Modalm
                  name={certi.certiName}
                  header={certi.certiName}
                  certificate={certi.certificate}
                />
              );
            })}
          </div>
        </div>
      </Fade>
      <Fade right duration={1000}>
        <div className="certis-image-div">
          <img
            alt="certifications"
            src={require("../../illustrations/certificationsOrSkills.svg")}></img>
        </div>
      </Fade>
    </div>
  );
};

export default TabTwo;
