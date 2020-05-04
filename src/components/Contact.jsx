import React from "react";
import ContactForm from "./ContactForm.jsx";

const Contact = () => (
  <div className="app-container">
    <section id="contact" className="contact">
      <h2 className="title">contact</h2>
      <div className="container-flex">
        <div className="box-flex">
          <h3>Address</h3>
          <h4>Address</h4>
          <p>Consectetur 5, 01-456 Adipisicing</p>
          <h4>Phone</h4>
          <p>500 987 679</p>
          <h4>E-mail</h4>
          <p>lorem@gmail.com</p>
        </div>
        <div className="box-flex contact-box">
          <h3>Leave your data and we'll get in touch</h3>
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
