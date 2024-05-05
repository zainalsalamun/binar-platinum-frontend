import React from 'react'
import Footer from '../components/Dashboard/Footer'
import NavBar from '../components/Dashboard/NavBar'
import { Container, Row, Col } from 'react-bootstrap'

const Privacy = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <h2 className="col-12 py-5 text-center">Privacy Policy</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="col-12 py-5" style={{textAlign:'justify'}}>
              Dengan menggunakan layanan kami, Anda memercayakan informasi Anda
              kepada kami. Kami paham bahwa melindungi informasi Anda dan
              memberikan kontrol kepada Anda adalah tanggung jawab yang besar
              dan memerlukan kerja keras.
            </h3>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export default Privacy
