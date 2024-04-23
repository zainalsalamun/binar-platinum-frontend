import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container className="my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <Row className="my-4 h-100">
          <Col md={4} lg={4} sm={8} xs={12} className="mx-auto">
            <Form>
              <Form.Group className="my-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </Form.Group>
              <div className="text-center">
                <Button variant="dark" type="submit" disabled>
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
