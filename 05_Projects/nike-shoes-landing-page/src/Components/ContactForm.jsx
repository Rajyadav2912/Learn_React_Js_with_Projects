import React from "react";
import Button from "./Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useState } from "react";

const ContactForm = (props) => {
  const [newName, setName] = useState();
  const [newEmail, setEmail] = useState();
  const [newText, setText] = useState();

  const onViaCallSubmit = () => {
    console.log("I am form call");
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const textHandler = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const Details = {
      Name: newName,
      Email: newEmail,
      Text: newText,
    };

    console.log(Details);
  };

  return (
    <section className="contactForm">
      <div className="contact_Form">
        <div className="top-btn">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <Button
          isoutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className="form-controler">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={nameHandler}
              value={newName}
              name="name"
            />
          </div>
          <div className="form-controler">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={emailHandler}
              value={newEmail}
              name="email"
            />
          </div>
          <div className="form-controler">
            <label htmlFor="text">Message</label>
            <textarea
              name="text"
              onChange={textHandler}
              value={newText}
              rows={8}
            />
          </div>
          <div className="submit-btn">
            <Button text="Submit" />
          </div>
        </form>
      </div>
      <div className="image">
        <img src="./images/contact.svg" alt="img" />
      </div>
    </section>
  );
};

export default ContactForm;
