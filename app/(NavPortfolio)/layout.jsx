import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Separator from "../components/separator";
import Services from "../components/services";
import Blog from "../components/blog";
import Partnership from "../components/partnership";
import Footer from "../components/footer";
import Portifolio from "../components/portifolio";
import BackToTopButton from "../components/backToTopButton";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Separator />
      <Services />

      <main>
        <Portifolio />
        {children}
      </main>
      <Partnership />
      <Blog />
      <Footer />
      <BackToTopButton />

    </>
  );
}
