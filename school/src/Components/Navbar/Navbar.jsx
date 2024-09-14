import React, { useEffect, useState } from "react";
import "./Navbar.css";
// import logo from "../../assets/logo.png";
// import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      {/* <h3>Springdale Public School</h3> */}

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Academics</li>
        <li>Admissions</li>
        <li>Faculty</li>
        <li>Students</li>
        <li>Gallery</li>
        <li>
          {/* <button className="btn"> */}
          Contact Us
          {/* </button> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
