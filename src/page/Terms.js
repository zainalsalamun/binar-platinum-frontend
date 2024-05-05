import React from 'react'
import Footer from '../components/Dashboard/Footer'
import NavBar from '../components/Dashboard/NavBar'
import { Container, Row, Col } from 'react-bootstrap'

const Terms = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <h2 className="col-12 py-5 text-center">Terms and Conditions</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="col-12 py-5" style={{textAlign:'justify'}}>
              Kami tahu bahwa Anda mungkin ingin melewati Persyaratan Layanan
              ini, tetapi ini penting untuk menetapkan apa yang dapat Anda
              harapkan dari kami saat Anda menggunakan layanan Ikea, dan apa
              yang kami harapkan dari Anda.
            </h3>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export default Terms
