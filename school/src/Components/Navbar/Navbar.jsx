import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import logo from "../../assets/logo.png";
// import logo from "../../assets/logo.png";
// import image from "../../assets/images.png";
import { LiaSchoolSolid } from "react-icons/lia";

import { Link } from "react-scroll";

import menu3 from "../../assets/menu3.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      {/* <h3>Springdale Public School</h3> */}
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li className="logo1">
          <LiaSchoolSolid fontSize="80px" width="160px" color=" #a06321" />
        </li>
        <li>
          <Link to="home" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-260} duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link to="academics" smooth={true} offset={-150} duration={500}>
            Academics
          </Link>
        </li>
        <li>
          <Link to="admission" smooth={true} offset={-260} duration={500}>
            Admissions
          </Link>
        </li>
        <li>
          <Link to="faculty" smooth={true} offset={-260} duration={500}>
            Faculty
          </Link>
        </li>

        <li>
          <Link to="gallery" smooth={true} offset={-150} duration={500}>
            Gallery
          </Link>
        </li>

        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
          >
            {/* <button className="btn"> */}
            Contact Us
            {/* </button> */}
          </Link>
        </li>
      </ul>

      <img src={menu3} alt="" className="menu" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
