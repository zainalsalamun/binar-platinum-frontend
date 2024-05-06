import React from 'react'
import Footer from '../components/Dashboard/Footer'
import NavBar from '../components/Dashboard/NavBar'
import { Container, Row, Col } from 'react-bootstrap'

const Terms = () => {
  return (
    <div>
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col xs={12} className="text-center">
            <h1 className="py-5">Terms and Conditions</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <p className="lead">IKEA is committed to providing you with a
              positive experience when using our services. This page is
              designed to outline the Terms and Conditions, which is a
              legally binding contract between you and IKEA. Read this carefully
              as it outlines what we expect from you and what we expect from you.
              Let's make this a win-win situation for both of us.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2 className="text-center">Preamble</h2>
            <p className="text-justify">
              By using our services, you agree to comply with the Terms and
              Conditions. IKEA reserves the right to modify the Terms and
              Conditions at any time, and reserves the right to terminate your
              access to our services. These Terms and Conditions are the entire
              agreement between you and IKEA regarding the use of our
              services.</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export default Terms
