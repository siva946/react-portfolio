import ResumePdf from '../assets/SIVA_SUBRAMANI_V.pdf'
import * as Icon from 'react-bootstrap-icons';
function Resume() {
  const styles={
    color:"black"
  };

    return (
        <>
            <div className="text-center">
                <h1 className="text-white mb-4">Resume</h1>
                <a href={ResumePdf} download className="btn btn-primary">
                    Download Resume
                </a>
            </div>
            
         <div className="container py-4" style={{ maxWidth:"1000px",fontFamily:"'chivo'" }}>
      <div className="card shadow-sm">
        <div className="card-body p-5">
          {/* Header */}
          <div className="d-flex flex-column flex-md-row text-center justify-content-center align-items-center" >
            <div>
              <h1 className="mb-1"><strong style={styles}>SIVA SUBRAMANI V</strong></h1>
              <small className="text-muted">Full Stack / Frontend Developer</small>
              <p className="mb-1 text-muted fw-medium">Karaikudi</p>
              <div className="d-flex gap-2">
                <a href="mailto:velusiva292@gmail.com" className="me-3" style={{fontSize:"15px",textDecoration:"none"}}><Icon.EnvelopeFill size={12} color='#0A58CA'/>  velusiva292@gmail.com</a>
                <p className="me-3" style={{fontFamily:"'chivo'",fontSize:"15px",textDecoration:"none",color:"#0a58ca"}}>+91 91505 87625</p>
                <a href="https://www.linkedin.com/in/siva-subramani-v-6b340628a" target="_blank" rel="noreferrer" className="me-3"style={{fontSize:"15px",textDecoration:"none"}}><Icon.Linkedin size={10} color='#0A58CA'/>  Linkedin</a>
                <a href="https://sivasubramani-portfolio.netlify.app/" target="_blank" rel="noreferrer" style={{fontSize:"15px",textDecoration:"none"}}><Icon.PersonCircle size={12} color='#0A58CA'/>  Portfolio</a>
              </div>
            </div>
          </div>

          {/* Profile */}
          <section className="mb-3 mt-2" style={styles}>
            <h5 className="mb-2 fw-bold">Profile</h5>
            <p className="mb-0" style={styles}>Passionate software developer proficient in React, Tailwind CSS, and JavaScript, with experience creating responsive applications. Committed to delivering high-quality solutions while continuously learning and enhancing problem-solving skills.</p>
          </section>

          <div className="row">
            <div className="col-md-8">
              {/* Experience */}
              <section className="mb-3" style={styles}>
                <h5 className="mb-2 fw-bold">Experience</h5>
                <div className="mb-3">
                  <p className="mb-1 fw-bold" style={styles}>Web Developer Intern — Sai Techno Solutions</p>
                  <small className="text-muted">July 2024 - August 2024 • Coimbatore</small>
                  <ul className="mt-2 mb-0" style={{fontWeight:"400", fontSize:"15px"}}>
                    <li style={styles}>Collaborated with teams to develop 3+ responsive websites using HTML, CSS, JavaScript and React, increasing user satisfaction by 20%.</li>
                    <li style={styles}>Integrated RESTful APIs to improve data retrieval speed by 20% and enhance application functionality.</li>
                  </ul>
                </div>
              </section>

              {/* Projects */}
              <section className="mb-3" style={styles}>
                <h5 className="mb-2 fw-bold">Projects</h5>

                <div className="mb-3" style={styles}>
                  <h6 className="mb-1 fw-bold">AI-Based Image Restoration and Reconstruction (Final Year Project)</h6>
                  <small className="text-muted">Jan 2025 - Mar 2025</small>
                  <p className="mb-1" style={styles}>Engineered an AI-based image restoration system using CNNs and GANs, improving processing time by 35% and restoring over 10,000 severely damaged images with ~92% accuracy during a 6-month deployment.</p>
                </div>

                <div className="mb-3" style={styles}>
                  <h6 className="mb-1 fw-bold">E-commerce platform</h6>
                  <small className="text-muted">July 2025</small>
                  <p className="mb-1" style={styles}>A modern Apple E‑commerce platform (live: <a href="https://siva946.github.io/e-commerce.github.io/" target="_blank" rel="noreferrer">siva946.github.io</a>). Improved load time by 50% and reduced bounce rates.</p>
                </div>

                {/* <div className="mb-3">
                  <h6 className="mb-1">Desktop Voice Assistant (Python)</h6>
                  <small className="text-muted">May 2025</small>
                  <p className="mb-0">Built a voice assistant using SpeechRecognition, pyttsx3 and PyAudio with API integrations for reminders and real-time information retrieval.</p>
                </div>

                <div className="mb-3">
                  <h6 className="mb-1">College Website — Attendance Form</h6>
                  <small className="text-muted">Jan 2023 - Feb 2023</small>
                  <p className="mb-0">Designed an attendance form used by 1,000+ students, reducing check-in time by 30% and lowering input errors by 40%.</p>
                </div> */}
              </section>

              {/* Education */}
              <section className="mb-3" style={styles}>
                <h5 className="mb-2 fw-bold">Education</h5>
                <div>
                  <h6 className="mb-1" style={styles}>B.E., Computer Science & Engineering — Mount Zion College Of Engineering And Technology</h6>
                  <small className="text-muted">Pudukkottai • 2025 • 7.32/10</small>
                </div>
                <div className="mt-2">
                  <h6 className="mb-1" style={styles}>Senior Secondary (XII) — Sree Meenakshi Sundareshwar Vidhyasala Higher Secondary School</h6>
                  <small className="text-muted">Karaikudi • 2021 • 78%</small>
                </div>
              </section>

              {/* Certifications */}
              <section className="mb-3"style={styles}>
                <h5 className="mb-2 fw-bold">Certifications</h5>
                <ul className="mb-0">
                  <li style={styles}>Javascript & Data Structures — freeCodeCamp (2025)</li>
                  <li style={styles}>Bootstrap Framework — Udemy (2024)</li>
                  <li style={styles}>Python Programming — Skillrack (2023)</li>
                </ul>
              </section>
            </div>
          
            <div className="col-md-4">
              {/* Skills */}
              <aside>
                <section className="mb-3" style={styles}>
                  <h6 className="mb-2 fw-bold">Skills</h6>
                  <div className="mb-2" >
                    <strong style={styles}>Hard:</strong>
                    <p className="mb-1" style={styles}>HTML, CSS, Bootstrap, Tailwind CSS, React, JavaScript, Node.js, Angular, Vue.js, Python, PHP, SQL, Java, AWS, Flask API, MongoDB, Git, GitHub</p>
                  </div>
                  <div >
                    <strong style={styles}>Soft:</strong>
                    <p className="mb-0" style={styles}>Effective communication, Problem solving, Continuous learner, Adaptable</p>
                  </div>
                </section>

                {/* Links */}
                <section className="mb-3" style={styles}>
                  <h6 className="mb-2">Links</h6>
                  <ul className="list-unstyled mb-0">
                    <li><a href="https://www.linkedin.com/in/siva-subramani-v-6b340628a" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="https://sivasubramani-portfolio.netlify.app/" target="_blank" rel="noreferrer">Portfolio</a></li>
                    <li><a href="https://siva946.github.io/e-commerce.github.io/" target="_blank" rel="noreferrer">E‑commerce Demo</a></li>
                  </ul>
                </section>
                  <p className="mb-0" style={styles}><strong style={styles}>Availability:</strong> Open to opportunities</p>
              </aside>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Resume;