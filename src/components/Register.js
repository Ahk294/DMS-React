import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-md-5">
          <h1 className="display-1 text-center">Register</h1>
          <Form className="mt-5">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" placeholder="Enter first name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" placeholder="Enter last name" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="yourname@example.com" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="By registering you accept our Terms & Conditions"
              />
            </Form.Group>

            <Button variant="outline-dark btn-lg" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
