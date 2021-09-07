import React from "react";
import { Col, Form, Row, Dropdown, Button } from "react-bootstrap";

const ProjectsForm = ({ persona }) => {
  return (
    <Col>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formGridProjectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control />
            </Form.Group>
            <Button className="mt-2" variant="outline-success" type="submit">
              Search
            </Button>
          </Col>

          <Col>
            <Form.Group controlId="formGridOrgName">
              <Form.Label>Project Status</Form.Label>
              <Form.Control disabled />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGridAddManagers">
              <Form.Label>Edit Goals</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Change Manager</Form.Label>
            <Dropdown drop="end">
              <Dropdown.Toggle id="selectManager">
                Select Manager
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button className="mt-5" variant="outline-warning" type="submit">
              Change Manager
            </Button>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Button
              className="d-block"
              variant="outline-dark btn-lg"
              type="submit"
            >
              Save <i className="fas fa-bookmark"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </Col>
  );
};

export default ProjectsForm;
