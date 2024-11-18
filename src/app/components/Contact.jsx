"use client";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });
    console.log(await response.json());
    if (response.ok) {
      const form = e.target;
      form.reset();
    } else {
      console.log("Storing Data failed !");
    }
  };

  return (
    <div className="w-full">
      <section className="bg-transparent" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">Get in Touch</h2>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-stretch justify-center space-y-6 md:space-y-0">
            <div className="grid md:grid-cols-2 gap-8 w-full">
              <div className="h-full pt-8">
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-700 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-gray-700">
                        Our Address
                      </h3>
                      <p className="text-gray-700">
                       Shop no: 369, The Galleria Building,
                        <br />
                       Pal RTO, Surat
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-700 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-gray-700">
                        Call us on
                      </h3>
                      <p className="text-gray-700">Mobile: +91 7984175557</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-700 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-gray-700">
                        Working hours
                      </h3>
                      <p className="text-gray-700">10:00 AM - 07:00 PM</p>
                      <p className="text-gray-700">Monday - Saturday</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-gray-700 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="24"
                        height="24"
                        fill="white"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                      </svg>
                    </div>
                    <div className="ml-4 pr-6">
                      <h3 className="mb-2 text-lg font-bold leading-6 text-gray-700">
                        Mail us on
                      </h3>
                      <p className="text-gray-700 ">
                        creativecloudsolutionsccs@gmail.com 
                      </p>
                    </div>
                  </li>
                </ul>
                <h3 className="mt-6 mb-4 text-xl font-bold leading-6 text-gray-700">
                  Want to join us, connect with us on
                </h3>
                <ul className="flex space-x-4">
                  <li className="text-gray-700 hover:text-orange-300 cursor-pointer">
                    <a href="https://www.instagram.com/creative_cloud_solutions">
                      <FaInstagram size={35} />
                    </a>
                  </li>
                  <li className="text-gray-700 hover:text-orange-300 cursor-pointer">
                    <a href="https://www.facebook.com/people/Creative-Cloud-Solution/61558159500154/">
                      <FaFacebook size={35} />
                    </a>
                  </li>
                  <li className="text-gray-700 hover:text-orange-300 cursor-pointer">
                    <a href="https://www.linkedin.com/in/creative-cloud-solutions-264531300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                      <FaLinkedin size={35} />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card h-fit w-full md:w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-gray-700">
                  Any other Query?
                </h2>
                <form id="contactForm" onSubmit={submitHandler}>
                  <div className="space-y-4">
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black"
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black"
                      required
                    />
                    <input
                      type="text"
                      id="phone"
                      name="Phone"
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone number"
                      className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black"
                      required
                    />
                    <textarea
                      id="textarea"
                      name="Message"
                      onChange={(e) => setMessage(e.target.value)}
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      type="submit"
                      className="w-full bg-gray-700 hover:bg-orange-300 text-white px-6 py-3 font-xl rounded-md"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
