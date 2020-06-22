import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import RoundedImage from "react-rounded-image";
import SidebarImage from './images/logo192.png';
import TempImage from './images/temp.png';
import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from "react-sidebar";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function arrFormat(a) {
  let result = "" + a[0];
  for (let i = 1; i < a.length; i++) {
    result += ", " + a[i];
  }
  return result;
}

const ABOUT = {
  INTRO: "Welcome! I'm a Software Engineer, primaryly interested in backend development, but I'm never afraid to learn new technologies. I love coding, math, and heavy weight.",
  HEADLINE: "Software Engineer",
  EMAIL: "pwamsley2019@gmail.com",
  GITHUB: "pwamsley2015.github.com",
  INSTA: "https://www.instagram.com/patrick_wamsley/",
};

const PROJECTS = [
  { name: "Friday",
    code: "https://github.com/pwamsley2015/public_friday",
    about: "My personal assistant chatbot which automates tasks, logs data, manages my schedule, and keeps me hacking. Dynamic IO over the web and local intranet.",
    roles: ["Everything"], 
    built_with: ["Twilio Messaging API", "Java", "Python", "Spark", "JavaFX"]
  },
  { name: "Congressional Redistricting",
    code: "https://github.com/pwamsley2015/congressional_redistricting",
    about: "Web application which generates congressional redistricting lines, built to maximize the number of majority-miniority distrcts.",
    roles: ["Primary Backend Developer", "Designed and implemented AlogrithmStep framework to modularize Alogrithm", "Implemented Graph Partioning Algorithm to generate majority-miniority distrcts"],
    built_with: ["React", "TypeScript", "Java", "Hibernate"]
  },
  {
    name: "MedCluster",
    code: "https://github.com/pwamsley2015/medcluster",
    about: "Machine Learning and Data Visualization tool used to optimize EMT base station locations.",
    roles: ["Primary Backend Developer", "Implemented k-means clustering Algorithm"],
    built_with: ["Python", "Google Maps API", "JavaScript"]
  },
  {
    name: "No Limit Hold'Em Equity Calculator",
    code: "https://github.com/pwamsley2015/NLHE_lab",
    about: "Calculates Range vs Range Equity in Poker.",
    roles: ["Everything"],
    built_with: ["Java", "JUnit", "Monti-Carlo Estimation"]
  }, 
  {
    name: "FRC 2485 Robotics",
    code: "https://github.com/team2485/frc-2016",
    about: "Autonomous and Teleoperated Robot Control for FRC Recycle Rush",
    roles: ["Lead Developer"],
    built_with: ["Java", "WPI FRC Framework"]
  }
];

class ProjectDisplay extends React.Component {
  //props = project
  constructor(props) {
    super(props);
  }

  render() {
    const project = this.props.project;
    const l = "{";
    const r = "}";
    let rolesFormat = arrFormat(project.roles);
    let builtWithFormat = arrFormat(project.built_with);

    return (
      <Card style={{ width: '18rem'}}>
        <Card.Img src={TempImage} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.about}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Text>Roles: {rolesFormat}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Text>Built with: {builtWithFormat}</Card.Text>
          </Card.Body>
          <Card.Body>
            <a href={project.code}>{l}code{r}</a>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    );
  }
}

class ProjectPage extends React.Component {
  render() {

    const items = [];
    for (var i = 0; i < PROJECTS.length; i++) {
      items.push(<ProjectDisplay key={i} project={PROJECTS[i]}/>);
    }

    return ( 
      <div>
        {items}
      </div>
    );
  }
}

class AboutSection extends React.Component {
  render() {
    return (
      <div className="about_section">
        <Container>
          <Row>
            <Col>Skills</Col>
            <Col>Education</Col> 
          </Row>
        </Container>
      </div>
    );
  }
}

class SideBarContent extends React.Component {
  render() {

    return (
      <div className="sidebar">
        <Container>
          <Col>
            <Row>
              <RoundedImage
                 image={SidebarImage}
                 imageWidth="150"
                 imageHeight="150"
                 roundedSize="13"
              />
            </Row>
           
            <Row>
              <h3>{ABOUT.HEADLINE}</h3>
            </Row>
            <Row>{ABOUT.INTRO}</Row>
            <div> <b>Links</b> <br/> </div>
          </Col>
        </Container>
      </div>
    );
  }
}

class Banner extends React.Component {
  render() {
    return <div className="banner">
      <Container>
        <Col>
          <Row>
            <h1>Patrick Wamsley</h1>
          </Row>
          <Row> 
            <Button variant="outline-primary">See Projects</Button>{' '} 
          </Row>
        </Col>
      </Container>
    </div>
  }
}

class HomeScreen extends React.Component {
  render() {
    return <div className="home_screen">
      <Banner /> 
        <Sidebar
        sidebar={<SideBarContent/>}
        docked={false}
        styles={{ sidebar: { background: "white" } }}
      />
      <AboutSection />
      <ProjectPage />
    </div>
  }
}



ReactDOM.render(
  <HomeScreen />, 
  document.getElementById('root')
);