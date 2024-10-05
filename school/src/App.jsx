import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Title from "./Components/Title/Title";
import Gallery from "./Components/Gallery/Gallery";
import Academics from "./Components/Academics/Academics";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Admission from "./Components/Admission/Admission";
import Faculty from "./Components/Faculty/Faculty";
import Students from "./Components/Students/Students";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="container">
        <Title subTitle="ABOUT US" />
      </div>
      <About />
      <Title subTitle="ACADEMICS" />
      <Academics />

      <Title subTitle="ADMISSION" />
      <Admission />

      <Title subTitle="FACULTY" title="Profiles" />
      <Faculty />

      <Title subTitle="STUDENTS" />
      <Students />

      <Title subTitle="GALLERY" />
      <Gallery />

      <Title subTitle="Contact Us" title="Get In Touch" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
