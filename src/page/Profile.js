import React from 'react'
import Footer from '../components/Dashboard/Footer'
import NavBar from '../components/Dashboard/NavBar'
import { Container, Row, Col, Button , Form, Card} from 'react-bootstrap'

const Profile = () => {
  const [user, setUser] = React.useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: 'Jl. ABC No. 123, Jakarta',
    phone: '081234567890'
  })
  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.href = '/login'
  }
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  return (
    <div className="wrapper">
      <NavBar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} lg={8}>
            <h1 className="text-center mb-4">Edit Profile</h1>
            <Card className="p-4">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" name="name" value={user.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter address" name="address" value={user.address} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone" name="phone" value={user.phone} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" className="mt-3" onClick={handleLogout}>Logout</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export default Profile
