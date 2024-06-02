"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const page = () => {
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
          <a
            aria-label="View Item"
            className=" lg:col-span-2 xl:col-span-2 cursor-pointer"
          >
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/figma.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Figma design
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                A collaborative interface design tool, to create stunning visual designs and prototypes. By utilizing Figma, we deliver high-quality designs that meet your specific requirements and exceed your expectations.

</p>
              </div>
            </div>
          </a>
          <a aria-label="View Item" className="cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/website.jpg"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Web development</p>
                <p className="text-sm tracking-wide text-gray-300">
                We crafts responsive websites that adapt perfectly to all devices. From desktops to smartphones, our designs ensure a seamless browsing experience for your audience.

                </p>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2"
        >
          <a aria-label="View Item" className=" cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/weather.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Mobile development
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                Prioritizing the user experience on smartphones and tablets. Our designs are optimized for smaller screens, ensuring seamless navigation and engagement for mobile users.                </p>
              </div>
            </div>
          </a>
          <a aria-label="View Item" className=" xl:col-span-2 cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/nextjs.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Nextjs</p>
                <p className="text-sm tracking-wide text-gray-300">
                A powerful React framework for building fast and scalable web applications with server-side rendering and static site generation capabilities.

                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </motion.li>
    </ul>
  );
};

export default page;
