import React from "react";
import Header from "../../Header";
import { Form, Row, Col, Button } from "react-bootstrap";

const CreateOrg = () => {
  return (
    <>
      <Header persona="TA" />
      <h1 className="display-1 text-center mt-5">Create New Organization</h1>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <Form className="mt-2">
            <Row className="mb-3">
              <Col>
                <Form.Group className="mb-3" controlId="formGridOrgName">
                  <Form.Label>Organization Name</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formGridAddManagers">
                  <Form.Label>Add Managers</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Button
                  className="d-block"
                  variant="outline-dark btn-lg"
                  type="submit"
                >
                  Continue <i className="fas fa-angle-right"></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateOrg;
