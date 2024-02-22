import React from "react";
import "./Form.css";

const Form = () => {
  function btnSubmit() {
    console.log("submit pe click hua hn");
  }

  return (
    <div>
      <form action="#" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />

        <label htmlFor="age">Age</label>
        <input type="text" name="age" />

        <div>
          <h3>Gender</h3>
          <div className="box">
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" className="input" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="female" className="input" />
          </div>
        </div>

        <button onClick={btnSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
