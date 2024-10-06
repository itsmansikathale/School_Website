import React from "react";
import "./Admission.css";
import admission from "../../assets/admission.png";

const Admission = () => {
  return (
    <div className="admission">
      <div className="ad-col">
        <h4>Process </h4>
        <br />
        <p>- Admission forms are available for download.</p>
        <br />
        <p>
          - Submit the completed form along with required documents at school
          office.
        </p>
        <br />
        <h4>Criteria </h4>
        <br />
        <p>- Admission is based on merit and availability of seats</p>
        <br />
        <p>- Enterence tests may be conducted for certain grades</p>
        <br />
        <h4>Important Dates 📅</h4>
        <br />
        <p>"Admission Form Availability : March 1'st"</p>
        <br />
        <p>Last Date for Submission : March 31'st "</p>
        <br />
        <p>"Enterence Test : April 15'th</p>
        <br />
        <p>"Announcement of Results : April 30'th" </p>
      </div>
      <div className="ad-col">
        <img src={admission} alt="hi" />
      </div>
    </div>
  );
};

export default Admission;
