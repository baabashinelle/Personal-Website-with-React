import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Last from "./Last";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Last />
    </>
  );
}

export default Home;
