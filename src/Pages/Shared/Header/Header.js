import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="text-light">
              <img className="rounded-pill w-8" src={logo} alt="" />
              rthopedic
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="blog">
                Blog
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="aboutme">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="signin">
                Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
