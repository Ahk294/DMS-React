import React from "react";
import Header from "../../Header";
import { Form, Row, Col, Button, Dropdown } from "react-bootstrap";

const NewProject = () => {
  return (
    <>
      <Header persona="TA" />
      <h1 className="display-1 text-center mt-5">Create New Project</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Form className="mt-2">
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formGridProjectName">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Label>Assign Project To</Form.Label>
                <Dropdown drop="start">
                  <Dropdown.Toggle id="selectManager">
                    Select Manager
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
              </Col>
              <Col>
                <Form.Group controlId="formGridAddManagers">
                  <Form.Label>Set Goals</Form.Label>
                  <Form.Control as="textarea" rows={5} />
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
                  Save & Create New Project <i class="fas fa-plus"></i>
                </Button>
              </Col>
              <Col className="d-grid justify-content-md-end">
                <Button
                  className="d-block"
                  variant="outline-dark btn-lg"
                  type="submit"
                >
                  Save <i class="fas fa-bookmark"></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default NewProject;
