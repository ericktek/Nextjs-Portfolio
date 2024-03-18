"use client";

import Hero from "./components/hero";
import Separator from "./components/separator";
import Services from "./components/services";
import PartnerShip from "./components/partnerShip";
import Technologies from "./components/Technologies";
import HomeFooter from './components/HomeFooter';

const page = () => {
  return (
    <>
      <Hero />
      <Separator />
      <Services />
      <PartnerShip />
      <Technologies />
      <HomeFooter />
    </>
  );
};

export default page;
