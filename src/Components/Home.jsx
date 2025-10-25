import React, { useState, useEffect } from "react";
import ProfilePic from "../assets/pp.apng";
import * as Icon from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";

const CONTACT_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/siva-subramani-v-6b340628a",
    icon: <Icon.Linkedin className="icon" />
  },
  {
    name: "GitHub",
    url: "https://github.com/siva946",
    icon: <Icon.Github className="icon" />
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dark__offcl/",
    icon: <Icon.Instagram className="icon" />
  },
  {
    name: "Email",
    url: "mailto:velusiva292@gmail.com",
    icon: <Icon.EnvelopeFill className="icon" />
  }
];

const TYPING_TEXTS = [
  " Full Stack Developer",
  " React Developer",
  " Python & AI Enthusiast",
];

function Home() {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < TYPING_TEXTS[textIndex].length) {
        timeout = setTimeout(() => {
          setTypedText((prev) => prev + TYPING_TEXTS[textIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 70);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setTypedText(TYPING_TEXTS[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
          setTextIndex((textIndex + 1) % TYPING_TEXTS.length);
        }, 100);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, textIndex]);
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center pt-5">
        <div
          className="col-lg-6 d-flex flex-column px-5 py-3 home-text"
        >
          <p className="fw-bold text-white">
            Hi There!! <span className="waveAnimation">👋</span>
          </p>
          <p className="fw-bold text-primary">I'M SIVA SUBRAMANI</p>
          {/*type animation*/}
          <p className="fw-bold text-white">
            <span>
              {" "}
              A <span className="typesymbol">{typedText}</span>
            </span>
          </p>
        </div>

        <div className="Image col-lg-6 d-flex justify-content-center align-items-center">
          <img
            src={ProfilePic}
            alt="Siva Subramani V - Full Stack Developer"
            className="w-100 h-100 profile-img"
            loading="lazy"
            style={{
              borderBottomLeftRadius: "33%",
              borderBottomRightRadius: "25%",
              filter: "saturate(0) drop-shadow(1px 1px 5px white)",
              background: "transparent",
            }}
          />
        </div>
    </div>
    <Container className="mt-5 text-white">
        <h1 className="text-center" style={{fontWeight: '700'}}>FIND ME ON</h1>
        <p className="text-center"> Feel free to <span style={{fontWeight:"600"}}>connect</span> with me</p>
    <Row className="d-flex justify-content-center align-items-center">
      <Col className="d-flex justify-content-center align-items-center flex-wrap mt-2 contact-col">
        {CONTACT_LINKS.map((link, index) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={`contact-link ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <i className="contact-btn">{link.icon}</i>
          </a>
        ))}
      </Col>
    </Row>
    </Container>    
    </>
  );
}
export default Home;
