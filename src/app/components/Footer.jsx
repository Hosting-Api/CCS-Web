"use client";
import React from "react";
import {
  FaBuilding,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMapMarked,
  FaMapPin,
  FaPhone,
  FaPhoneSlash,
  FaPhoneSquare,
  FaPhoneVolume,
  FaSearchLocation,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import Image from "next/image";
// import NewsLetter from "./NewsLetter";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      {/* <NewsLetter /> */}
      <div className="bg-gray-200 max-w-full ">
      <div className="flex md:flex-row flex-col justify-around items-stretch">
        <div className="p-5">
          <ul className="">
            <p className="text-black font-bold text-2xl pb-4">Follow us</p>
            <li className="text-gray-700  text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
              <a href="https://www.instagram.com/creative_cloud_solutions">
                <label>
                  <FaInstagram className="text-2xl cursor-pointer " />
                </label>
                <span className="">creative_cloud_solutions &nbsp;&nbsp;&nbsp;&nbsp;</span>
              </a>
            </li>

            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
              <a href="https://www.facebook.com/people/Creative-Cloud-Solution/61558159500154/">
                <label>
                  <FaFacebook className="text-2xl cursor-pointer " />
                </label>
                <span className="">Creative Cloud Solutions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </a>
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
              <a href="https://www.linkedin.com/in/creative-cloud-solutions-264531300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <label >
                  {/* <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600" /> */}
                  <FaLinkedin className="text-2xl cursor-pointer " />
                </label>
                <span >Creative Cloud Solutions</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-black font-bold text-2xl pb-4">
              Useful links
            </p>
           
            <li className="text-gray-700 text-lg text-md pb-2 font-semibold  cursor-pointer">
            <a href="/#work" className="text-xl font-semibold relative after:bg-orange-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Our Work
          </a>             
            </li>
            <li className="text-gray-700 text-lg text-md pb-2 font-semibold  cursor-pointer">
            <a href="/gallery" className="text-xl font-semibold relative after:bg-orange-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Gallery
          </a>             
            </li>
            {/* <li className="text-gray-700 text-lg text-md pb-2 font-semibold  cursor-pointer">
              <a href="/gallery">Gallery</a>
            </li> */}
            {/* <li className="text-gray-700 text-lg text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<a href="/press">Press & Media</a>
						</li> */}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-black font-bold text-2xl pb-4">
              We Serve in
            </p>
            {/* <li className="text-gray-700 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<label><FaPhoneAlt className="text-lg cursor-pointer hover:text-yellow-600" /></label>
                <span>+917876524356</span>
						</li> */}
            <li className="text-gray-700 text-md pb-2 font-semibold ">
              <label>
                <FaMapPin className="text-lg" />
              </label>
              <span>Surat | Ahmedabad | Navsari  </span>
            </li>
            <li className="text-gray-700 text-md pb-2 font-semibold ">
							<label>
                <FaPhoneAlt className="text-lg" />
              </label>
                <span>+91 7984175557</span>
						</li>
           
            <li className="text-gray-700 text-md pb-2 font-semibold  ">
              <label>
                <FaBuilding className="text-lg " />
              </label>
              <span>
                Shop no :- 120,Canal Walk Shoppers,Palanpur
                <br /> Surat-395009, Gujarat
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-700 font-semibold">
          © {year} All rights reserved.{" "}
          <span className="hover:gray-700 font-semibold cursor-pointer"> </span>
        </h1>
      </div>
      </div>
      <style jsx>
        {`
          label {
            float: left;
          }
          span {
            display: block;
            overflow: hidden;
            padding: 0px 4px 0px 6px;
          }
        `}
      </style>
    </>
  );
}

export default Footer;
