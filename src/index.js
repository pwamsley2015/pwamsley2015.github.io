import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-animated-slider/build/horizontal.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactDOM from "react-dom";
import AboutSection from "./components/AboutSection";
import ProjectPage from "./components/ProjectPage";
import SideBarContent from "./components/SideBarContent";
import "./index.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Scroll from "react-scroll";

export const ABOUT = {
  INTRO:
    "Welcome! I'm primarly interested in backend development, but always trying to learn new tech. I love coding, math, and lifting heavy weights.",
  BUILT: "This website was made using React.", //arrow to github
  HEADLINE: "Software Developer",
  EMAIL: "pwamsley2019@gmail.com",
  GITHUB: "pwamsley2015.github.com",
  INSTA: "https://www.instagram.com/patrick_wamsley/",
};

// const SIDEBAR_WIDTH = 400;
// const mql = window.matchMedia("(min-width: " + SIDEBAR_WIDTH * 3 + "px)");
class HomeScreen extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sidebarDocked: mql.matches,
  //     sidebarOpen: false,
  //     sidebarWidth: SIDEBAR_WIDTH,
  //   };

  //   this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  //   this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  // }

  // componentWillMount() {
  //   mql.addListener(this.mediaQueryChanged);
  // }

  // componentWillUnmount() {
  //   this.state.mql.removeListener(this.mediaQueryChanged);
  // }

  // onSetSidebarOpen(open) {
  //   this.setState({
  //     sidebarOpen: open,
  //     sidebarWidth: SIDEBAR_WIDTH,
  //   });
  // }

  // mediaQueryChanged() {
  //   this.setState({
  //     sidebarDocked: mql.matches,
  //     sidebarOpen: false,
  //     sidebarWidth: 0,
  //   });
  // }

  render() {
    return (
      <div
        className="home_screen"
        style={{
          display: "flex",
          background: "#303C55",
          color: "#e6f1ff",
        }}
      >
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand>
            <h1>Patrick Wamsley</h1>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link
              href="#project_page"
              onSelect={() => {
                let projectsPage = document.querySelector("#project_page");
                projectsPage.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                projectsPage.scrollTop -= 100;
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link href="resume.pdf">Resume PDF</Nav.Link>
          </Nav>
        </Navbar>

        <div style={{ width: "100%" }}>
          <SideBarContent className="sidebar" />
          <div className="main">
            <AboutSection />
            <div id="project_page" className="scroll-with-offset">
              <ProjectPage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HomeScreen />, document.getElementById("root"));
