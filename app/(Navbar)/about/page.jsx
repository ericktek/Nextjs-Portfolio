"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/app/components/Footer";
import dynamic from "next/dynamic";

const Page = () => {
  const AnimatedNumbers = dynamic(
    () => {
      return import("react-animated-numbers");
    },
    { ssr: false }
  );
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-14 lg:py-16">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-orange-400 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="text-orange-100 absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
          <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-black rounded-sm transition-color sm:items-stretch sm:flex-row">
            <div className="px-12 py-8 text-center">
              <h6 className="flex flex-row justify-center text-orange-400 text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={95}
                  locale="en-US"
                  configs={(_) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 180,
                      duration: 0.03,
                    };
                  }}
                />
                %
              </h6>
              <p className="text-center md:text-base">
                Quality of Software Product Delivery {"             "}
              </p>
            </div>
            <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
            <div className="px-12 py-8 text-center">
              <h6 className="flex flex-row justify-center text-orange-400 text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={49805}
                  locale="en-US"
                  interval={2000} // Adjusted interval for slower count (in milliseconds)
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                  ]}
                ></AnimatedNumbers>
                +
              </h6>
              <p className="text-center md:text-base">
                Followers on Facebook Subscribers{" "}
              </p>
            </div>
            <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />

            <div className="px-12 py-8 text-center">
              <h6 className="flex flex-row justify-center text-orange-400 text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={810}
                  locale="en-US"
                  interval={2000} // Adjusted interval for slower count (in milliseconds)
                  configs={[
                    { mass: 1, tension: 220, friction: 100 },
                    { mass: 1, tension: 180, friction: 130 },
                  ]}
                ></AnimatedNumbers>
                +
              </h6>
              <p className="text-center md:text-base">
                Followers on Instagram Subscribers{" "}
              </p>
            </div>
          </div>
        </div>
        <p className="mx-auto mb-4 text-gray-400 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          doloribus!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Page;
