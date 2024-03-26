import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid footer">
      <Container className="container-lg">
        <style>
          {`.footer {
            background-color: #343a40;
            color: #fff;
          }`}
        </style>
        <Row>
          <Col>
            <h3>IKEA Indonesia app</h3>
            <p>Through the IKEA Indonesia app, you can join the IKEA Family and get many special rewards from us. Download and register now, it's FREE!</p>
            <Button variant="outline-dark" style={{ color: '#fff', borderColor: '#fff' }}>Contact Us </Button>
          
          </Col>
          <Col>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, consequuntur.</p>
          </Col>
          <Col>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, consequuntur.</p>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <p>© IKEA 2023-2024 : All Rights Reserved</p>
          </Col>
          <Col>
            <a href="#">Privacy Policy</a>      
          </Col>
          <Col>
            <a href="#">Terms and Conditions</a>
          </Col>
          <Col>
          <a href="#">Price Disclaimer</a>
          </Col>
          <Col>
          <a href="#">Cookie Policy</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
