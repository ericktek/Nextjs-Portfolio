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
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  The Starry Night
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Vincent Van Gogh’s most popular painting, The Starry Night was
                  created by Van Gogh at the asylum in Saint-Rémy, where he’d
                  committed himself in 1889.
                </p>
              </div>
            </div>
          </a>
          <a aria-label="View Item" className="cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
                <p className="text-sm tracking-wide text-gray-300">
                  Opulently gilded and extravagantly patterned, The Kiss, Gustav
                  Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                  Symbolism and Vienna Jugendstil, the Austrian variant of Art
                  Nouveau.
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
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  The Starry Night
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Vincent Van Gogh’s most popular painting, The Starry Night was
                  created by Van Gogh at the asylum in Saint-Rémy, where he’d
                  committed himself in 1889.
                </p>
              </div>
            </div>
          </a>
          <a aria-label="View Item" className=" xl:col-span-2 cursor-pointer">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
                <p className="text-sm tracking-wide text-gray-300">
                  Opulently gilded and extravagantly patterned, The Kiss, Gustav
                  Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                  Symbolism and Vienna Jugendstil, the Austrian variant of Art
                  Nouveau.
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
