import React from "react";
import Image from "next/image";
import { nunito_sans, poppins } from "../utils/fonts";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <div className=" px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-5xl md:px-24 lg:px-8 lg:py-4">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2 pt-10">
          <div className="flex flex-col justify-center items-center">
            <div className={`max-w-xl ${nunito_sans} font-nunito_sans`}>
              <h6 className="text-sm">Hey! There,</h6>

              <h1
                className={` ${poppins} text-white text-2xl font-bold font-poppins max-w-lg lg:py-4  tracking-tight  sm:text-2xl md:text-4xl lg:text-4xl  `}
              >
                <span className="text-xl">I'M </span>
                <span className="bg-gradient-to-r from-orange-400 via-red-300 to-orange-500 inline-block text-transparent bg-clip-text">
                  ERICK B. LEMA
                </span>{" "}
              </h1>

              <h1 className="text-white text-4xl font-bold ">
                <span className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "A FULL STACK DEVELOPER",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "WEB DEVELOPER",
                      1000,
                      "A DATA SCIENTIST",
                      1000,
                      "UI/UX DESIGNER",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    // style={{ fontSize: "2px", display: "inline-block" }}
                    className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl inline-block"
                    repeat={Infinity}
                  />
                </span>
                <br />
                <span className="text-xl">& GRAPHIC DESIGNER</span>
              </h1>

              <p className="text-base pt-2 text-justify leading-relaxed font-nunito_sans text-gray-400 lg:text-sm md:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus id nulla laboriosam sapiente Ducimus id nulla laboriosam
                sapiente Ducimus id nulla laboriosam sapiente
              </p>

              <a
                className="flex items-end cursor-pointer text-sm border-orange-400 pt-4"
                href="/about"
              >
                <button className="flex w-full lg:w-40 py-3 duration-200 justify-center items-end rounded-sm lg:py-2 lg:px-5 bg-gradient-to-r from-orange-400 to-red-500 hover:bg-gradient-to-r hover:from-red-400 hover:to-orange-400 hover:delay-75 hover:text-white/60 hover:translate-x-1">
                  About Me{" "}
                  <MdKeyboardArrowRight className="w-4 h-4 font-thin " />
                </button>
              </a>
            </div>
          </div>
          <div>
            <Image
              className="object-cover object-center mx-auto rounded-lg "
              src="/hero-image.png "
              width={500}
              height={500}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
