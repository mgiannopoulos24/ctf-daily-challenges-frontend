"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="px-3">
      <Container fluid>
        <Navbar.Brand href="/" className="ms-4 fw-bolder fs-3 px-1">CTF Challenges Daily</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/challenges">Challenges</Nav.Link>
            <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            <Nav.Link href="not-found">Oops?</Nav.Link>

            <Nav.Link href="/contact">Profile</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
