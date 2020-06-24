import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Image from "react-bootstrap/Image";
import ProjectImg from "react-rounded-image"
import { TagCloud } from 'react-tagcloud';
import Badge from 'react-bootstrap/Badge';

import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from "react-sidebar";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SidebarImage from './images/logo192.png';
import TempImage from './images/temp.png';
import FridayImg from './images/friday.png'
import MedClusterImg from './images/medcluster.png';
import MajMinImg from './images/majmin.png';
import PokerImg from './images/poker.jpg';
import FrcImg from './images/frc.png';

const ABOUT = {
  INTRO: "Welcome! I'm primarly interested in backend development, but always trying to learn new tech. I love coding, math, and lifting heavy weights.",
  BUILT: "This website was made using React.", //arrow to github
  HEADLINE: "Software Developer",
  EMAIL: "pwamsley2019@gmail.com",
  GITHUB: "pwamsley2015.github.com",
  INSTA: "https://www.instagram.com/patrick_wamsley/",
};

const LANGS = [
  {value: "Java", count: 50},
  {value: "C", count: 25},
  {value: "Python", count: 15},
  {value: "SQL", count: 20},
  {value: "JavaScript", count: 20}
];

const TECH = [
  {value: "React", count: 20},
  {value: "Git", count: 40},
  {value: "JSON", count: 23},
  {value: "Maven", count: 20},
  {value: "HTML", count: 20},
  {value: "LaTeX", count: 25},
];

const TOOLS = [
  {value: "UML Diagrams", count: 33},
  {value: "Github", count: 40},
  {value: "Slack", count: 20},
  {value: "Eclipse", count: 35},
  {value: "IntelliJ IDEA", count: 25}
];

const PROJECTS = [
  { name: "Friday",
    img: FridayImg,
    code: "https://github.com/pwamsley2015/public_friday",
    about: "My personal assistant chatbot which automates tasks, logs data, manages my schedule, and keeps me hacking. Dynamic IO accomplished over the web and local intranet.",
    roles: ["Everything"], 
    built_with: ["Twilio Messaging API", "Java", "Python", "Spark", "JavaFX"]
  },
  { name: "Congressional Redistricting",
    img: MajMinImg,
    code: "https://github.com/pwamsley2015/congressional_redistricting",
    about: "Web application which generates congressional redistricting lines, built to maximize the number of majority-miniority distrcts.",
    roles: ["Primary Backend Developer", "Designed and implemented AlogrithmStep framework to modularize Alogrithm", "Implemented Graph Partioning Algorithm to generate majority-miniority distrcts"],
    built_with: ["Angular", "TypeScript", "Java", "Hibernate"]
  },
  {
    name: "MedCluster",
    img: MedClusterImg,
    code: "https://github.com/pwamsley2015/medcluster",
    about: "Machine Learning and Data Visualization tool used to optimize EMT base station locations.",
    roles: ["Backend Developer", "Implemented k-means clustering Algorithm"],
    built_with: ["Python", "Google Maps API", "JavaScript"]
  },
  {
    name: "No Limit Hold'Em Equity Calculator",
    img: PokerImg,
    code: "https://github.com/pwamsley2015/NLHE_lab",
    about: "Calculates Range vs Range Equity in Poker.",
    roles: ["Everything"],
    built_with: ["Java", "JUnit", "Monti-Carlo Estimation"]
  }, 
  {
    name: "FRC 2485 Robotics",
    img: FrcImg,
    code: "https://github.com/team2485/frc-2015",
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
    let builtWith = [];
    builtWith.push(<Badge variant="primary">Built with:</Badge>);
    for (let i = 0; i < project.built_with.length; i++) {
      builtWith.push(<Badge pill variant="info">{project.built_with[i]}</Badge>);
    }

    const builtWithTags = [];
    for (let i = 0; i < project.built_with.length; i++) {
      builtWithTags.push({value: project.built_with[i], count: Math.floor(Math.random() * 30) + 15});
    }

    return (
      <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <Row>
          <Col>
            <Card>
              <Card.Title>
                <h1 style={{"textAlign":"center"}}>{project.name}</h1>
              </Card.Title>
              <Card.Body>
                <ProjectImg 
                  image={project.img} 
                  roundedSize="8"
                />
                <Button href={project.code} target="_blank" variant="dark">See the code</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Row style={{"textAlign":"center", "font-size":"19px"}}>{project.about}</Row>
            <Row>
              <Col>
                <Badge style={{"font-size":"25px"}} variant="success" >Built with:</Badge>
              </Col>
              <Col>
                <TagCloud tags={builtWithTags} minSize={12} maxSize={22}/>
              </Col>
            </Row>
          </Col>
          </Row>
          </Container>
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
        <h1>Projects</h1>
      {items}
      </div>
    );
  }
}

class AboutSection extends React.Component {
  render() {
    return (
      <div className="about_section">
        <CardDeck>
          <Card>
            <Card.Title>
              Languages
            </Card.Title>
            <Card.Body>
              <TagCloud
                tags={LANGS}
              />
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              Tech
            </Card.Title>
            <Card.Body>
              <TagCloud
                tags={TECH}
              />
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              Tools
            </Card.Title>
            <Card.Body>
              <TagCloud
                tags={TOOLS}
              />
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>BS Computer Science</Card.Title>
            <Card.Body>Stony Brook University</Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

class SideBarContent extends React.Component {
  render() {

    return (
      <div className="sidebar" style={{
        "text-align":"center"
      }}>
        <Image
           src={SidebarImage}
           roundedCircle
        />
     
        <h3>{ABOUT.HEADLINE}</h3>
      
        {ABOUT.INTRO}
      Links
      </div>
    );
  }
}

class Banner extends React.Component {
  render() {
    return <div className="banner">
      <h1 style= {{  
          "text-align":"center", 
          "font-size":"80px"
        }}
      > Patrick Wamsley </h1>
    </div>
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="home_screen" style = {{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Container>
          <Row>
            <Col>
              <Sidebar
                sidebar={<SideBarContent/>}
                docked={true}
                styles={{ sidebar: { 
                          background: "white",
                          position: "fixed", 
                          top: 0,
                          bottom: 0,
                          transition: "transform .3s ease-out",
                          willChange: "transform",
                          overflowY: "auto",
                          width: "300px"
                        }
                      }}
              />
            </Col>
            <Col xs={8}>
              <Banner />
              <AboutSection />
              <ProjectPage />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



ReactDOM.render(
  <HomeScreen />, 
  document.getElementById('root')
);