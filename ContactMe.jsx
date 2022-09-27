import React, { useRef } from "react";
import { FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import {
  GrFacebook,
  GrInstagram,
  GrLinkedin,
  GrLocation,
} from "react-icons/gr";
import { AiFillSkype } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ecjdbqo",
        "template_se98hal",

        form.current,
        "kjlP4r3e0pD-f_7DL"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="antialiased bg-gray-200">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-6  bg-cyan-700  w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
          <div className="flex flex-col justify-center  items-center space-y-8">
            <div className="flex flex-col justify-center  items-center">
              <h1 className="text-4xl font-bold tracking-wide">Contact Me</h1>
              <p className="pt-2 items-start justify-start text-cyan-400 text-sm">
                Home Delivery is available at your dootstep in just a single
                dial
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="inline-flex space-x-2 items-center">
                <FaPhoneSquareAlt className="text-teal-300 text-xl" />
                <span> +(480) 678 2108</span>
              </div>

              <div className="inline-flex space-x-2 items-center">
                <FaEnvelope className="text-teal-300 text-xl" />
                <span> contact@gmail.com</span>
              </div>

              <div className="inline-flex space-x-2 items-center">
                <GrLocation className="text-teal-300 text-xl" />
                <span>11,Street 342, Orlando</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="https://www.facebook.com/">
                <GrFacebook />
              </a>
              <a href="#">
                <AiFillSkype />
              </a>
              <a href="#">
                <GrLinkedin />
              </a>
              <a href="#">
                <GrInstagram />
              </a>
            </div>
            <div>
              <div className="bg-white rounded-xl text-gray-600 shadow-lg p-8">
                <form
                  action=""
                  className="flex flex-col space-y-4 "
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div>
                    <label for="" className="text-sm">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      autoComplete="off"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>
                  <div>
                    <label for="" className="text-sm">
                      Your Email
                    </label>

                    <input
                      type="email"
                      autoComplete="off"
                      placeholder="Email address"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>

                  <div>
                    <label for="" className="text-sm">
                      Message
                    </label>

                    <textarea
                      placeholder="Message"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                      row="30"
                      col="20"
                    >
                      Type your message here
                    </textarea>
                  </div>
                  <button className="inline-block self-end bg-cyan-700 text-white font-bold px-6 py-2 uppercase text-sm rounded-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ContactMe;
