import { Container, Row, Col, Card, Button } from "react-bootstrap";
import imageRestoration from "../assets/project2.apng";
import VoiceAssistant from "../assets/project1.apng";
import Portfolio from "../assets/project3.apng";
import Ecommerce from "../assets/project5.apng";
import Chatbot from "../assets/project7.apng";

const PROJECTS = [
  {
    title: "AI-Based Image Restoration Model",
    description:
      "A deep learning project that restores and enhances old or damaged images using advanced neural networks—removing noise, repairing missing parts, and improving clarity automatically.",
    image: imageRestoration
  },
  {
    title: "Apple E-Commerce Platform",
    description:
      "A modern Apple e-commerce platform for browsing and shopping the latest devices and accessories—featuring seamless navigation and secure checkout.",
    demoLink: "https://siva946.github.io/e-commerce.github.io/",
    image: Ecommerce,
  },
  {
    title: "AI-Based Chatbot",
    description: "A versatile, lightweight chatbot built with Python and Flask, powered by the Gemini API for natural language conversations. Supports multiple languages with a clean HTML/CSS interface.",
    image: Chatbot,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using HTML, CSS, Bootstrap, and JavaScript to showcase projects, experience, and skills in web development.",
    demoLink: "https://sivasubramani-portfolio.netlify.app/",
    image: Portfolio,
  },
  {
    title: "Desktop Voice Assistant",
    description:
      "Python-based desktop application that responds to voice commands, performs web searches, opens applications, and automates daily tasks using speech recognition and text-to-speech tech.",
    image: VoiceAssistant,
  },
];

function Projects() {
    
  return (
    <Container className="py-5">
      <h2 className="mb-5 text-center projects-heading">Projects</h2>
      <Row className="g-4">
        {PROJECTS.map((project, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <Card className="h-100 project-card">
              <div className="img-container">
                <Card.Img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <Card.Body className="d-flex flex-column text-white">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {project.description}
                </Card.Text>
                <div className="mt-3">
                  {project.demoLink && (
                    <Button
                      variant="primary"
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="custom-btn"
                    >
                      View Demo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <style>{`.projects-heading {
  font-size: 2.5rem;
  color: white;
  font-weight: 700;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 10px;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(255,255,255,0.2);
}

.img-container {
  overflow: hidden;
  border-radius: 15px;
  height: 25vh;
}

.img-container img {
  transition: transform 0.4s ease;
}

.project-card:hover .img-container img {
  transform: scale(1.1);
}

.custom-btn {
  border-radius: 30px;
  transition: all 0.3s ease;
  font-weight: 600;
}

.custom-btn:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .img-container {
    height: 20vh;
  }
  .projects-heading {
    font-size: 2rem !important;
  }
}

@media (max-width: 320px) {
  .img-container {
    height: 18vh;
  }
  .projects-heading {
    font-size: 1.5rem !important;
  }
  .project-card {
    padding: 8px;
  }
    .card-title{
    font-size: 1.1rem;
    }
    .card-text{
    font-size: 0.9rem;
    }
  .custom-btn {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

        `}</style>
    </Container>
  );
}

export default Projects;
