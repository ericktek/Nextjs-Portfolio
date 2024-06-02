"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const socialMediaBrand = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const CardVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.4, // Stagger the animation by 0.4 seconds
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <ul ref={ref}>
      <motion.li
        variants={CardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-5xl md:px-24 lg:px-8 lg:py-20"
      >
        <motion.div
          variants={itemVariants}
          className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2"
        >
          <a aria-label="View Item" className="cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80 "
                src={"/portfolio/mouse-2.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Electronic device Promotion
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                Engaging poster designs to promote electronic devices such as smartphones, laptops, tablets, and gadgets.
                </p>
              </div>
            </div>
          </a>
          <a
            aria-label="View Item"
            className="lg:col-span-2 xl:col-span-2 cursor-pointer"
          >
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80 "
                src={"/portfolio/cupsocial.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Printing</p>
                <p className="text-sm tracking-wide text-gray-300">
                Professional poster designs optimized for printing on various materials, sizes, and formats.
Collaboration with printing vendors to ensure optimal print quality and color accuracy.
                </p>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          div
          className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2"
        >
          <a aria-label="View Item" className="cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/cap.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Seasonal Promotions
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                Seasonally themed poster designs to coincide with holidays, special occasions, or seasonal promotions.
                </p>
              </div>
            </div>
          </a>
          <a aria-label="View Item" className="cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/park.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Tourism</p>
                <p className="text-sm tracking-wide text-gray-300">
                Captivating poster designs showcasing tourist destinations, attractions, and experiences.
Emphasis on visual storytelling and aspirational imagery to inspire travel and exploration.
                </p>
              </div>
            </div>
          </a>
          <a aria-label="View Item" className="cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/smart_watch-1.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Poster design
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                specializes in creating captivating poster designs that grab attention and effectively convey messages.
                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </motion.li>
    </ul>
  );
};

export default socialMediaBrand;
