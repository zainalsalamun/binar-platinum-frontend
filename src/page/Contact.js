import React from 'react'
import Footer from '../components/Dashboard/Footer'
import NavBar from '../components/Dashboard/NavBar'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col xs={12} className="text-center">
            <h1 className="py-5">Get in Touch</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <h3>
              Let us help you with your furniture needs. We are here to
              assist you 24/7.
            </h3>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={6}>
            <h4>Head Office</h4>
            <p>
              IKEA Indonesia <br />
              Jl. Kebon Sirih Raya, Kebon Sirih, <br />
              Kec. Beji, Kota Depok,<br />
              Jawa Barat 16424
            </p>
            <h4 className="mt-4">Phone</h4>
            <p>
              <a href="tel:+622275622626">+62 22 75622626</a>
            </p>
            <p>
              <a href="tel:+6289662176234">+62 896 6217 6234</a>
            </p>
            <h4 className="mt-4">Email</h4>
            <p>
              <a href="mailto:info@ikea.com">info@ikea.com</a>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0851225700654!2d106.83945731478186!3d-6.328340995494334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3499639d9f7%3A0x62d16a63645a3875!2sIKEA%20Indonesia!5e0!3m2!1sen!2sid!4v1690987211012!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export default Contact
