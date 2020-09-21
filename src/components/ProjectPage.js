import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-animated-slider/build/horizontal.css";
import ProjectImg from "react-rounded-image";
import FrcImg from "../images/frc.png";
import FridayImg from "../images/friday.png";
import MajMinImg from "../images/majmin.png";
import MedClusterImg from "../images/medcluster.png";
import PokerImg from "../images/poker.jpg";
import SiteImg from "../images/site.png";
import DeadliftImg from "../images/DeadliftFace.jpg";
import "../index.css";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ProjectBlock from "./ProjectBlock";
const PROJECTS = [
  {
    name: "Friday",
    img: FridayImg,
    code: "https://github.com/pwamsley2015/public_friday",
    about:
      "My personal assistant chatbot which automates tasks, logs data, manages my schedule, and keeps me hacking. Dynamic IO over the web and local intranet via texts, shells and GUI widgets.",
    roles: ["Everything"],
    built_with: [
      "Twilio Messaging API",
      "Google Firebase",
      "Java",
      "Python",
      "Spark",
      "JavaFX",
    ],
    is_link: false,
    has_post: true,
    route: "friday",
  },
  {
    name: "Congressional Redistricting",
    img: MajMinImg,
    code: "https://github.com/pwamsley2015/congressional_redistricting",
    about:
      "Web application which generates congressional redistricting lines, built to maximize the number of majority-miniority distrcts and combat gerrymandering.",
    roles: [
      "Primary Backend Developer",
      "Designed and implemented AlogrithmStep framework to modularize Alogrithm",
      "Implemented Graph Partioning Algorithm to generate majority-miniority distrcts",
    ],
    built_with: ["Angular", "TypeScript", "Java", "Hibernate"],
    is_link: false,
    has_post: true,
    route: "congressionalredistricting",
  },
  {
    name: "pwamsley2015.github.io/training",
    img: DeadliftImg,
    code: "https://github.com/pwamsley2015/personal_site_training",
    about:
      "A personal website for my powerlifting hobby, built with React-Springy-Paralax for elegant scroll animations. Friday keeps the training log updated.",
    roles: ["Everything"],
    built_with: [
      "React-Spring",
      "Google Firebase",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    is_link: true,
    has_post: false,
  },
  {
    name: "pwamsley.com",
    img: SiteImg,
    code: "https://github.com/pwamsley2015/pwamsley2015.github.io",
    about:
      "My personal portfolio website, which you've already seen! Built with react, this was a fun project to catch up on modern front end developement tools. More to come...",
    roles: ["Everything"],
    built_with: ["React", "React-Router", "Javascript", "HTML", "CSS"],
    is_link: false,
  },
  {
    name: "MedCluster",
    img: MedClusterImg,
    code: "https://github.com/pwamsley2015/medcluster",
    about:
      "Machine Learning and Data Visualization tool used to optimize EMT base station locations.",
    roles: ["Backend Developer", "Implemented k-means clustering Algorithm"],
    built_with: ["Python", "Google Maps API", "JavaScript"],
    is_link: false,
    has_post: false,
  },
  {
    name: "No Limit Hold'Em Equity Calculator",
    img: PokerImg,
    code: "https://github.com/pwamsley2015/NLHE_lab",
    about: "Calculates Range vs Range Equity in Poker.",
    roles: ["Everything"],
    built_with: ["Java", "JUnit", "Monti-Carlo Estimation"],
    is_link: false,
    has_post: false,
  },
  {
    name: "FRC 2485 Robotics",
    img: FrcImg,
    code: "https://github.com/team2485/frc-2015",
    about: "Autonomous and Teleoperated Robot Control for FRC Recycle Rush",
    roles: ["Lead Developer"],
    built_with: ["Java", "WPI FRC Framework"],
    is_link: false,
    has_post: false,
  },
];

function renderTooltip(props) {
  return (
    <Tooltip id="code_tooltip" {...props}>
      See the code
    </Tooltip>
  );
}

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div className="project_page">
        <div>
          <h3 className="headerText" style={{ textAlign: "center" }}>
            Projects
          </h3>
        </div>
        <div>
          {PROJECTS.map((project, index) => (
            <ProjectBlock
              name={project.name}
              img={project.img}
              code={project.code}
              about={project.about}
              roles={project.roles}
              built_with={project.built_with}
              is_link={project.build_with}
              has_post={project.has_post}
              route={project.route}
            />
          ))}
        </div>
      </div>
    );
  }
}
