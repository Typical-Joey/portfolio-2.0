import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import placeholderImg from "../images/placeholder-image.png";
import ProjectModal from "../ProjectModal/projectModal";
import "./projects.css";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [project, setProject] = useState({});
  const testProjects = [
    { title: "Test 1", description: "This is some text", img: "" },
    { title: "Test 2", description: "This is some text", img: "" },
    { title: "Test 3", description: "This is some text", img: "" },
    { title: "Test 4", description: "This is some text", img: "" },
    { title: "Test 5", description: "This is some text", img: "" },
    { title: "Test 6", description: "This is some text", img: "" },
  ];

  function activateProjectModal(project) {
    setProject(project);
    setShowModal(true);
  }

  return (
    <>
      <Container>
        <Row className="projects-container">
          {testProjects.map((project) => (
            <Col xs={12} sm={12} md={4} lg={4} className="card-col">
              <Card
                className="project-card"
                onClick={() => activateProjectModal(project)}
              >
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
      <ProjectModal
        show={showModal}
        project={project}
        onHide={() => setShowModal(false)}
      />
    </>
  );
}
