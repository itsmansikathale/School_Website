import React from "react";
import "./Gallery.css";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.webp";
import p6 from "../../assets/p6.webp";
import p7 from "../../assets/p7.jpg";
import p8 from "../../assets/p8.jpg";
import play from "../../assets/play.png";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="photos">
        <img src={p1} alt="" />
        <img src={p2} alt="" />
        <img src={p3} alt="" />
        <img src={p4} alt="" />
      </div>
      <button className="btn dark-btn">See More</button>
    </div>
  );
};

export default Gallery;
