import React from "react";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const blog = () => {
  return (
    <section id="blog">
      <div className="text-gray-600 body-font max-w-5xl mx-auto ">
        <h1 className="flex text-orange-400 font-semibold text-xl lg:text-2xl justify-center items-center pb-14 py-10 lg:pb-28 lg:py-20">
          BLOGS
        </h1>
        <div className="container px-5 py-0 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-md"
                  src="/blog-images/nextjs.jpg"
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
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
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
              </div>
            </div>
            <div className="p-4 md:w-1/3">
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
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
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
            </div>
            <div className="p-4 md:w-1/3">
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
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog;
