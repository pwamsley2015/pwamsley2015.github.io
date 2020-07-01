import React from "react";
import Image from "react-bootstrap/Image";
import GithubIcon from "../images/github.png";
import InstaIcon from "../images/insta.png";
import SidebarImage from "../images/logo192.png";
import { ABOUT } from "../index";

export default class SideBarContent extends React.Component {
  render() {
    return (
      <div
        className="sidebar"
        style={{
          "text-align": "center",
        }}
      >
        <Image src={SidebarImage} roundedCircle />
        <h3>{ABOUT.HEADLINE}</h3>
        {ABOUT.INTRO}
        <br />
        <p>
          I built this website with React. See the code{" "}
          <a
            href="https://github.com/pwamsley2015/pwamsley2015.github.io"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <p />
        <a href="https://www.github.com/pwamsley2015" target="_blank">
          <Image src={GithubIcon} />
        </a>
        <a href="https://www.instagram.com/patrick_wamsley/" target="_blank">
          <Image src={InstaIcon} roundedCircle />
        </a>
      </div>
    );
  }
}
