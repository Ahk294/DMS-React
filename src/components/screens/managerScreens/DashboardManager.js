import React from "react";
import Header from "../../Header";
import { Container, Row } from "react-bootstrap";
import ProjectsPanel from "../../ProjectsPanel";
import ActivityPanel from "../../ActivityPanel";
import TeamPanel from "../../TeamPanel";

const DashboardManager = () => {
  return (
    <>
      <Header persona="Manager" />
      <Container fluid className="mt-3">
        <Row className="g-0">
          <ProjectsPanel persona="Manager" />

          <ActivityPanel persona="Manager" />

          <TeamPanel />
        </Row>
      </Container>
    </>
  );
};

export default DashboardManager;
