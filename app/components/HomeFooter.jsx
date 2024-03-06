import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";

const footer = () => {
  return (
    <main className="pt-20">
      <div className="bg-white/10 ">
        <div className="px-4 pt-16 mx-auto max-w-5xl md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                className="inline-flex items-center"
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  className="cursor-pointer"
                  width={100}
                  height={50}
                />
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="my-1 text-xl font-poppins font-normal text-white/80">
                  Hi, Meet ericktek and statech
                </p>
                <p className="text-xs font-sans leading-relaxed tracking-widest  text-white/50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  aliquam fugit asperiores, voluptatibus, fuga explicabo
                  voluptates quos adipisci
                </p>
                <div className="mt-4 text-sm text-white/80">
                  <div className="flex items-center mt-1 space-x-3">
                    <a
                      href="https://twitter.com/ericktek_"
                      className="text-gray-500 transition-colors duration-300 text-white/80 hover:text-deep-purple-accent-400"
                    >
                      <FaXTwitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/ericktek_/"
                      className="text-gray-500 transition-colors duration-300 text-white/80 hover:text-deep-purple-accent-400"
                    >
                      <IoLogoInstagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/ericktek_"
                      className="text-gray-500 transition-colors text-white/80 duration-300 hover:text-deep-purple-accent-400"
                    >
                      <IoLogoFacebook className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="lg:pb-8 text-base font-bold tracking-wide text-white">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-1 text-white/50">Phone:</p>
                <p
                  aria-label="Our phone"
                  title="Our phone"
                  className="transition-colors duration-300 text-white/80 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  +(255) 769 500 360
                </p>
              </div>
              <div className="flex">
                <p className="mr-1 text-white/50">Email:</p>
                <p
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 text-white/80 hover:text-deep-purple-800"
                >
                  ericklema360@gmail.com
                </p>
              </div>
              <div className="flex">
                <p
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-deep-purple-accent-400 text-white/80 hover:text-deep-purple-800"
                >
                  <span className="mr-1 text-white/50">Address:</span> 16103
                  Ubungo, DSM
                </p>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-white">
                Country / Region
              </span>
              <div>
                <ul className="lg:mt-8 mt-4 text-sm text-white/80">
                  <li className="pb-4 border-b-2 border-white/20">
                    {" "}
                    United Republic of Tanzania
                  </li>
                  <li className="py-4 border-b-2 border-white/20">
                    {" "}
                    English & Swahili
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-3 border-t border-white/10 ">
          <p className="text-sm text-white/70">
            © Copyright 2024 ericktek | statech. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
};

export default footer;
