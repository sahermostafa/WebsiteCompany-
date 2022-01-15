import React from "react";
import{Container,Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

function Navbara() {
  return (
    <>
    
       <Navbar bg='light'  expand='lg'>
       <Container fluid>
            
            <Navbar.Brand href='#'>GrowMore Inc.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav  className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/service">Service</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                <Nav.Link as={NavLink}  to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      
    </>
  );
}

export default Navbara;