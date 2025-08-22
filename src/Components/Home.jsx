import React from "react";
import ProfilePic from "../assets/pp.apng";
import { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Container,Card,Row,Col } from "react-bootstrap";

function Home() {
    const ContactLinks=[
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
    ]

  const texts = [
    " Full Stack Developer",
    " React Developer",
    " Python & AI Enthusiast",
  ];
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setTypedText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 70);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1800); // Pause before starting to delete
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setTypedText(texts[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
          setTextIndex((textIndex + 1) % texts.length);
        }, 100);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, textIndex, texts]);
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center pt-5">
        <div
          className="col-lg-6 d-flex flex-column px-5 py-3"
          style={{ fontSize: "2rem" }}
        >
          <p className="fw-bold text-white">
            Hi There!! <span className="waveAnimation">👋</span>
          </p>
          <p className="fw-bold text-primary">I'M SIVA SUBRAMANI V</p>
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
            alt="Profileimage"
            className="w-100 h-100"
            style={{
              borderBottomLeftRadius: "33%",
              borderBottomRightRadius: "25%",
              maxWidth: "550px",
              filter: "saturate(0) drop-shadow(1px 1px 5px white",
              background: "transparent",
            }}
          />
        </div>
    </div>
    <Container className="mt-5 text-white">
        <h1 className="text-center">FIND ME ON</h1>
        <p className="text-center"> Free to <span style={{color:"#0e1c26",fontWeight:"600"}}>connect</span> with me</p>
        <Row className="d-flex justify-content-center align-items-center">
            <Col className="    d-flex justify-content-center align-items-center mt-2">
                {ContactLinks.map((link, index) => (
                    
                    <a href={link.url} target="_blank" rel="noopener noreferrer" key={index} className="mx-3"
                    onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                    >
                        <i className="icon" style={{
                            width:"40px",
                            height:"40px",
                            margin:"0 auto",
                            borderRadius:"50%",
                            backgroundColor:"#E0E1DD",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            transition:"all 0.3s ease",
                            color:"#4682b4",
                            boxShadow:
                      activeIndex === index
                        ? "0 0 10px 5px #4682b4"
                        : "none",
                        }}>{link.icon}</i>
                    </a>
                ))}
            </Col>
        </Row>
    </Container>     
    </>
  );
}
export default Home;
