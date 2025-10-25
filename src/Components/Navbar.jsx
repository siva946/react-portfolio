import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logoimg from "../assets/IMG_20241216_182604_512.webp";

const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "Experience", link: "/experience" },
  { name: "Projects", link: "/projects" },
  { name: "Resume", link: "/resume" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="navbar-custom px-4 py-3">
        <img
          src={Logoimg}
          alt="logo"
          className="logo"
          style={{ width: "35px", height: "35px", borderRadius: "50%" }}
        />
        
        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu text-white ${isOpen ? 'active' : ''}`}>
          {NAV_ITEMS.map((navs, index) => (
            <li key={index}>
              <NavLink 
                className="nav-link" 
                to={navs.link}
                onClick={() => setIsOpen(false)}
              >
                {navs.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <style>{`
        .navbar-custom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1100;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: #E0E1DD;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 3px;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap:3rem;
          list-style: none;
          margin: 0;
          font-size: 1.3rem;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-menu {
            position: fixed;
            right: -100%;
            top: 0;
            flex-direction: column;
            width: 100%;
            color: #E0E1DD;
            text-align: center;
            transition: 0.3s;
            padding-top: 80px;
            padding-bottom: 20px;
            backdrop-filter: blur(10px);
            z-index: 1000;
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-menu li {
            margin: 0;
          }
        }

        @media (max-width: 320px) {
          .logo {
            width: 30px !important;
            height: 30px !important;
          }
          .nav-menu {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </header>
  );
}
export default Navbar;
