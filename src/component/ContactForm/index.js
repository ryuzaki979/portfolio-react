import React from "react";
import './style.css'
const ContactForm = () => {
  return (
    <>
      <section className="contact " id="contact">
        <h2>Get In Touch</h2>
        <div className="contact-container flex">
          <form action="">
            <label for="name">Name</label>
            <input type="text" id="name" />
            <label for="subject">Subject</label>
            <input type="text" id="subject" />
            <label for="email">Email</label>
            <input type="email" id="email" />
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>

            <a href="mailto: samirsayek321@gmail.com" className="btn">
              Send Email
            </a>
          </form>
        </div>
      </section>
    </>
  );
};


export default ContactForm
