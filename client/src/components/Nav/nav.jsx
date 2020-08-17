import React from "react";
import 'react-bootstrap';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import "./nav.css";

const Navigation = () => {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">JOI</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Add">Add a job</Nav.Link>
      <Nav.Link href="/Saves">View saved jobs</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
    </div>
  );
};

export default Navigation;