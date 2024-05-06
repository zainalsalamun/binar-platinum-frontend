import React from 'react'
import Footer from '../components/Dashboard/Footer'
import NavBar from '../components/Dashboard/NavBar'
import { Container, Row, Col } from 'react-bootstrap'

const Privacy = () => {
  return (
    <div>
      <NavBar />
      <Container className="py-5">
        <Row>
          <Col>
            <h2 className="text-center">Privacy Policy</h2>
            <p className="text-center text-secondary">
              We value your privacy and strive to protect it. It's a big
              responsibility, and we take it seriously. That's why we're going
              to explain how we handle your personal information.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Information We Collect</h3>
            <p>
              When you use our services, we may collect the following
              information from you:
            </p>
            <ul className="pl-4">
              <li>Name and contact details</li>
              <li>Billing and shipping address</li>
              <li>Payment details</li>
              <li>Order history and preferences</li>
            </ul>
            <p>
              We collect this information to provide you with a better
              shopping experience, to process your orders, and to enhance our
              services. We may use this information to better understand your
              needs and preferences.
            </p>
            <h3>Protecting Your Information</h3>
            <p>
              We take the security and privacy of your information seriously.
              We employ various measures to protect your information from
              unauthorized access, theft, and misuse. We use strong encryption
              techniques to secure your payment details.
            </p>
            <p>
              We also use cookies to store your preferences and enhance your
              browsing experience. By using our services, you consent to the use
              of cookies.
            </p>
            <h3>Your Control</h3>
            <p>
              You have the right to access, correct, and delete the personal
              information we have collected about you. You can exercise this
              right by contacting us at any time.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export default Privacy
