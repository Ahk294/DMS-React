import React from "react";
import { Col, Form, Row, Dropdown, Button } from "react-bootstrap";

const OrganizationForm = () => {
  return (
    <Col>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formGridOrgName">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGridAddManagers">
              <Form.Label>Add Managers</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Remove Manager</Form.Label>
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
            <Button className="mt-5" variant="outline-danger" type="submit">
              Remove Manager
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

export default OrganizationForm;
