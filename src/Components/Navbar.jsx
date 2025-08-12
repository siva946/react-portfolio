import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logoimg from "../assets/IMG_20241216_182604_512.webp";
function Navbar() {
  const navbar = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "/resume" },
  ];
  return (
    <header>
      <nav
        className="d-flex justify-content-between align-items-center px-4 py-3"
      >
        <img
          src={Logoimg}
          alt="logo"
          className="logo"
          style={{ width: "35px", height: "35px", borderRadius: "50%" }}
        />
        <ul
          className="d-flex justify-content-end align-items-center pt-4 text-decoration-none"
          style={{
            gap: "70px",
            listStyleType: "none",
            textDecoration: "none",
            fontSize: "1.3rem",
          }}
        >
          {navbar.map((navs, index) => (
            <li key={index}>
              <NavLink className="nav-link" to={navs.link}>
                {navs.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
