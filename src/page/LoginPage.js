import React, { useState } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import appConfig from '../config/app.config';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const REACT_APP_API_URL = appConfig.apiUrl

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const rawData = JSON.stringify({ email, password });
      const response = await axios.post(REACT_APP_API_URL + 'api/login', rawData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

      if (response && response.data) {
        if(response.data)
        console.log(response.data); 
        window.location.href = "/";
        localStorage.setItem('token', response.data.token);
      } else {
        setError(response.data.message)
        console.log(response.data);
        
      }
  
      console.log(response); 
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  return (
    <>
      <Container className="my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <Row className="my-4 h-100">
          <Col md={4} lg={4} sm={8} xs={12} className="mx-auto">
            <Form>
              <Form.Group className="my-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </Form.Group>
              { <Form.Group className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </Form.Group> }
              {error && <p className="text-danger mt-2">{error}</p>}
              <div className="text-center">
                <Button variant="dark" type="submit" onClick={handleLogin} >
                  Login 
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginForm;
