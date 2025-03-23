import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
      <Container>
        <Link className="link" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Makhpop
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
                <a 
                  className="link" 
                  href="https://www.linkedin.com/company/makhpop/posts/?feedView=all" // Replace with your LinkedIn link
                  target="_blank" 
                  rel="noopener noreferrer">              
                About us
                </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
