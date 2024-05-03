import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa'; // Perubahan disini
//import { useSelector } from 'react-redux';
const NavBar = () => {
  //const state = useSelector(state => state.handleCart);
  return (
    <Navbar bg="light" expand="lg" className="py-3 sticky-top">
      <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4 px-2">
        <img
          src='https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/logos/IKEA_logo.svg'
          height="50px"
          alt=""
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="m-auto my-2 text-center">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="product-list">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="buttons text-center">
          <Button as={NavLink} to="/login" variant="outline-dark" className="m-2">
            <FaSignInAlt className="mr-1" /> Login
          </Button>
          <Button as={NavLink} to="/register" variant="outline-dark" className="m-2">
            <FaUserPlus className="mr-1" /> Register
          </Button>
          <Button as={NavLink} to="/cart" variant="outline-dark" className="m-2">
            <FaShoppingCart className="mr-1" /> Cart 
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
