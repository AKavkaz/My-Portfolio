import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [buttonText, setButtonText] = useState("Send");

  const handleClick = () => {
    setButtonText("Sent!");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t6qe73j", "template_5in8myv", form.current, {
        publicKey: "L_PoicZTpzyCUQzVw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className="contact__form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input
        onClick={handleClick}
        className="contact__btn"
        type="submit"
        value={buttonText}
      />
    </form>
  );
}

export default Contact;
