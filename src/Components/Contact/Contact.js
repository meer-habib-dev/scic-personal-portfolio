import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import RubberBand from "react-reveal/RubberBand";
import HeadShake from "react-reveal/HeadShake";
import Bounce from "react-reveal/Bounce";

const Contact = () => {
  const form = useRef();
  const sendMail = (e) => {
    console.log(form);
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
          if (result.text === "OK") {
            alert("Mail Send Successfully!!");
          }
        },
        (error) => {
          console.log(error.text);
          if (error.text) {
            alert("Something wrong. Try Again...");
          }
        }
      );
    // e.target.reset();
  };

  return (
    <div id="contact" className="contact-section home-section md:py-20 ">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 my-20 items-center">
        <div className="w-10/12 mx-auto">
          <Bounce left>
            <h1 className="text-6xl text-white font-extrabold">Hire Me</h1>
          </Bounce>

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
                required
              />
              <br />
              <input
                className="py-2 px-2 w-full rounded border-2 mb-4"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <br />
              <input
                className="py-2 px-2 w-full rounded border-2 mb-4"
                type="text"
                name="subject"
                required
                placeholder="Write Desire Subject"
              />
              <br />

              <textarea
                rows="5"
                className="py-2 px-2 w-full rounded border-2 mb-4"
                type="text"
                name="message"
                required
                placeholder="Write Your Message"
              />
              <br />
              <HeadShake>
                <button
                  type="submit"
                  className="w-full py-2 bg text-white font-bold rounded"
                >
                  {" "}
                  Submit
                </button>
              </HeadShake>
            </form>
          </div>
        </div>
        <RubberBand>
          <div className="contact-img">
            <img src="https://i.ibb.co/PgpVk3m/scic.jpg" alt="" />
          </div>
        </RubberBand>
      </div>
    </div>
  );
};

export default Contact;
