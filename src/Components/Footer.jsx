function Footer() {
  return (
    <footer className=" py-4 mt-5 ">
        <div className="row text-center text-white text-md-start align-items-center">
          
          {/* Left Section */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold">Siva Subramani</h5>
            <p className="mb-0">© {new Date().getFullYear()} All rights reserved.</p>
            <small className="text-white">Built with React & Bootstrap</small>
          </div>

          {/* Middle Section */}
          <div className="col-md-4 mb-3 mb-md-0 text-md-center">
            <p className="mb-2 fw-bold">Quick Links</p>
            <a href="/experience" className="text-light me-3 text-decoration-none">Experience</a>
            <a href="/projects" className="text-light me-3 text-decoration-none">Projects</a>
            <a href="/resume" className="text-light text-decoration-none">Resume</a>
          </div>

          {/* Right Section */}
          <div className="col-md-4 text-md-end">
            <p className="mb-2 fw-bold">Follow Me</p>
            <a
              href="https://github.com/siva946"
              target="_blank"
              rel="noreferrer"
              className="text-light me-3 text-decoration-none"
            >
              <i className="devicon-github-original" style={{ fontSize: "1.5rem" }}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/siva-subramani-v-6b340628a"
              target="_blank"
              rel="noreferrer"
              className="text-light text-decoration-none"
            >
              <i className="devicon-linkedin-plain" style={{ fontSize: "1.5rem" }}></i>
            </a>
          </div>

        </div>
    </footer>
  );
}

export default Footer;
