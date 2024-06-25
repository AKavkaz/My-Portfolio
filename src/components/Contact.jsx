import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [buttonText, setButtonText] = useState("Send");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText("Loading...")

    emailjs
      .sendForm("service_t6qe73j", "template_5in8myv", form.current, {
        publicKey: "L_PoicZTpzyCUQzVw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setButtonText("Sent!");
          setButtonDisabled(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className="contact__form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input
        disabled={buttonDisabled}
        style={{ cursor: buttonDisabled ? "not-allowed" : "pointer" }}
        className="contact__btn"
        type="submit"
        value={buttonText}
      />
    </form>
  );
}

export default Contact;
