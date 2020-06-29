import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Image from "react-bootstrap/Image";
import ProjectImg from "react-rounded-image"
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from "react-sidebar";
import Nav from 'react-bootstrap/Nav';
import Figure from 'react-bootstrap/Figure';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SidebarImage from './images/logo192.png';
import TempImage from './images/temp.png';
import FridayImg from './images/friday.png'
import MedClusterImg from './images/medcluster.png';
import MajMinImg from './images/majmin.png';
import PokerImg from './images/poker.jpg';
import FrcImg from './images/frc.png';
import SbuImg from './images/sbu.png';
import InstaIcon from './images/insta.png';
import GithubIcon from './images/github.png';
import SiteImg from './images/site.png';
const ABOUT = {
  INTRO: "Welcome! I'm primarly interested in backend development, but always trying to learn new tech. I love coding, math, and lifting heavy weights.",
  BUILT: "This website was made using React.", //arrow to github
  HEADLINE: "Software Developer",
  EMAIL: "pwamsley2019@gmail.com",
  GITHUB: "pwamsley2015.github.com",
  INSTA: "https://www.instagram.com/patrick_wamsley/",
};

const LANGS = ["Java", "C", "Python", "SQL", "JavaScript", "C++"];
const TECH = ["React", "HTML", "Git", "JSON", "Maven", "LaTeX"];
const TOOLS = ["GitHub", "UML Diagrams", "Eclipse", "IntelliJ IDEA", "Google Sheets", "Excel", "Slack", "Trello", "Notion"]


const PROJECTS = [
  { name: "Friday",
    img: FridayImg,
    code: "https://github.com/pwamsley2015/public_friday",
    about: "My personal assistant chatbot which automates tasks, logs data, manages my schedule, and keeps me hacking. Dynamic IO over the web and local intranet via texts, shells and GUI widgets.",
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
    name: "Personal Website",
    img: SiteImg,
    code: "https://github.com/pwamsley2015/pwamsley2015.github.io",
    about: "My personal portfolio website, which you've already seen! Built with react, this was a fun project to catch up on modern front end developement tools. More to come...",
    roles: ["Everything"],
    built_with: ["React", "Javascript", "HTML", "CSS"]
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

class ProjectPage extends React.Component {
  render() {
    return (
      <div>
          {PROJECTS.map((project, index) => (
            <div key={index} >
              <Container>
                {/**Title */}
                <Row>
                  <Col><h2 style={{'text-align':'center'}}>{project.name}</h2></Col>
                </Row>
                <Row>
                  <Col>
                    {project.about}
                  </Col>
                  <Col><ProjectImg image={project.img}/></Col>
                  <Col><h5>Built with:</h5> 
                    <div style={{lineHeight:"50%"}}>
                      {project.built_with.map((item, index) => (
                        <p>
                        {item}
                        </p>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
      </div>
    );
  }
}

class AboutSection extends React.Component {
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
      <div className="about_skils" style={{
        'font-size':'2vmin'
      }}>
        <Container>
          <Row>
            {/**Langs */}
            <Col>
              <Row>
                <Col><h3>Languages</h3></Col>
                <Col/>
                <Col>
                  {langs}
                </Col>
              </Row>
            </Col>
            <Col>
            {/**Tech */}
              <Row>
                <Col><h3>Tech</h3></Col>
                <Col/>
                <Col>
                  {tech}
                </Col>
              </Row>
            </Col>
            {/**Tools */}
            <Col>
              <Row>
                <Col><h3>Tools</h3></Col>
                <Col/>
                <Col>
                  {tools}
                </Col>
              </Row>
            </Col>
            <Col>
            {/**Education */}
              <span style={{'white-space':'nowrap'}}>BS Computer Science</span>
              <Image src={SbuImg} rounded/>
            </Col>
          </Row>
        </Container>
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
        <p/>
        I built this website with React. See the code <a href="https://github.com/pwamsley2015/pwamsley2015.github.io" target="_blank">here</a>.
        <p/>
       
        

        <p/>

        <a  href="https://www.github.com/pwamsley2015"
            target="_blank">
              <Image src={GithubIcon} />
        </a>

        <a  href="https://www.instagram.com/patrick_wamsley/"
            target="_blank">
              <Image src={InstaIcon} roundedCircle/>
        </a>
      </div>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="home_screen" style = {{
        display: "flex",
        background: "#303C55",
        color: "#e6f1ff"
      }}>
        
        <Sidebar
          sidebar={<SideBarContent/>}
          docked={true}
          styles={{ sidebar: { 
                    background: "#e6f1ff",
                    color: "#303C55",
                    position: "fixed", 
                    padding: "10px",
                    top: "80px",
                    transition: "transform .3s ease-out",
                    willChange: "transform",
                    overflowY: "auto",
                    width: "300px"
                  }
                }}
        /> 
        

        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand><h1>Patrick Wamsley</h1></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="resume.pdf">Resume PDF</Nav.Link>
          </Nav>
        </Navbar>
            
        
       <Container>
         <Row>
           <Col>
            <AboutSection/> 
           </Col>
         </Row>
         <Row>
           <Col>
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