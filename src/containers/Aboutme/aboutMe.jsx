import React from "react";
import {Fade} from "react-reveal";
import "./aboutMe.css";
import Modalm from "../../components/Modalm/modalm";
import {aboutSim} from "../../portfolio";

const Aboutme = () => {
  return (
    <div className="main" id="aboutme">
      <div className="about-main-div">
        <Fade left duration={1000}>
          <div className="about-img-div">
            <img
              src={require("../../illustrations/aboutMe.svg")}
              alt="About Gursimran"
            />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="about-text-div">
            <h1 className="about-head">Education</h1>
            <p className="about-p">
              Click the modal boxes to get the details about my education
            </p>
            {aboutSim.education.map((edu) => {
              return (
                <Modalm
                  name={edu.name}
                  header={edu.header}
                  image={edu.illus}
                  deschead={edu.heading}
                  descten={edu.tenure}
                  desctext={edu.cred}
                  courses={edu.courses}
                  achievements={edu.achievements}
                />
              );
            })}
            <h1 className="about-head">Hobbies</h1>
            <p className="about-p">
              Click the modal boxes to know more about my hobbies.
            </p>
            {aboutSim.hobbies.map((hobby) => {
              return (
                <Modalm
                  name={hobby.name}
                  header={hobby.header}
                  image={hobby.illus}
                  deschead={hobby.heading}
                  descten={hobby.tenure}
                  desctext={hobby.cred}
                  courses={hobby.courses}
                />
              );
            })}
            <h1 className="about-head">Extracurriculars</h1>
            {aboutSim.pos.map((pos) => {
              return (
                <Modalm
                  name={pos.name}
                  header={pos.header}
                  image={pos.illus}
                  about={pos.about}
                  resp={pos.resp}
                />
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Aboutme;
