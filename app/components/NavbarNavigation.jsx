"use client";
import React from "react";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const NavbarNavigation = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const session = useSession();
  return (
    <>
    
     <div className=" bg-white/10">
        <div className=" px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-5xl md:px-8 lg:px-8">
          <div className="relative grid items-center grid-cols-2 lg:grid-cols-3 ">
            <Link scroll={false} href="/">
              <Image src="/logo.svg" alt="Logo" width={100} height={50} />
            </Link>

            <ul className="items-center hidden space-x-8 lg:flex">
              <li
                className={`link ${
                  pathname === "/"
                    ? "text-orange-400"
                    : "cursor-pointer  border-custo hover:border-orange-400 focus:border-b-2 focus:border-orange-400"
                }`}
              >
                <Link href="/" scroll={false}>
                  Home
                </Link>
              </li>
              <li
                className={`link ${
                  pathname === "/about"
                    ? "text-orange-400"
                    : "cursor-pointer  border-custo hover:border-orange-400 focus:border-b-2 focus:border-orange-400"
                }`}
              >
                {" "}
                <Link href="/about" scroll={false}>
                  About
                </Link>
              </li>

              <li 
              
              className={`link ${
                pathname === "/blog"
                  ? "text-orange-400"
                  : "cursor-pointer  border-custo hover:border-orange-400 focus:border-b-2 focus:border-orange-400"
              }`}>
              <Link href="/blog/" className="scroll-smooth">
                  Blog
                </Link>
              </li>
              <li
                className={`link ${
                  pathname === "/portfolio"
                    ? "text-orange-400"
                    : "cursor-pointer  border-custo hover:border-orange-400 focus:border-b-2 focus:border-orange-400"
                }`}
              >
                <Link href="/portfolio" scroll={false}>
                  Portfolio
                </Link>
              </li>
              
              { session.status === "authenticated" ? (
                <ul className="items-center hidden space-x-8 lg:flex">
                  <li
                className={`
                link ${
                  pathname === "/dashboard"
                    ? "text-orange-400"
                    : "cursor-pointer  border-custo hover:border-orange-400 focus:border-b-2 focus:border-orange-400"
                }`}
                >
                <Link href="/dashboard">Dashboard</Link>
                </li>
                <li
                className={"bg-orange-400 px-2 py-1 rounded-sm cursor-pointer  border-custo hover:border-orange-400 focus:border-b-2 focus:border-orange-400"}
              >
                <button onClick={signOut}>Logout</button>
              </li>
                </ul>
              ): (

                <li
                className={`
                link ${
                  pathname === "/dashboard"
                    ? "text-orange-400"
                    : "cursor-pointer  border-custo hover:border-orange-400 focus:border-b-2 focus:border-orange-400"
                }`}
              >
                <Link href="/dashboard">Admin</Link>
              </li>

              )}
            </ul>

            <ul className="items-center hidden ml-auto space-x-8 lg:flex">
              <li className="text-orange-400 flex duration-200 justify-center items-end cursor-pointer underline-custo underline-offset-4 hover:text-white/90  hover:translate-x-1 hover:text-orange-400">
                <Link href="/talk" className="scroll-smooth">
                  Let's Talk
                </Link>
                <MdKeyboardArrowRight className="w-4 h-4 font-thin " />
              </li>
            </ul>
            <div className="ml-auto lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 backdrop-brightness-90 bg-black/90 border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a scroll={false} href="/">
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            <Image
                              src="/logo.svg"
                              alt="Logo"
                              width={100}
                              height={100}
                            />
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-orange-400 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600 "
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav className="bg-white/5 border-b-2 border-white/20 p-2  shadow-2xl">
                      <ul className="space-y-2">
                        <li className="font-thin duration-200 focus:shadow-outline cursor-pointer hover:translate-x-2 text-gray-300 hover:text-white/20 active:border-blue-100 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white/50 dark:active:border-gray-600 p-2 rounded-sm ">
                          <a scroll={false} href="/">
                            Home
                          </a>
                        </li>
                        <li className="font-thin duration-200 focus:shadow-outline cursor-pointer hover:translate-x-2 text-gray-300 hover:text-white/20 active:border-blue-100 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white/50 dark:active:border-gray-600 p-2 rounded-sm ">
                          <a scroll={false} href="/about">
                            About
                          </a>
                        </li>
                        <li className="font-thin duration-200 focus:shadow-outline cursor-pointer hover:translate-x-2 text-gray-300 hover:text-white/20 active:border-blue-100 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white/50 dark:active:border-gray-600 p-2 rounded-sm ">
                          <a className="scroll-smooth" href="/blog">
                            Blogs
                          </a>
                        </li>
                        <li className="font-thin duration-200 focus:shadow-outline cursor-pointer hover:translate-x-2 text-gray-300 hover:text-white/20 active:border-blue-100 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white/50 dark:active:border-gray-600 p-2 rounded-sm ">
                          <a scroll={false} href="/portfolio">
                            Portfolio
                          </a>
                        </li>
                        <li className="flex justify-center items-center  border border-orange-400 font-thin duration-200 focus:shadow-outline cursor-pointer hover:translate-x-2 text-gray-300 hover:text-white/20 active:border-blue-100 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white/50 dark:active:border-gray-600 p-2 rounded-sm ">
                          <a className="scroll-smooth" href="/talk">
                            Let's Talk
                          </a>
                        </li>
                        {session.status === "authenticated" ? (
                            <li className="flex justify-center items-center  bg-orange-400 font-thin duration-200 focus:shadow-outline cursor-pointer hover:translate-x-2 text-gray-300  active:border-blue-100 dark:text-gray-200 dark:hover:text-black hover:text-black dark:active:border-gray-600 p-2 rounded-sm ">
                              <a className="scroll-smooth font-light">
                                <button onClick={signOut}>Logout</button>
                              </a>
                            </li>
                          ) : (
                            <li className="flex justify-center items-center  bg-orange-400 font-thin duration-200 focus:shadow-outline cursor-pointer hover:translate-x-2 text-gray-300  active:border-blue-100 dark:text-gray-200 dark:hover:text-black hover:text-black dark:active:border-gray-600 p-2 rounded-sm ">
                              <a className="scroll-smooth font-light" href="/dashboard">
                                Admin
                              </a>
                            </li>
                          )}
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>


    </>
  );
};

export default NavbarNavigation;
