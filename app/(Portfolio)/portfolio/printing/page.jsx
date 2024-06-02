"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const printing = () => {
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
                src={"/portfolio/printing-1.jpg"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                DTF Printing
                </p>
                <p className="text-sm tracking-wide text-gray-300">
               ericktek utilizes Direct-to-Film (DTF) printing technology to create vibrant and durable prints on various substrates. This innovative technique ensures high-resolution images with excellent color reproduction, making it ideal for custom apparel, signage, and promotional items.
                </p>
              </div>
            </div>
          </a>
          <a aria-label="View Item" className="cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/printing-3.jpg"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">On-field Staff</p>
                <p className="text-sm tracking-wide text-gray-300">
                ericktek's CEO leads by example, overseeing custom t-shirt printing at the workshop. With hands-on dedication and a focus on quality, our CEO ensures every shirt meets our high standards, reflecting our commitment to excellence and client satisfaction.
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
                src={"/portfolio/printing-2.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                T-shirt Printing         
                       </p>
                <p className="text-sm tracking-wide text-gray-300">
                With expertise in t-shirt printing, ericktek offers custom solutions for businesses, events, and organizations. Using state-of-the-art printing methods and quality materials, we deliver high-quality prints that are long-lasting and eye-catching, perfect for branding and marketing purposes.
                </p>
              </div>
            </div>
          </a>
          <a aria-label="View Item" className=" xl:col-span-2 cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={"/portfolio/cup.png"}
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Cup Printing</p>
                <p className="text-sm tracking-wide text-gray-300">
                Offering custom designs and branding solutions for businesses and events. Using advanced printing techniques and high-quality materials, we create personalized cups that promote brand visibility and leave a lasting impression on customers.
                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </motion.li>
    </ul>
  );
};

export default printing;
