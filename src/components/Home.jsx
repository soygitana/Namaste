import React from "react";
import Hero from "./Hero.jsx";
import HomeClasses from "./HomeClasses.jsx";
import HomeVideo from "./HomeVideo.jsx";
import HomePrices from "./HomePrices.jsx";
import HomeVoucher from "./HomeVoucher.jsx";

const Home = () => (
  <>
    <div className="app-container">
      <Hero />
      <HomeClasses />
      <HomeVideo />
      <HomePrices />
    </div>
    <HomeVoucher />
  </>
);

export default Home;
