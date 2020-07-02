import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-animated-slider/build/horizontal.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SbuImg from "../images/sbu.png";
import "../index.css";

const LANGS = ["Java", "JavaScript", "C & C++", "Python", "SQL", "HTML & CSS"];
const FRAMEWORKS = [
  "Hibernate",
  "JavaFX",
  "Spring",
  "JUnit",
  "React",
  "Bootstrap",
  "Node",
];
const TOOLS = [
  "Git & GitHub",
  "UML Diagrams",
  "Maven",
  "npm",
  "Eclipse & IntelliJ IDEA",
  "Excel & Google Sheets",
  "Slack & Trello & Notion",
];

export default class AboutSection extends React.Component {
  render() {
    return (
      <div>
        <Container style={{ margin: "15px" }}>
          <Row>
            <Col>
              <h5
                style={{
                  textTransform: "uppercase",
                }}
              >
                Languages
              </h5>
              <ul>
                {LANGS.map((lang, index) => (
                  <li>{lang}</li>
                ))}
              </ul>
            </Col>
            <Col>
              <h5
                style={{
                  textTransform: "uppercase",
                }}
              >
                Frameworks
              </h5>
              <ul>
                {FRAMEWORKS.map((t, index) => (
                  <li>{t}</li>
                ))}
              </ul>
            </Col>
            <Col>
              <h5
                style={{
                  textTransform: "uppercase",
                }}
              >
                Tools
              </h5>
              <ul>
                {TOOLS.map((tool, index) => (
                  <li>{tool}</li>
                ))}
              </ul>
            </Col>
            <Col>
              <h5
                style={{
                  textTransform: "uppercase",
                }}
              >
                Education
              </h5>
              <h6>BS, Computer Science</h6>
              <br />
              <Image src={SbuImg} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}