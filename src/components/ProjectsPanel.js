import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const ProjectsPanel = ({ persona }) => {
  if (persona === "TA" || persona === "User") {
    return (
      <Col className="m-3 border border-2 border-dark rounded-3 bg-dark">
        <h1 className="display-6 text-center text-white">Projects</h1>
        <div className="mt-5">
          <Link to="#">
            <Card
              body
              className="m-4 fs-3 text-center border-3 border-primary rounded-3"
            >
              Project Name
            </Card>
          </Link>

          <Link to="#">
            <Card body className="m-4 fs-3 text-center border-2 rounded-3">
              Project Name
            </Card>
          </Link>

          <Link to="#">
            <Card body className="m-4 fs-3 text-center border-2 rounded-3">
              Project Name
            </Card>
          </Link>
        </div>
      </Col>
    );
  }
  return null;
};

export default ProjectsPanel;
