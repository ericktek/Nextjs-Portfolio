"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const BackToTopButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    setIsScrolled(scrollTop > 600);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      x-data="topBtn"
      onClick={scrollToTop}
      id="topButton"
      className={`fixed bottom-10 right-10 z-10 opacity-80 rounded-full bg-orange-500 p-4 justify-center items-center shadow-md scroll-smooth ${
        isScrolled ? "block" : "hidden"
      }`}
    >
      <FaArrowUpLong />
    </button>
  );
};

export default BackToTopButton;
