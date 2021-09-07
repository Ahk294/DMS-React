import React from "react";
import Header from "../../../Header";
import PersonalInfoForm from "../../../PersonalInfoForm";
import SettingsPanel from "../../../SettingsPanel";
import { Container, Row } from "react-bootstrap";

const SettingsPersonalInfo = () => {
  return (
    <>
      <Header persona="User" />
      <Container className="m-5">
        <Row>
          <SettingsPanel persona="User" pi={true} />
          <PersonalInfoForm />
        </Row>
      </Container>
    </>
  );
};

export default SettingsPersonalInfo;
