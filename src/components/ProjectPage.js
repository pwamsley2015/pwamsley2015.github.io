import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-animated-slider/build/horizontal.css";
import { Col, Container, Row } from "react-bootstrap";
import ProjectImg from "react-rounded-image";
import FrcImg from "../images/frc.png";
import FridayImg from "../images/friday.png";
import MajMinImg from "../images/majmin.png";
import MedClusterImg from "../images/medcluster.png";
import PokerImg from "../images/poker.jpg";
import SiteImg from "../images/site.png";
import "../index.css";

const PROJECTS = [
  {
    name: "Friday",
    img: FridayImg,
    code: "https://github.com/pwamsley2015/public_friday",
    about:
      "My personal assistant chatbot which automates tasks, logs data, manages my schedule, and keeps me hacking. Dynamic IO over the web and local intranet via texts, shells and GUI widgets.",
    roles: ["Everything"],
    built_with: ["Twilio Messaging API", "Java", "Python", "Spark", "JavaFX"],
  },
  {
    name: "Congressional Redistricting",
    img: MajMinImg,
    code: "https://github.com/pwamsley2015/congressional_redistricting",
    about:
      "Web application which generates congressional redistricting lines, built to maximize the number of majority-miniority distrcts.",
    roles: [
      "Primary Backend Developer",
      "Designed and implemented AlogrithmStep framework to modularize Alogrithm",
      "Implemented Graph Partioning Algorithm to generate majority-miniority distrcts",
    ],
    built_with: ["Angular", "TypeScript", "Java", "Hibernate"],
  },
  {
    name: "Personal Website",
    img: SiteImg,
    code: "https://github.com/pwamsley2015/pwamsley2015.github.io",
    about:
      "My personal portfolio website, which you've already seen! Built with react, this was a fun project to catch up on modern front end developement tools. More to come...",
    roles: ["Everything"],
    built_with: ["React", "Javascript", "HTML", "CSS"],
  },
  {
    name: "MedCluster",
    img: MedClusterImg,
    code: "https://github.com/pwamsley2015/medcluster",
    about:
      "Machine Learning and Data Visualization tool used to optimize EMT base station locations.",
    roles: ["Backend Developer", "Implemented k-means clustering Algorithm"],
    built_with: ["Python", "Google Maps API", "JavaScript"],
  },
  {
    name: "No Limit Hold'Em Equity Calculator",
    img: PokerImg,
    code: "https://github.com/pwamsley2015/NLHE_lab",
    about: "Calculates Range vs Range Equity in Poker.",
    roles: ["Everything"],
    built_with: ["Java", "JUnit", "Monti-Carlo Estimation"],
  },
  {
    name: "FRC 2485 Robotics",
    img: FrcImg,
    code: "https://github.com/team2485/frc-2015",
    about: "Autonomous and Teleoperated Robot Control for FRC Recycle Rush",
    roles: ["Lead Developer"],
    built_with: ["Java", "WPI FRC Framework"],
  },
];

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              borderTop: "1px solid gray",
              padding: "10px 0px",
            }}
          >
            {/**Title */}
            {/* <Row>
                <Col></Col>
              </Row> */}
            <a
              style={{ marginRight: "20px" }}
              href={project.code}
              target="_blank"
            >
              <ProjectImg image={project.img} />
            </a>
            <div style={{ width: "100%" }}>
              <h2 style={{ "text-align": "center" }}>{project.name}</h2>
              <div>{project.about}</div> <br />
              <div style={{ lineHeight: "50%" }}>
                <b>Built with: </b>
                {project.built_with.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
