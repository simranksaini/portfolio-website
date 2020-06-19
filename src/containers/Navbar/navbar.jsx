import "./navbar.css";
import {Container} from "react-bootstrap";
import {Menu} from "semantic-ui-react";
import Center from "react-center-tag";
import {greeting, workExperiences} from "../../portfolio";

import classnames from "classnames";

import React, {Component} from "react";

class Mynavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const {prevScrollpos} = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <Container>
        <Center>
          <nav
            className={classnames("navb", {
              "navb--hidden": !this.state.visible,
            })}>
            <a className="logo" href="">
              <span className="grey-color"> &lt;</span>
              <span className="logo-name">{greeting.username}</span>
              <span className="grey-color">/&gt;</span>
            </a>

            <a className="menuList" href="#aboutme">
              About Me
            </a>
            <a className="menuList" href="#skills">
              Skills
            </a>
            <a className="menuList" href="#projects">
              Projects
            </a>
          </nav>
        </Center>
      </Container>
    );
  }
}

export default Mynavbar;

//  <Menu
//    secondary
//    className={classnames("navb", {
//      "nav--hidden": !this.state.visible,
//    })}>
//    <Menu.Item>
//      <img src="https://react.semantic-ui.com/logo.png" />
//    </Menu.Item>
//    <Menu.Menu position="right">
//      <Menu.Item
//        name="features"
//        className="mitem"
//        //   active={activeItem === "features"}
//        //   onClick={this.handleItemClick}
//      >
//        Features
//      </Menu.Item>

//      <Menu.Item
//        name="testimonials"
//        className="mitem"
//        //   active={activeItem === "testimonials"}
//        //   onClick={this.handleItemClick}
//      >
//        Testimonials
//      </Menu.Item>

//      {/* <Menu.Item
//           name="sign-in"
//           active={activeItem === "sign-in"}
//           onClick={this.handleItemClick}>
//           Sign-in
//         </Menu.Item> */}
//    </Menu.Menu>
//  </Menu>;
