import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button'
import './index.css';
import RoundedImage from "react-rounded-image";
import SidebarImage from './images/logo192.png';
import {Container, Row, Col} from 'react-bootstrap';

class ProjectPage extends React.Component {
  render() {
    return ( 
      <div className="projects">
      Projects
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

class SideBar extends React.Component {
  render() {
    const sidebarStyle = {
      color: "black",
      backgroundColor: "white", 
      padding: "10px",
      fontFamily: "Arial",
      // width: 200,
      // height: 600,
    }
    return (
      <div className="sidebar" style={sidebarStyle}>
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
              <h3>Software Engineer</h3>
            </Row>

              <Row>B.S. Computer Science</Row>
          
            <Row>Welcome! kjhdsfkljahdsfkljahsdlfkjahsdfkljahsdfkljahdsfkljahdflkajsdfhalksdfhjalkdjfhalksdfhjalskdfjha </Row>

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
            <h1> Patrick Wamsley </h1>
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
      <SideBar />
      <AboutSection />
      <ProjectPage />
    </div>
  }
}



ReactDOM.render(
  <HomeScreen />, 
  document.getElementById('root')
);