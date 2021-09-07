import React from "react";
import Header from "../../../Header";
import SettingsPanel from "../../../SettingsPanel";
import { Container, Form, Row, Col, Dropdown, Button } from "react-bootstrap";

const SettingsProject = () => {
  return (
    <>
      <Header persona="Manager" />
      <Container className="m-5">
        <Row>
          <SettingsPanel persona="Manager" proj={true} />

          <Col>
            <Form className="mt-2">
              <Row>
                <Col>
                  <Form.Group controlId="formGridAddUsers">
                    <Form.Label>Add Users</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formGridGoals">
                    <Form.Label>Goals</Form.Label>
                    <Form.Control as="textarea" rows={5} disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-5 mb-3">
                <Col>
                  <Button
                    className="d-block"
                    variant="outline-dark btn-lg"
                    type="submit"
                  >
                    Save <i class="fas fa-bookmark"></i>
                  </Button>
                </Col>
                <Col>
                  <Form.Label>Remove User</Form.Label>
                  <Dropdown drop="start">
                    <Dropdown.Toggle id="selectManager">
                      Select User
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item href="#/action-1" active>
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button
                    className="d-block mt-3"
                    variant="outline-danger btn-lg"
                    type="submit"
                  >
                    Remove User
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SettingsProject;
