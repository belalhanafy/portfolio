import React, { useState, useEffect } from "react";
import About from "./components/About";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import BackToTopBtn from "./features/BackToTopBtn";
import ScrollProgressBar from "./features/ScrollProgressBar";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-black">
        <img src="/loading.gif" alt="Loading..." className="object-contain w-full h-full" />
      </div>
    );
  }

  return (
    <>
      <ScrollProgressBar />
        <BackToTopBtn />
      <div className="container max-w-7xl">
        <Navbar />
        <Landing />
        <About />
      </div>
      <Stats />
      <Experience />
      <div className="container max-w-7xl">
        <Projects />
      </div>
      <Approach />
      <Contact />
      <Footer />
    </>
  );
}
