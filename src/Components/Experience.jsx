import { Container, Row, Col, Card } from "react-bootstrap";

function Experience() {
    const experiences = [
        {
            title: "Web Developer Intern",
            company: "Sai Techno Solutions",
            link: "https://www.linkedin.com/company/techno-vision-innovations/",
            description: "Worked as a web developer intern for 1 month, contributing to responsive websites.",
            icon: "devicon-html5-plain colored"
        },
        {
            title: "Freelance Web Developer",
            description: "Worked as a freelance web developer for 1 year, creating modern web applications.",
            icon: "devicon-react-plain colored"
        },
        {
            title: "Owner - Customized Gifts Shop",
            company: "CB Photoframes and Gifts",
            link: "https://www.instagram.com/chotta_bheem__photo_frames",
            description: "Owned and managed a customized gifts shop for 1 year, focusing on e-commerce branding.",
            icon: "devicon-shopify-plain colored"
        }
    ];

    const skillSet = [
        "devicon-html5-plain colored", "devicon-angularjs-plain colored", "devicon-javascript-plain colored",
        "devicon-python-plain colored", "devicon-java-plain colored", "devicon-css3-plain colored",
        "devicon-go-plain colored", "devicon-react-plain colored", "devicon-bootstrap-plain colored",
        "devicon-tailwindcss-plain colored", "devicon-mongodb-plain colored", "devicon-nodejs-plain colored",
        "devicon-flask-plain colored", "devicon-mysql-plain colored", "devicon-materialui-plain colored",
        "devicon-git-plain colored", "devicon-github-plain colored", "devicon-netlify-plain colored",
        "devicon-firebase-plain colored", "devicon-photoshop-plain colored", "devicon-figma-plain colored"
    ];

    return (
        <div className="experience-wrapper">
            <Container fluid className="py-5">
                <Row>
                    {/* Left Column - Experience */}
                    <Col md={6} className="px-5">
                        <h1 className="section-title">Experience</h1>
                        {experiences.map((exp, index) => (
                            <Card key={index} className="glass-card my-4">
                                <div className="card-icon">
                                    <i className={exp.icon} style={{ fontSize: "2.5rem" }} />
                                </div>
                                <div className="card-content">
                                    <h3>{exp.title}</h3>
                                    {exp.company && (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                            {exp.company}
                                        </a>
                                    )}
                                    <p>{exp.description}</p>
                                </div>
                            </Card>
                        ))}
                    </Col>

                    {/* Right Column - Skills Orbit */}
                    <Col md={6} className="skills-orbit-wrapper d-flex justify-content-center align-items-center">
                        <div className="orbit-center">
                            <div className="center-icon">
                                <i className="devicon-react-plain colored" style={{ fontSize: "3rem" }} />
                            </div>
                            <div className="orbit">
                                {skillSet.map((icon, i) =>{
                                    const angle = (360 / skillSet.length) * i;
                                    return(
                                        <div key={i} className="orbit-item" style={{ transform: `rotate(${angle}deg) translate(260px) rotate(-${angle}deg)` }}>
                                        <i className={icon} style={{ fontSize: "1.8rem" }} />
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style>{`
                .experience-wrapper {
                    overflow: hidden;
                    position: relative;
                }
                .section-title {
                    font-weight: 800;
                    color:white;
                }
                .glass-card {
                    background: rgba(255,255,255,0.08);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    color:#E0E1DD;
                    gap: 15px;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .glass-card:hover {
                    transform: translateY(-8px) scale(1.02);
                }
                .card-icon {
                    min-width: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .card-content h3 {
                    margin: 0;
                    font-weight: 700;
                }
                .card-content a {
                    color: #ffae00;
                    text-decoration: none;
                    font-weight: 600;
                }
                .card-content p {
                    margin-top: 5px;
                    opacity: 0.8;
                }
                /* Orbit Animation */
                .skills-orbit-wrapper {
                    position: relative;
                    height: 650px;
                }
                .orbit-center {
                    position: relative;
                    width: 500px;
                    height: 500px;
                }
                .center-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(255,255,255,0.1);
                    padding: 50px;
                    border-radius: 50%;
                    box-shadow: 0 0 20px rgba(255,255,255,0.1);
                }
                .orbit {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    height: 100%;
                    transform: translate(-50%, -50%);
                    animation: rotateOrbit 20s linear infinite;
                }
                .orbit-item {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    border:none;
                    border-radius:50%;
                    transition: transform 0.3s ease;
                }
            
                .orbit-item:hover {
                    transform: scale(2);
                }
                @keyframes rotateOrbit {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export default Experience;
