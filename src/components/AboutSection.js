import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-animated-slider/build/horizontal.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SbuImg from "../images/sbu.png";
import "../index.css";

const LANGS = ["Java", "C", "Python", "SQL", "JavaScript", "C++"];
const TECH = ["React", "HTML", "Git", "JSON", "Maven", "LaTeX"];
const TOOLS = [
  "GitHub",
  "UML Diagrams",
  "Eclipse",
  "IntelliJ IDEA",
  "Google Sheets",
  "Excel",
  "Slack",
  "Trello",
  "Notion",
];

export default class AboutSection extends React.Component {
  render() {
    const langs = [];
    for (let i = 0; i < LANGS.length; i++) {
      langs.push(LANGS[i] + "\n");
    }

    const tools = [];
    for (let i = 0; i < TOOLS.length; i++) {
      tools.push(TOOLS[i] + "\n");
    }

    const tech = [];
    for (let i = 0; i < TECH.length; i++) {
      tech.push(TECH[i] + "\n");
    }

    return (
      <div
        className="about_skils"
        style={{
          "font-size": "2vmin",
        }}
      >
        <Container>
          <Row>
            {/**Langs */}
            <Col>
              <Row>
                <Col>
                  <h3>Languages</h3>
                </Col>
                <Col />
                <Col>{langs}</Col>
              </Row>
            </Col>
            <Col>
              {/**Tech */}
              <Row>
                <Col>
                  <h3>Tech</h3>
                </Col>
                <Col />
                <Col>{tech}</Col>
              </Row>
            </Col>
            {/**Tools */}
            <Col>
              <Row>
                <Col>
                  <h3>Tools</h3>
                </Col>
                <Col />
                <Col>{tools}</Col>
              </Row>
            </Col>
            <Col>
              {/**Education */}
              <span style={{ "white-space": "nowrap" }}>
                BS Computer Science
              </span>
              <Image src={SbuImg} rounded />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
