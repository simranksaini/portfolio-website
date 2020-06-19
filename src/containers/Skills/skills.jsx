import React from "react";
import {Tab} from "semantic-ui-react";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import "./skills.css";
const Skills = () => {
  const panes = [
    {
      menuItem: "Skills",
      render: () => (
        <Tab.Pane>
          <TabOne />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Certifications",
      render: () => (
        <Tab.Pane>
          <TabTwo />
        </Tab.Pane>
      ),
    },
  ];

  return <Tab className="tab-start" id="skills" panes={panes} />;
};

export default Skills;
