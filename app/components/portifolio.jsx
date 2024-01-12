"use client";
import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";
import Links from "./links";
import Link from "next/link";

const portifolio = () => {
  const Menu = [
    {
      title: "ALL",
      path: "/",
    },
    {
      title: "Websites",
      path: "/websites",
    },
    {
      title: "Social Media Branding",
      path: "/social",
    },
    {
      title: "Graphics Design",
      path: "/graphics",
    },
    {
      title: "Printing",
      path: "/printing",
    },
  ];
  const [selected, setSelected] = useState(Menu[0]);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="max-w-3xl mx-auto p-8">
        <div>
          <h1 className="flex text-orange-400 font-semibold text-xl justify-center items-center p-2 pb-20 ">
            PORTFOLIO
          </h1>
        </div>
        <div className="bg-white/10 flex items-center justify-center p-3 rounded-lg">
          <ul className="lg:flex md:flex items-center justify-center lg:gap-6 md:gap-5 px-2 hidden">
            <Links />
          </ul>

          <div className="lg:hidden md:hidden w-full">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-orange-400 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-hidden rounded-md from-orange-400 to-red-500 bg-gradient-to-r  py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {Menu.map((Menu, index) => (
                      <Link href={Menu.path} key={index}>
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 hover:translate-x-2 hover:delay-75 text-amber-900"
                                : "text-white/95"
                            }`
                          }
                          value={Menu}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {Menu.title}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                                  <FaCheck className="h-5 w-5" />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      </Link>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portifolio;
