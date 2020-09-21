import React from "react";
import SideBarContent from "../components/SideBarContent";
import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Markdown from "react-markdown";
import ProjectImg from "react-rounded-image";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function renderTooltip(props) {
  return (
    <Tooltip id="code_tooltip" {...props}>
      See the code
    </Tooltip>
  );
}

class ProjectBlock extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          borderTop: "1px solid gray",
          padding: "10px 0px",
          background: "#303C55",
          color: "#e6f1ff",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <ProjectImg image={this.props.img} />
        </div>
        <div style={{ width: "100%", zIndex: "1" }}>
          <h2 style={{ "text-align": "center" }}>
            {this.props.is_link ? (
              <a href={"https://" + this.props.name} target="_blank">
                {this.props.name}
              </a>
            ) : (
              this.props.name
            )}
            <OverlayTrigger
              placement="right"
              delay={{ show: 50, hide: 400 }}
              overlay={renderTooltip}
            >
              <a href={this.props.code} target="_blank">
                <span> &#8594;</span>
              </a>
            </OverlayTrigger>
          </h2>
          <div>
            {this.props.about}{" "}
            {this.props.has_post ? (
              <Button
                style={{
                  paddingLeft: "4px",
                  paddingRight: "2px",
                  paddingTop: "1px",
                  paddingBottom: "1px",
                  fontSize: "smaller",
                }}
                variant="secondary"
                href={`/${this.props.route}`}
              >
                See more &#8594;
              </Button>
            ) : (
              <a />
            )}
          </div>
          <br />
          <div style={{ lineHeight: "50%" }}>
            <b>Built with: </b>
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
      </div>
    );
  }
}

export default ProjectBlock;
