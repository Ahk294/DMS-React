import React from "react";
import SettingsPanel from "../../../SettingsPanel";
import Header from "../../../Header";
import { Container, Row } from "react-bootstrap";
import OrganizationForm from "../../../OrganizationForm";

const SettingsOrg = () => {
  return (
    <>
      <Header persona="TA" />
      <Container className="m-5">
        <Row>
          <SettingsPanel persona="TA" org={true} />

          <OrganizationForm />
        </Row>
      </Container>
    </>
  );
};

export default SettingsOrg;
