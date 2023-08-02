import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./projects.css";

export default function Projects() {
  const testProjects = [
    { title: "Test", description: "This is some text", img: "test.png" },
    { title: "Test", description: "This is some text", img: "test.png" },
    { title: "Test", description: "This is some text", img: "test.png" },
    { title: "Test", description: "This is some text", img: "test.png" },
  ];

  return (
    <Container>
      <Row>
        {testProjects.map((project) => (
          <Col xs={12} sm={12} md={4} lg={4} className="card-col">
            <Card className="project-card">
              <h1>{project.title}</h1>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
