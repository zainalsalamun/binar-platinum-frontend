import React from 'react'
import Footer from '../components/Dashboard/Footer'
import NavBar from '../components/Dashboard/NavBar'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="py-5 text-center">Unveiling the IKEA Story</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="py-5 text-center" style={{textAlign: 'Justify'}}>
              IKEA, a Swedish-based furniture brand, was founded in a small
              town in rural Sweden back in 1943. The company started as a tiny
              mail order company, selling simple yet functional furniture to
              people in need. Over the years, the company has grown into a
              global home furnishing brand, bringing affordability, design,
              and comfort to people all over the world.
            </p>
            <p className="py-5 text-center" style={{textAlign: 'Justify'}}>
              Our story is marked by a commitment to creating a better everyday
              life for the many people. From our humble beginnings, we have
              remained true to our vision, and our dedication continues to
              inspire us every day.
            </p>
            <p className="py-5 text-center">
              Explore our history, learn about our heritage, and dive into the
              events that shaped us. Let's embark on a journey to discover the
              IKEA story.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={5}>
            <img
              src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1617192256__4.webp"
              alt="IKEA"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
      <h2 />
    </div>
  )
}
export default About
