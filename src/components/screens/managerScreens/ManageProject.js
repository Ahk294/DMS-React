import React from "react";
import Header from "../../Header";
import { Form, Row, Col, Button } from "react-bootstrap";

const ManageProject = () => {
  return (
    <>
      <Header persona="Manager" />
      <h1 className="display-1 text-center mt-5">Manage New Project</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
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

export default ManageProject;
