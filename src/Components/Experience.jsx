import { Container, Row, Col, Card } from "react-bootstrap";


function Experience() {
    const experiences = [
        {
            title: "Web Developer Intern",
            company: "Sai Techno Solutions",
            link: "https://www.linkedin.com/company/techno-vision-innovations/",
            description: "Worked as a web developer intern for 1 month, contributing to responsive websites.",
            icon: <i className="devicon-html5-plain colored" size={50} />
        },
        {
            title: "Owner - Customized Gifts Shop",
            company: "CB Photoframes and Gifts",
            link: "https://www.instagram.com/chotta_bheem__photo_frames",
            description: "Owned and managed a customized gifts shop for 1 year, focusing on e-commerce branding.",
            icon: <i className="devicon-shopify-plain colored" size={50} />
        },
        {
            title: "Freelance Web Developer",
            company: "",
            link: "",
            description: "Worked as a freelance web developer for 1 year, creating modern web applications.",
            icon: <i className="devicon-react-plain colored" size={50} />
        }
    ];
    const skillSet=[
            {icons:"devicon-html5-plain colored"},
            {icons:"devicon-angularjs-plain colored"},
            {icons:"devicon-javascript-plain colored"},
            {icons:"devicon-python-plain colored"},
            {icons:"devicon-java-plain colored"},
            {icons:"devicon-css3-plain colored"},
            {icons:"devicon-go-plain colored"},
            {icons:"devicon-react-plain colored"},
            {icons:"devicon-bootstrap-plain colored"},
            {icons:"devicon-tailwindcss-plain colored"},
            {icons:"devicon-mongodb-plain colored"},
            {icons:"devicon-nodejs-plain colored"},
            {icons:"devicon-flask-plain colored"},
            {icons:"devicon-mysql-plain colored"},
            {icons:"devicon-materialui-plain colored"},
            {icons:"devicon-git-plain colored"},
            {icons:"devicon-github-plain colored"},
            {icons:"devicon-netlify-plain colored"},
            {icons:"devicon-firebase-plain colored"},
            {icons:"devicon-photoshop-plain colored"},
            {icons:"devicon-figma-plain colored"},
        ];

    return (
        <>
        <Container className="py-5">
            <h1 className="text-center mb-5 text-light fw-bold">Experience</h1>
            <Row className="g-4">
                {experiences.map((exp, index) => (
                    <Col md={6} lg={4} key={index}>
                        <Card 
                            className="experience-card text-light h-100 shadow-lg border-0"
                            style={{ background:"black"}}
                        >
                            <Card.Body className="text-center">
                                <div className="icon-wrapper mb-3">{exp.icon}</div>
                                <Card.Title className="fw-bold fs-4">{exp.title}</Card.Title>
                                {exp.company && (
                                    <Card.Subtitle className="mb-2">
                                        <a 
                                            href={exp.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white fw-semibold text-decoration-none"
                                        >
                                            {exp.company}
                                        </a>
                                    </Card.Subtitle>
                                )}
                                <Card.Text className="mt-3">{exp.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        <div className="skills">
        <h1 className="fw-bold text-white mb-4">Skills</h1>
        <div className="row g-3 skills-set">
            {skillSet.map((skill,index)=>(
                <span className="col-auto" key={index}>
                    <i className={skill.icons}/>
                </span>
            ))}
        </div>
    </div>
        </>
    );
}

export default Experience;
