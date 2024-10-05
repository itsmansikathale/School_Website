import React, { useRef } from "react";
import "./Faculty.css";
import next_icon from "../../assets/next-btn.png";
import back_icon from "../../assets/back-btn.png";
import jd from "../../assets/jd.jpeg";
import faaa2 from "../../assets/faaa2.jpeg";
import faculty2 from "../../assets/faculty2.jpeg";
import f_4 from "../../assets/f_4.jpeg";
import f_5 from "../../assets/f_5.jpeg";
import f_6 from "../../assets/f_6.jpeg";
const Faculty = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="faculty">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="f-info">
                <img src={jd} alt="" />
                <div>
                  <h3>John Doe</h3>
                  <span>Principle</span>
                </div>
              </div>
              <p>M.Ed, 20 years of experience in educational administration.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="f-info">
                <img src={faaa2} alt="" />
                <div>
                  <h3>Jane Smith</h3>
                  <span>Vice Principle</span>
                </div>
              </div>
              <p>M.Sc. in Physics, 15 years of teaching experience.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="f-info">
                <img src={faculty2} alt="" />
                <div>
                  <h3>Emily Johnson</h3>
                  <span>English Teacher</span>
                </div>
              </div>
              <p>M.A in English, 8 years of teaching experience.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="f-info">
                <img src={f_4} alt="" />
                <div>
                  <h3>Micheal Brown</h3>
                  <span>Mathematics Teacher</span>
                </div>
              </div>
              <p>M.Sc. in Mathematics, 8 years of teaching experience.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="f-info">
                <img src={f_5} alt="" />
                <div>
                  <h3>Sophia Davis</h3>
                  <span>Science Teacher</span>
                </div>
              </div>
              <p>M.Sc. in Chemistry, 12 years of teaching experience.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Faculty;
