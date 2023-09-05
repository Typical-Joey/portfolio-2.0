import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import placeholderImg from "../images/placeholder-image.png";
import "./projects.css";

export default function Projects() {
  const testProjects = [
    { title: "Test", description: "This is some text", img: "" },
    { title: "Test", description: "This is some text", img: "" },
    { title: "Test", description: "This is some text", img: "" },
    { title: "Test", description: "This is some text", img: "" },
    { title: "Test", description: "This is some text", img: "" },
    { title: "Test", description: "This is some text", img: "" },
  ];

  return (
    <Container>
      <Row className="projects-container">
        {testProjects.map((project) => (
          <Col xs={12} sm={12} md={4} lg={4} className="card-col">
            <Card className="project-card">
              <div className="project-img-overlay">
                <img
                  className="project-img"
                  src={project.img ? project.img : placeholderImg}
                  alt="didn't work"
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
