import React from "react";
import PersonalInfoForm from "../../../PersonalInfoForm";
import Header from "../../../Header";
import SettingsPanel from "../../../SettingsPanel";
import { Container, Row } from "react-bootstrap";

const SettingsPersonalInfo = () => {
  return (
    <>
      <Header persona="TA" />
      <Container className="m-5">
        <Row>
          <SettingsPanel persona="TA" pi={true} />

          <PersonalInfoForm />
        </Row>
      </Container>
    </>
  );
};

export default SettingsPersonalInfo;
