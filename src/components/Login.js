import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <div className="row justify-content-center mt-4">
        <div className="col-md-5">
          <h1 className="display-1 text-center">Login</h1>
          <Form className="mt-5">
            <Row className="mb-3">
              <Col>
                <Form.Group className="mb-3" controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder="yourname@example.com" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
