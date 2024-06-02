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
    <ul
      ref={ref}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-5xl md:px-24 lg:px-8 lg:py-20"
    >
      <motion.li
        variants={CardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2"
      >
        <a
          aria-label="View Item"
          className="lg:col-span-2 xl:col-span-2 cursor-pointer"
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80 "
              src={"/portfolio/graphic-1.jpg"}

              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Color mixing</p>
              <p className="text-sm tracking-wide text-gray-300">
              At the heart of our design process lie color mixing techniques. We believe that harmonious color schemes are essential for evoking desired emotions and effectively conveying brand messages.  
              </p>
               </div>
          </motion.div>
        </a>
        <a aria-label="View Item" className="cursor-pointer">
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={"/portfolio/adobe.jpg"}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Adobe photoshop
              </p>
              <p className="text-sm tracking-wide text-gray-300">
              At ericktek, we harness the power of Adobe Photoshop, a versatile tool used for image editing, photo manipulation, and graphic design. Packed with advanced features for retouching, compositing, and creating digital artwork,
              </p>
            </div>
          </motion.div>
        </a>
      </motion.li>
      <motion.li
        variants={CardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2"
      >
        <a aria-label="View Item" className="cursor-pointer">
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80 "
              src={"/portfolio/illustrator.jpg"}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Adobe illutrator
              </p>
              <p className="text-sm tracking-wide text-gray-300">
              In our arsenal, Adobe Illustrator takes center stage for vector graphics creation, illustration, and logo design. Renowned for its precision and scalability, Illustrator allows us to produce high-quality graphics for both print and digital media. 
              </p>
            </div>
          </motion.div>
        </a>
        <a
          aria-label="View Item"
          className="lg:col-span-2 xl:col-span-2 cursor-pointer"
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80 "
              src={"/portfolio/graphic-4.jpg"}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">DaVinci Resolve</p>
              <p className="text-sm tracking-wide text-gray-300">
              For video editing and color grading, we turn to DaVinci Resolve. This powerful software enhances the visual aesthetics of digital media content, making it a staple for professionals in the field. DaVinci Resolve enables us to achieve precise color adjustments and create visually stunning videos that captivate audiences.
              </p>
            </div>
          </motion.div>
        </a>
      </motion.li>
    </ul>
  );
};

export default page;
