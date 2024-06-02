"use client";
import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import Links from "app/components/Links";
import Footer from "app/components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
  const Menu = [
    {
      title: "ALL",
      path: "/portfolio",
    },
    {
      title: "Websites",
      path: "/portfolio/websites",
    },
    {
      title: "Social Media Branding",
      path: "/portfolio/social",
    },
    {
      title: "Graphics Design",
      path: "/portfolio/graphics",
    },
    {
      title: "Printing",
      path: "/portfolio/printing",
    },
  ];
  const [selected, setSelected] = useState(Menu[0]);
  return (
    <>
      <div className="flex flex-row">
        <div className="lg:basis-28 sm:basis-0 ml-6 mt-12">
          <div className="fixed sm:bg-white/10 rounded-lg p-2">
            <ul className="lg:flex lg:flex-col  lg:items-center lg:justify-center lg:gap-6 md:flex md:flex-col  md:items-center md:justify-center md:gap-4  hidden ">
              <Links />
            </ul>
          </div>
        </div>
        <div className="basis-5/6 lg:basis-5/6 sm:basis-full">
          <h1 className="lg:hidden xl:hidden flex text-white/10 font-semibold text-2xl justify-center items-center p-2 pt-8 ">
            PORTFOLIO
          </h1>
          <div className="xl:hidden lg:hidden md:hidden sm:bg-white/10 sm:flex items-center justify-center p-3 rounded-lg">
            <ul className=" xl:hidden lg:hidden md:flex items-center justify-center lg:gap-6 md:gap-5 px-2 hidden">
              <Links />
            </ul>
            <div className=" lg:hidden w-full">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-se-md rounded-ss-md bg-orange-400 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selected.title}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <RiArrowDropDownLine
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute max-h-60 w-full overflow-hidden bg-stone-800 rounded-es-md rounded-ee-md py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm mt-0 z-10">
                      {Menu.map((Menu, index) => (
                        <Link href={Menu.path} key={index}>
                          <Listbox.Option
                            key={index}
                            className={`link text-white/95 relative cursor-default select py-2 pl-10 pr-4 ${
                              usePathname === Menu.path ? "text-amber-900" : ""
                            }`}
                            value={Menu}
                            onSelect={() => setSelected(Menu.path)}
                          >
                            <>
                              <span
                                className={`block truncate ${
                                  usePathname === Menu.path
                                    ? "font-medium"
                                    : "font-normal"
                                }`}
                              >
                                {Menu.title}
                              </span>
                              {selected && selected.path === Menu.path && (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-300">
                                  <FaCheck className="h-5 w-5" />
                                </span>
                              )}
                            </>
                          </Listbox.Option>
                        </Link>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
          {children}
        </div>

        <div className="lg:basis-28 sm:basis-0">
          <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="hidden mr-12 fixed transform -rotate-90 xl:flex lg:flex text-white/10 font-semibold text-2xl justify-center items-center ">
              PORTFOLIO
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default layout;
