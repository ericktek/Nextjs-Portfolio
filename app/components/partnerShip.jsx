import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";

const partnerShip = () => {
  return (
    <>
      <div className="relative max-w-5xl mx-auto p-8">
        <h1 className="flex text-orange-400 font-semibold text-xl justify-center items-center pb-14 py-10 lg:pb-28 lg:py-20">
          PARTNERSHIP
        </h1>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-white/10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
          <a
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-5"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h5 className="mb-4 text-2xl font-extrabold leading-none">
          Our partner
                 {" "}
            <br className="hidden md:block" />
            <span className="inline-block text-5xl text-deep-purple-accent-400">
              StatTech
            </span>
          </h5>
          <p className="mb-6 text-gray-400 text-sm">
          Statech specializes in data analysis, offering expert solutions that transform data into actionable insights. Through this partnership, clients gain access to advanced analytical tools and methodologies, driving informed decision-making and business growth.

          </p>
          <hr className="mb-5 border-gray-300" />
          <div className="flex items-center space-x-4">
          <a
                      href="https://twitter.com/stattechtz"
                      className="text-gray-500 transition-colors duration-300 text-white/80 hover:text-deep-purple-accent-400"
                    >
                      <FaXTwitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/stattechtz/"
                      className="text-gray-500 transition-colors duration-300 text-white/80 hover:text-deep-purple-accent-400"
                    >
                      <IoLogoInstagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/stattechtz"
                      className="text-gray-500 transition-colors text-white/80 duration-300 hover:text-deep-purple-accent-400"
                    >
                      <IoLogoFacebook className="h-6 w-6" />
                    </a>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full rounded shadow-lg h-72 lg:h-96"
            src={"/images/partiner.jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default partnerShip;


