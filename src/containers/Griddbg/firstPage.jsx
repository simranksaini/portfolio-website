import React from "react";
import Center from "react-center-tag";
import {Jumbotron, Container} from "react-bootstrap";
import {Icon} from "semantic-ui-react";
import _ from "lodash";
import ColoredGrid from "./gridd";
import "./firstPage.css";
import {greeting, workExperiences} from "../../portfolio";
import emoji from "react-easy-emoji";
import SocialMedia from "../../components/SocialMedia/socialMedia";
import {socialMediaLinks} from "../../portfolio";
import Button from "../../components/Button/button";

const Fpage = () => {
  return (
    <div className="container-fluid">
      <Center>
        <Jumbotron fluid className="jumbotron">
          <Container className="greeting-text-div">
            <h1
              className="greeting-text"
              class="animate__animated animate__pulse">
              {greeting.title}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            {/* <p id="subtitle">{greeting.subTitle}</p>
            <br /> */}
            <p>{greeting.about}</p>
            <p>{greeting.about2}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button
                text="Resume"
                type="resume"
                newTab={true}
                href={greeting.resumeLink}
              />
              <Button
                type="hire"
                text="Hire Me"
                newTab={false}
                href={`mailto:${socialMediaLinks.gmail}`}
              />
            </div>
          </Container>
        </Jumbotron>
      </Center>
      <ColoredGrid />
      <a id="down-arrow" href="#aboutme">
        <Center>
          <Icon name="chevron down"></Icon>
        </Center>
      </a>
    </div>
  );
};

export default Fpage;
