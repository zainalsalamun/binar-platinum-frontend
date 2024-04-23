import React from 'react';
import { Navbar, Nav, Button, Form, FormControl, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersonCircle,CartFill } from 'react-bootstrap-icons';
import { BrowserRouter, Link } from 'react-router-dom';

const  Dashboard = () => {
  return (
    <Navbar bg="light" expand="md">
      <div className="container-lg">
        <Navbar.Brand href="/">
          <img
            src='https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/logos/IKEA_logo.svg'
            height="50px"
            alt=""
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" active>Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
          <Nav>
          <Button variant="light">
   
            <Link to="/login">
           <PersonCircle size={24} color='#343a40' />
         
           </Link>
             </Button>
            {/* <Button variant="outline-dark" style={{ marginLeft: '10px', borderRadius: '10px' }}>
              <i className="bi bi-cart"></i> <Badge bg="secondary">0</Badge>
            </Button> */}
           <Button variant="light">
          
            <CartFill size={24} /> 
          </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Dashboard;
