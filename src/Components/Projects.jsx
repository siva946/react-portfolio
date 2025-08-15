import { Container, Row, Col, Card, Button } from "react-bootstrap";
import imageRestoration from "../assets/project2.png";
import VoiceAssistant from "../assets/project1.jpg";
import Portfolio from "../assets/project3.png";
import Bexon from "../assets/project4.png";
import Ecommerce from "../assets/project5.png";
import NumberGuessingGame from "../assets/project6.png";

function Projects() {
  const projects = [
    {
      title: "AI-Based Image Restoration Model",
      description:
        "A deep learning project that restores and enhances old or damaged images using advanced neural networks—removing noise, repairing missing parts, and improving clarity automatically.",
      githubLink: "https://github.com/yourusername/image-restoration",
      demoLink: "#",
      image: imageRestoration,
    },
    {
      title: "Desktop Voice Assistant",
      description:
        "Python-based desktop application that responds to voice commands, performs web searches, opens applications, and automates daily tasks using speech recognition and text-to-speech tech.",
      githubLink: "https://github.com/yourusername/voice-assistant",
      demoLink: "#",
      image: VoiceAssistant,
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio website built using HTML, CSS, Bootstrap, and JavaScript to showcase projects, experience, and skills in web development.",
      githubLink: "#",
      demoLink: "https://sivasubramani-portfolio.netlify.app/",
      image: Portfolio,
    },
    {
      title: "Bexon Landing Page",
      description:
        "Showcases Bexon—an innovative company empowering businesses through tailored solutions, excellent service, and a commitment to sustainable success.",
      githubLink: "#",
      demoLink: "https://bexon-landing-page.vercel.app",
      image: Bexon,
    },
    {
      title: "Apple E-Commerce Platform",
      description:
        "A modern Apple e-commerce platform for browsing and shopping the latest devices and accessories—featuring seamless navigation and secure checkout.",
      githubLink: "#",
      demoLink: "https://siva946.github.io",
      image: Ecommerce,
    },
    {
      title: "Number Guessing Game",
      description:
        "An interactive web-based game where players guess a randomly generated number within a specified range, with feedback guiding them to the correct answer.",
      githubLink: "#",
      demoLink: "https://siva946.github.io",
      image: NumberGuessingGame,
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-5 text-center projects-heading">Projects</h2>
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <Card className="h-100 project-card">
              <div className="img-container">
                <Card.Img src={project.image} alt={project.title} />
              </div>
              <Card.Body className="d-flex flex-column text-white">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                <div className="mt-3">
                  {project.githubLink && (
                    <Button
                      variant="outline-light"
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="me-2 custom-btn"
                    >
                      GitHub
                    </Button>
                  )}
                  {project.demoLink && (
                    <Button
                      variant="primary"
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="custom-btn"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <style>{
        `.projects-heading {
  font-size: 2.5rem;
  color:white;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
  font-weight: bold;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border: none;
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 10px;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
}

.img-container {
  overflow: hidden;
  border-radius: 15px;
  height:25vh;
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
}

.custom-btn:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 12px rgba(255, 255, 255, 0.4);
}

        `
    }</style>
    </Container>
    
  );
}

export default Projects;
