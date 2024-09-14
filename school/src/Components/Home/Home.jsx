import React from "react";
import "./Home.css";
// import logo2 from "../../assets/logo2.png";

const Home = () => {
  return (
    <div className="home container">
      <div className="home-text">
        {/* <img src={logo2} alt="" /> */}
        <h1>Springdale Public School</h1>
        <p>
          "Welcome to Springdale Public School, where we nurture young minds for
          a brighter future
        </p>
        <button className="btn">Explore More</button>
      </div>
    </div>
  );
};

export default Home;
