import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5int08o",
        "template_cx8gck2",
        form.current,
        "user_kBDHG7xVD5tbyVpxj2sCR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // e.target.reset();
  };

  return (
    <div className="contact-section ">
      <div className="container grid grid-cols-2 gap-6 my-20 items-center">
        <div className="w-10/12 mx-auto">
          <h1 className="text-6xl font-extrabold">Hire Me</h1>
          <p className="font-semibold text-gray-500 py-10">
            I am available for freelance work. Connect with me via phone: 01923
            088574 or email: admin@example.com
          </p>
          <div>
            <form ref={form} onClick={sendMail}>
              <input
                className="py-2 px-2 w-full rounded border-2 mb-4"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <br />
              <input
                className="py-2 px-2 w-full rounded border-2 mb-4"
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <br />
              <input
                className="py-2 px-2 w-full rounded border-2 mb-4"
                type="text"
                name="subject"
                placeholder="Write Desire Subject"
              />
              <br />

              <textarea
                rows="5"
                className="py-2 px-2 w-full rounded border-2 mb-4"
                type="text"
                name="message"
                placeholder="Write Your Message"
              />
              <br />
              <button
                type="submit"
                className="w-full py-2 bg text-white font-bold rounded"
              >
                {" "}
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="contact-img">
          <img src="https://i.ibb.co/PgpVk3m/scic.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
