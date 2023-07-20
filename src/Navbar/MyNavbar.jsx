import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@mui/material/IconButton";
import "./navbar.css";

export default function MyNavbar() {
  return (
    <Navbar className="navbar">
      <Container className="nav-container">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
        <Nav className="nav-links flex">
          <Nav.Link href="" className="margin-right">
            Home
          </Nav.Link>
          <Nav.Link href="" className="margin-right">
            Project
          </Nav.Link>
          <Nav.Link href="" className="margin-right">
            Contact Me
          </Nav.Link>
        </Nav>
        <div>
          <IconButton className="icon-button">
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton className="icon-button">
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton className="icon-button">
            <DescriptionIcon fontSize="large" />
          </IconButton>
        </div>
      </Container>
    </Navbar>
  );
}
