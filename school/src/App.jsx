import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Title from "./Components/Title/Title";
import Gallery from "./Components/Gallery/Gallery";
import Academics from "./Components/Academics/Academics";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="container">
        <Title subTitle="ABOUT US" />
      </div>
      <About />
      <Title subTitle="GALLERY" />
      <Gallery />
      <Academics subTitle="ACADEMICS" />
      <Title subTitle="PROFILE" title="FACULTY" />
      <Title subTitle="Contact Us" title="Get In Touch" />
      <Contact />
    </div>
  );
};

export default App;
