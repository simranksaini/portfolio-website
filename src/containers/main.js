import React, {Component} from "react";
import Fpage from "./Griddbg/firstPage";
import Mynavbar from "./Navbar/navbar";
import Aboutme from "./Aboutme/aboutMe";
import Skills from "./Skills/skills";
import Projects from "./Projects/project";
class Main extends Component {
  render() {
    return (
      <div>
        <Mynavbar />
        <Fpage />
        <Aboutme />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default Main;
