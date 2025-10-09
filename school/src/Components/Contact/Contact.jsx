import React from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    const name = formData.get("name").trim();
    const mobile = formData.get("mobile").trim();
    const message = formData.get("message").trim();

    //  Validation Condition
    const mobilePattern = /^[0-9]&/;
    if (!name || !mobile || !message) {
      setResult("Please Fillout All The Fields.");
      return;
    }

    if (!mobilePattern.test(mobile)) {
      setResult("Please Enter A Valid Mobile Number.");
    }

    // If Validation Success
    setResult("Sending....");

    formData.append("access_key", "b26aa092-64ef-47dc-89ad-89e8503712fb");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Hurry Up For Admission </h3>
        <br />
        <p>For More Information</p>
        <ul>
          <li>📧 www.springdalepublicschool.com </li>
          <li>📱+9876543210</li>
          <li>
            📍123 Springdale Public School, Mumbai <br />
            Maharashtra, India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Enter Your Name </label>
          <input type="text" name="name" required />
          <label>Mobile Number </label>
          <input type="tel" name="mobile" required />
          <label>Write a Message</label>
          <textarea name="message" rows="6" required></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
