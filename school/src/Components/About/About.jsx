import React from "react";
import "./About.css";
// import logo2 from "../../assets/logo2.png";
import { LiaSchoolSolid } from "react-icons/lia";

const About = () => {
  return (
    <div className="about">
      {/* <img src={logo2} alt="" /> */}

      {/* <h3>About Us</h3> */}
      <div className="about-left">
        <LiaSchoolSolid fontSize="190px" color=" #a06321" />
        <h3 className="logo">SPRINGDALE PUBLIC SCHOOL</h3>
        {/* <img src={about - img} alt="" className="about-img" />
        <img src={play - button} alt="" className="play-button" /> */}
      </div>
      <div className="about-right">
        <h4>History</h4>
        <p>
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students
        </p>

        <h4>Vision</h4>
        <p>
          To create a learning environment that fosters academic excellence,
          critical thinking and ethical values.
        </p>

        <h4>Mission</h4>
        <p>
          To empower students with the knowledge, skills and values needed to
          thrive in a dynamic world.
        </p>
        <h4>Principal's Message</h4>
        <p>
          At Spingdale, we believe in nurturing the potential of every student
          ans guiding them towards a successful future.
        </p>
        <h4>Infrastructure & Facilities</h4>

        <p> State-of-the-art science and computer labs</p>
        <p> Spacious and well-equipped classrooms.</p>
        <p> Library with a vast collection of books and digital resources.</p>
        <p>
          Sports facilities including a playgournd, gymnasium and swimming pool.
        </p>
      </div>
    </div>
  );
};

export default About;
