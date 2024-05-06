import React from 'react'
import Footer from '../components/Dashboard/Footer'
import NavBar from '../components/Dashboard/NavBar'
import { Container, Row, Col } from 'react-bootstrap'

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: 'Jl. ABC No. 123, Jakarta',
    phone: '081234567890'
  }
  return (
    <div className="wrapper">
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col xs={12} className="text-center">
            <h1 className="py-5">My Profile</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <h4>Name</h4>
            <p>{user.name}</p>
            <h4 className="mt-4">Email</h4>
            <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
            <h4 className="mt-4">Phone</h4>
            <p><a href={`tel:${user.phone}`}>{user.phone}</a></p>
            <h4 className="mt-4">Address</h4>
            <p>{user.address}</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export default Profile
