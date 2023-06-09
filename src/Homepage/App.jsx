import React from "react";
import "./app.css";
import MyNavbar from "../Navbar/MyNavbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="homepage">
      <MyNavbar />
      <Container>
        <h1 className="greeting">Welcome</h1>
        <div className="homepage-links">
          <a className="homepage-link" href="/">
            Git
          </a>
          <a className="homepage-link" href="/">
            Linkdein
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

export default App;
