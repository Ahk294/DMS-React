import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../Header";
import ProjectsPanel from "../../ProjectsPanel";
import ActivityPanel from "../../ActivityPanel";
import TeamPanel from "../../TeamPanel";

const DashboardTA = () => {
  return (
    <>
      <Header persona="User" />
      <Container fluid className="mt-3">
        <Row className="g-0">
          <ProjectsPanel persona="User" />

          <ActivityPanel persona="User" />

          <TeamPanel />
        </Row>
      </Container>
    </>
  );
};

export default DashboardTA;
