import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <footer className="mt-5 py-5 bg-dark text-white">
      <Container>
        <Row className="text-center">
          <Col>
            <p>Copyright © IKEA 2023-2024. All rights reserved.</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="privacy" className="text-white">Privacy Policy</a></li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item"><a href="terms" className="text-white">Terms and Conditions</a></li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item"><a href="#" className="text-white">Price Disclaimer</a></li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item"><a href="#" className="text-white">Cookie Policy</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default App;
