import React, {useEffect, useState} from "react";
import {Fade} from "react-reveal";
import "./project.css";
import Modalm from "../../components/Modalm/modalm";
import {aboutSim} from "../../portfolio";
import {items} from "../../portfolio";
import {Card} from "semantic-ui-react";
import emoji from "react-easy-emoji";

const Projects = () => {
  const mediaMatch = window.matchMedia("(min-width: 768px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  var styles = {
    card: (matches) => ({
      backgroundColor: matches.matches ? "green" : "red",
    }),
  };

  function changeBackground(e) {
    e.target.style.textShadow = "rgba(0, 0, 0, 0.29) 0 2px 2px";
    e.target.style.transition = "ease-in 0.3s";
  }
  function defbg(e) {
    e.target.style.textShadow = "rgba(0, 0, 0, 0.2) 0 3px 3px";

    e.target.style.transition = "ease-in 0.3s";
  }
  function bgchange(e) {
    e.target.style.color = "green";

    e.target.style.transition = "ease-in 0.3s";
  }

  return (
    <div className="main" id="projects">
      <div className="proj-main-div">
        <Fade left duration={1000}>
          <div className="proj-img-div">
            <img
              src={require("../../illustrations/coder.svg")}
              alt="Coder Gursimran"
            />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="proj-text-div">
            <h1 className="proj-head">Projects</h1>
            {/* <p className="proj-p">
              Click on the project card to view the project repository
            </p> */}
            <Card.Group
              itemsPerRow={2}
              className="cards"
              onMouseOver={changeBackground}
              onMouseOut={defbg}
              onChange={bgchange}
              items={items}
            />
          </div>
        </Fade>
      </div>
      <Fade bottom duration={1000} distance="5px">
        <div className="footer-div">
          <p className="footer-text">
            {emoji("Made with ReactJS and ❤️ by Gursimran")}
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
