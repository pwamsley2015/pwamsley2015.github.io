import React from "react";
import SideBarContent from "../components/SideBarContent";
import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Markdown from "react-markdown";
import ProjectImg from "react-rounded-image";
import ProjectBlock from "./ProjectBlock";
import { Container, Row, Col } from "react-bootstrap";

export default class ProjectPost extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <ProjectBlock
          name={this.props.name}
          img={this.props.img}
          code={this.props.code}
          about={this.props.about}
          roles={this.props.roles}
          built_with={this.props.built_with}
          is_link={this.props.is_link}
        />

        <div className="blog_area">
          <Markdown source={this.props.blog} className="markdown" />
        </div>
      </div>
    );
  }
}
