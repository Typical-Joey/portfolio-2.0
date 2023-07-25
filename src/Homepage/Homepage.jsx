import React from "react";
import "./homepage.css";
import { Container } from "react-bootstrap";

function Homepage() {
  return (
    <div>
      <Container>
        <h1 className="greeting">Welcome</h1>
        <div className="homepage-links">
          <a
            className="homepage-link"
            href="https://github.com/Typical-Joey/"
            target="_blank"
            rel="noreferrer"
          >
            Git
          </a>
          <a
            className="homepage-link"
            href="https://www.linkedin.com/in/joseph-capocci-01bb10199/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a className="homepage-link" href="/">
            Resume
          </a>
          <a className="homepage-link" href="/">
            Contact Me
          </a>
        </div>
        <div className="project-button-container">
          <button className="project-button">Projects</button>
        </div>
      </Container>
    </div>
  );
}

export default Homepage;
