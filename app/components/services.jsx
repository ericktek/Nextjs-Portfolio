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
            <p className="font-light font-poppins  text-gray-400 pt-4">
            I specialize in crafting visually striking designs that capture attention and effectively communicate messages. With a keen eye and a passion for creativity, I bring brands to life through thoughtful graphic solutions.
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
            <p className="font-light font-poppins text-gray-400 pt-4">
            I create visually captivating and user-friendly websites that effectively convey brand identities and captivate audiences. With expertise in design and user experience principles.
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
            <h1 className="font-base font-poppins text-lg ">UI/UX DESIGN</h1>
            <p className="font-light text-gray-400 pt-4">
            I specialize in creating intuitive and visually appealing user interfaces that enhance user experiences. I design interfaces that engage and delight users while achieving business objectives.
            </p>
          </div>
        </motion.div>
      </motion.li>
    </ul>
  );
};

export default Services;
