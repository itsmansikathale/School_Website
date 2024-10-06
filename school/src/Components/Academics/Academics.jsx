import React from "react";
import academics from "../../assets/academics.jpeg";
const Academics = () => {
  return (
    <div className="academics container">
      {/* <img src="" alt="" /> */}

      <h4>Curriculam 📚</h4>
      <br />
      <h5>Primary (Grades 1 - 5)</h5>
      <p>
        English, Mathematics, Science, Social Studies, Computer Science, Art,
        Physical Education
      </p>
      <br />
      <br />
      <h5>Secondary (Gardes 6 - 10)</h5>
      <p>
        English, Mathematics, Science(PCM), Social Studies, Computer Science,
        Physical Education, Art
      </p>
      <br />
      <br />

      <h5>Senior Secondary (Gardes 11 - 12)</h5>
      <p>
        Science Stream : Physics, Chemistry, Biology, Mathematics , Computer
        Science, English
      </p>

      <br />
      <p>
        Commerce Stream : Accountancy, Business Studies, Economics, Mathematics,
        English
      </p>
    </div>
  );
};

export default Academics;
