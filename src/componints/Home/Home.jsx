import React from "react";
import Hero from "./Hero/Hero";
import Properties from "./Properties/Properties";
import Benefits from "./benefits/benefits";
import Locations from "./Locations/Locations";
import RealEstateHero from "./RealEstateHero/RealEstateHero";
import Futures from "./Futures/Futures";
import Clients from "./Clients/Clients";
import Blogs from "./Blogs/Blogs";

function Home() {
  return (
    <div>
      <Hero />
      <Properties />
      <Benefits />
      <Locations />
      <RealEstateHero />
      <Futures />
      <Clients />
      <Blogs />
    </div>
  );
}

export default Home;
