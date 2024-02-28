import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const [showpassword, setpassword] = useState(false);
  const [showConpassword, setConpassword] = useState(false);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setformData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formData.password != formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
    console.log(formData);
  };

  return (
    <div>
      {/* student instructor tag */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* First or Last Name */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              value={formData.firstname}
              placeholder="Enter First Name"
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              value={formData.lastname}
              placeholder="Enter Last Name"
            />
          </label>
        </div>

        {/* Email Address */}
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            placeholder="Enter Email Address"
          />
        </label>

        {/* createPassword and Confirm Password */}
        <label>
          <p>
            Create Password <sup>*</sup>
          </p>
          <input
            required
            type={showpassword ? "text" : "password"}
            name="password"
            onChange={changeHandler}
            value={formData.password}
            placeholder="Enter Password"
          />
          <span onClick={() => setpassword((prev) => !prev)}>
            {showpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <label>
          <p>
            Confirm Password <sup>*</sup>
          </p>
          <input
            required
            type={showConpassword ? "text" : "password"}
            name="confirmPassword"
            onChange={changeHandler}
            value={formData.confirmPassword}
            placeholder="Enter Confirm Password"
          />
          <span onClick={() => setConpassword((prev) => !prev)}>
            {showConpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
