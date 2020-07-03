import React from "react";
import Image from "react-bootstrap/Image";
import GithubIcon from "../images/github.png";
import InstaIcon from "../images/insta.png";
import SidebarImage from "../images/logo192.png";
import LinkedInIcon from "../images/in.png";
import { Container, Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ABOUT = {
  INTRO:
    "Welcome! I'm primarly interested in backend development, but always looking to learn new tech for new problems. Currently nerding out about lambda calculus and service system architectures. Thanks for stopping by!",
  EMPLOYMENT: "Currently looking for employment.",
  BUILT: "This website was built with React.",
  HEADLINE: "Software Developer",
  EMAIL: "pwamsley2019@gmail.com",
  GITHUB: "pwamsley2015.github.com",
  INSTA: "https://www.instagram.com/patrick_wamsley/",
  LINKED_IN: "https://www.linkedin.com/in/patrick-wamsley-32216b108/",
  PERSONAL:
    "If I'm not at the keyboard or white board, I'm probably listening to music, cooking, or lifting weights... or listening to music while cooking in between sets of lifting... or playing chess.",
  TITLE: "BS, Computer Science",
  SBU: "Stony Brook University",
};

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
        <h3 style={{ lineHeight: "50%", marginBottom: "0" }}>
          {ABOUT.HEADLINE}{" "}
        </h3>
        <br />
        <h4>
          {ABOUT.TITLE} <br />
        </h4>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 25, hide: 25 }}
          overlay={renderTooltip}
        >
          <h4>{ABOUT.SBU}</h4>
        </OverlayTrigger>
        <hr />
        <span className="sidebar_text">{ABOUT.INTRO}</span>
        <br />
        <hr />
        <p className="sidebar_text">
          I built this website with React. See the code{" "}
          <a
            href="https://github.com/pwamsley2015/pwamsley2015.github.io"
            target="_blank"
          >
            here
          </a>
          .
        </p>
        <hr />
        <Container>
          <Row>
            <Col>
              <a href={ABOUT.LINKED_IN} target="_blank">
                <Image src={LinkedInIcon} />
              </a>
            </Col>
            <Col>
              <a href={ABOUT.GITHUB} target="_blank">
                <Image src={GithubIcon} />
              </a>
            </Col>
          </Row>
        </Container>
        <hr />
        <div className="sidebar_text">
          {ABOUT.PERSONAL}
          <br />
          <br />
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 50, hide: 50 }}
            overlay={renderPowerlifterBtw}
          >
            <a href={ABOUT.INSTA} target="_blank">
              <Image src={InstaIcon} roundedCircle />
            </a>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}

function renderTooltip(props) {
  return (
    <Tooltip id="code_tooltip" {...props}>
      What's a Seawolf?
    </Tooltip>
  );
}

function renderPowerlifterBtw(props) {
  return (
    <Tooltip id="code_tooltip" {...props}>
      Powerlifter btw
    </Tooltip>
  );
}
