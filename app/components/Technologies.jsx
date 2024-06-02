import React, { useRef } from "react";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const Technologies = () => {
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
    <section id="blog">
      <div className="text-gray-600 body-font max-w-5xl mx-auto ">
        <h1 className="flex text-orange-400 font-semibold text-xl lg:text-2xl justify-center items-center pb-14 py-10 lg:pb-28 lg:py-20">
          TECHNOLOGIES
        </h1>
        <ul ref={ref} className="container px-5 py-0 mx-auto">
          <motion.li
            variants={CardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="flex flex-wrap -m-4"
          >
            <div className="p-4 md:w-1/3">
              <motion.div
                variants={itemVariants}
                className="h-full overflow-hidden"
              >
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-md"
                  src="/blog-images/nextjs.png"
                  width={500}
                  height={500}
                  alt="Nextjs Image"
                />

                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-orange-400 mb-1">
                    WEBSITE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    PORTFOLIO
                  </h1>
                  <div>
                    <p className="leading-relaxed mb-3">
                    A powerful React framework for building fast and scalable web applications with server-side rendering and static site generation capabilities.
                    </p>
                  </div>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="https://github.com/ericktek/Portifolio-Nextjs"
                      className="cursor-pointer text-orange-400 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Explore More
                      <FaArrowRightLong className="w-8 h-8 pt-1 pl-4" />
                    </a>
                    <span className="text-gray-400 mr-0 inline-flex lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                      <IoLogoGithub className="h-6 w-6 text-orange-400 " />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-md"
                  src="/blog-images/vuejs.jpg"
                  width={500}
                  height={500}
                  alt="Vuejs Image"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-orange-400 mb-1">
                    BLOG
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    PORTFOLIO
                  </h1>
                  <div>
                    <p className="leading-relaxed mb-3">
                    A progressive JavaScript framework for building user interfaces, known for its simplicity, flexibility, and performance.
                    </p>
                  </div>
                  <div className="flex items-center flex-wrap">
                    <a
                      href="https://github.com/ericktek/portfolio-Vue3"
                      className="text-orange-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                    >
                      Explore More
                      <FaArrowRightLong className="w-8 h-8 pt-1 pl-4" />
                    </a>
                    <span className="text-gray-400 mr-0 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                      <IoLogoGithub className="h-6 w-6 text-orange-400" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="p-4 md:w-1/3">
              <div className="h-full  overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-md"
                  src="/blog-images/laravel.png"
                  width={500}
                  height={500}
                  alt="Laravel Image"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-orange-400 mb-1">
                    WEBSITE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    E-COMMERCE
                  </h1>
                  <div>
                    <p className="leading-relaxed mb-3">
                    A robust PHP framework for web application development, offering elegant syntax, powerful tools, and comprehensive features for building modern web applications.
                    </p>
                  </div>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="https://github.com/ericktek/eShop"
                      className="text-orange-400 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Explore More
                      <FaArrowRightLong className="w-8 h-8 pt-1 pl-4" />
                    </a>
                    <span className="text-gray-400 mr-0 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <IoLogoGithub className="h-6 w-6 text-orange-400" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
