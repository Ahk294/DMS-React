import React from "react";
import Header from "../../../Header";
import ProjectsForm from "../../../ProjectsForm";
import SettingsPanel from "../../../SettingsPanel";
import { Container, Row } from "react-bootstrap";

const SettingsProjects = () => {
  return (
    <>
      <Header persona="TA" />
      <Container className="m-5">
        <Row>
          <SettingsPanel persona="TA" proj={true} />

          <ProjectsForm />
        </Row>
      </Container>
    </>
  );
};

export default SettingsProjects;
