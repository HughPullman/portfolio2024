import "./ContactMe.scss";
import emailjs from "@emailjs/browser";
import { useRef, useEffect, useState } from "react";

const ContactMe = ({ active }) => {
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (active) {
      setContact("animate__animated animate__rotateInUpLeft");
    } else {
      setContact("animate__animated animate__rotateOutDownRight");
    }
  }, [active]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mxew3r",
        "template_dini1ne",
        form.current,
        "p5XALq19D34nnIdVO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    name.value = "";
    email.value = "";
    message.value = "";
    alert("Contact Submitted!");
  };

  return (
    <div className={`contactMe ${contact}`}>
      <form
        ref={form}
        className="inputForm"
        onSubmit={sendEmail}
        name="contactForm"
      >
        <h2>Send me a message</h2>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea name="message" id="message" rows={10} placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ContactMe;
