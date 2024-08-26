import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FeautureSec from "./components/FeautureSec";
import Trending from "./components/Trending";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <FeautureSec />
      <Trending />
      <Hero />
    </>
  );
};

export default App;
