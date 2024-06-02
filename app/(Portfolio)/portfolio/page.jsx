"use client";

import React from "react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const page = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
                src={"/portfolio/erick.png"}
                alt="post-1"
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Solutions offered
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  
                  ericktek provides expert solutions in design and build. Our services are designed to enhance user engagement, transform data into insights, and leverage intelligent systems for innovation. </p>
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
                src={"/portfolio/reactjs.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">React</p>
                <p className="text-sm tracking-wide text-gray-300">
                A powerful JavaScript library for building user interfaces, known for its efficiency and flexibility in developing interactive and dynamic web applications.

                </p>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2"
        >
          <a aria-label="View Item" className="cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/smart2.png"}
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
          <a aria-label="View Item" className="cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/laravel.jpg"}

                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Laravel</p>
                <p className="text-sm tracking-wide text-gray-300">
                A robust PHP framework for web application development, offering elegant syntax, powerful tools, and comprehensive features for building modern web applications.
                </p>
              </div>
            </div>
          </a>
          <a aria-label="View Item" className="cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/nextjs.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Nextjs
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                A powerful React framework for building fast and scalable web applications with server-side rendering and static site generation capabilities.
                </p>
              </div>
            </div>
          </a>
        </motion.div>

        {showMore && (
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
                  src={"/portfolio/django.png"}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    django
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                  A high-level Python web framework that encourages rapid development and clean, pragmatic design. Django's robust features make it ideal for building secure and scalable web applications.
                  </p>
                </div>
              </div>
            </a>
            <a aria-label="View Item" className="cursor-pointer">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={"/portfolio/redmin.png"}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    Poster Design
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                  specializes in creating captivating poster designs that grab attention and effectively convey messages.
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        )}
        <span className="flex justify-center items-center  font-normal text-lg text-white/70">
          <button onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </span>
      </motion.li>
    </ul>
  );
};

export default page;
