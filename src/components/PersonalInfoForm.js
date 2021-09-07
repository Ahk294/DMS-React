import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const PersonalInfoForm = () => {
  return (
    <Col>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Row>

        <Button variant="outline-dark btn-lg" type="submit">
          Save <i class="fa fa-bookmark" aria-hidden="true"></i>
        </Button>
      </Form>
    </Col>
  );
};

export default PersonalInfoForm;
