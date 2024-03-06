"use client";
import React, { useRef } from "react";
import { RiBubbleChartLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { ImMakeGroup } from "react-icons/im";
import { motion, useInView } from "framer-motion";

const Services = () => {
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
    <ul ref={ref} id="service">
      <h1 className="flex justify-center text-4xl text-white/10">SERVICES</h1>
      <motion.li
        variants={CardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="max-w-5xl mx-auto grid w-full grid-cols-1 p-4 lg:p-8 py-12 gap-5 lg:grid-cols-3"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white/10 p-4 lg:w-72 w-full rounded-lg"
        >
          <div className="">
            <RiBubbleChartLine className="w-24 h-24 " />
          </div>
          <div className="pt-20">
            <h1 className="font-base text-lg ">GRAPHICS DESIGN</h1>
            <p className="font-thin text-sm text-gray-400 pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquam ipsa et sunt incidunt laboriosam fugit, excepturi
              cupiditate qui veniam.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-white/10 p-4 lg:w-72 w-full rounded-lg"
        >
          <div>
            <CgWebsite className="w-20 h-20 text-orange-400 " />
          </div>
          <div className="pt-24">
            <h1 className="font-base text-lg ">WEBSITE DESIGN</h1>
            <p className="font-thin text-sm text-gray-400 pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquam ipsa et sunt incidunt laboriosam fugit, excepturi
              cupiditate qui veniam.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-white/10 p-4 lg:w-72 w-full rounded-lg"
        >
          <div>
            <ImMakeGroup className="w-20 h-20 pt-2" />
          </div>
          <div className="pt-20">
            <h1 className="font-base text-lg ">UI/UX DESIGN</h1>
            <p className="font-thin text-sm text-gray-400 pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aliquam ipsa et sunt incidunt laboriosam fugit, excepturi
              cupiditate qui veniam.
            </p>
          </div>
        </motion.div>
      </motion.li>
    </ul>
  );
};

export default Services;
