import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  const projects = [

    {
        title: "AI-Based Image Restoration Model",
        description:"A deep learning project that restores and enhances old or damaged images using advanced neural networks—removing noise, repairing missing parts, and improving clarity automatically.",
        githubLink: "https://github.com/yourusername/image-restoration",
        demoLink: "#"
    },
    {
      title: "Desktop Voice Assistant",
      description:
        "Python-based desktop application that responds to voice commands, performs web searches, opens applications, and automates daily tasks using speech recognition and text-to-speech tech.",
      githubLink: "https://github.com/yourusername/voice-assistant",
      demoLink: "#"
    },
    {
      title: "Portfolio",
      description:
        "A personal portfolio website built using HTML, CSS, Bootstrap, and JavaScript to showcase projects, experience, and skills in web development.",
      githubLink: "#",
      demoLink: "https://sivasubramani-portfolio.netlify.app/"
    },
    {
      title: "Bexon Landing Page",
      description:
        "Showcases Bexon—an innovative company empowering businesses through tailored solutions, excellent service, and a commitment to sustainable success.",
      githubLink: "#",
      demoLink: "https://bexon-landing-page.vercel.app"
    },
    {
      title: "Apple E-Commerce Platform",
      description:
        "A modern Apple e-commerce platform for browsing and shopping the latest devices and accessories—featuring seamless navigation and secure checkout.",
      githubLink: "#",
      demoLink: "https://siva946.github.io"
    },
    {
      title: "Number Guessing Game",
      description:
        "An interactive web-based game where players guess a randomly generated number within a specified range, with feedback guiding them to the correct answer.",
      githubLink: "#",
      demoLink: "https://siva946.github.io"
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Projects</h2>
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} lg={4} md={6} sm={12}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                <div className="mt-3">
                  {project.githubLink && (
                    <Button variant="outline-primary" href={project.githubLink} target="_blank" rel="noreferrer" className="me-2">
                      GitHub
                    </Button>
                  )}
                  {project.demoLink && (
                    <Button variant="primary" href={project.demoLink} target="_blank" rel="noreferrer">
                      Live Demo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
