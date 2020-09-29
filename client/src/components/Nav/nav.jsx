import React from "react";
import 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';
import "./nav.css";

const Navigation = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">Job In One</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Add">Add a job</Nav.Link>
      <Nav.Link href="/Saves">View saved jobs</Nav.Link>
    </Nav>
  </Navbar>
    </div>
  );
};

export default Navigation;