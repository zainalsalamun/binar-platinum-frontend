import React from 'react'
import Footer from '../components/Dashboard/Footer'
import NavBar from '../components/Dashboard/NavBar'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <h2 className="col-12 py-5 text-center">Contact</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="col-12 py-5" style={{textAlign:'center'}}>
              ☎ +62 22 75622626
              <br />
              📞 +62 896 6217 6234
            </h3>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export default Contact
