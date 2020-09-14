import React from "react";
import SideBarContent from "../components/SideBarContent";
import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Markdown from "react-markdown";
import { Container, Row, Col } from "react-bootstrap";

class ProjectSideBar extends React.Component {
  //props=name, img, code, about, roles, built_with, is_link
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project_side">
        <h1 style={{ textAlign: "center" }}>
          {this.props.name}
          <OverlayTrigger
            placement="right"
            delay={{ show: 50, hide: 400 }}
            overlay={renderTooltip}
          >
            <a href={this.props.code} target="_blank">
              <span> &#8594;</span>
            </a>
          </OverlayTrigger>
        </h1>
        <div className="centered">
          {/* <ProjectImg image={this.props.img} /> */}
          <div className="sb_img">
            <img
              style={{
                width: "190px",
                height: "190px",
                borderRadius: "50%",
              }}
              src={this.props.img}
            ></img>
          </div>

          <hr />
          {this.props.about}
          <hr />

          <div className="headerText">Build with:</div>

          {this.props.built_with.map((tag, index) => (
            <Badge
              variant="secondary"
              style={{
                margin: "5px",
                fontSize: "larger",
              }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    );
  }
}

function renderTooltip(props) {
  return (
    <Tooltip id="code_tooltip" {...props}>
      See the code
    </Tooltip>
  );
}

export default class ProjectPost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Container fluid style={{ marginLeft: "0px" }}>
          <Row>
            <Col>
              <ProjectSideBar
                name={this.props.name}
                img={this.props.img}
                code={this.props.code}
                about={this.props.about}
                roles={this.props.roles}
                built_with={this.props.built_with}
                is_link={this.props.is_link}
              />
            </Col>
            <Col xs={9} className="blog_area">
              <Markdown source={this.props.blog} className="markdown" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
