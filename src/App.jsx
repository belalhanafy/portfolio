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
import IntroAnimation from "./components/ui/IntroAnimation";

export default function App() {
  const [phase, setPhase] = useState("loading");
  const [isDark, setIsDark] = useState(false); // ✅ shared theme state

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("intro");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (phase === "loading") {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-black">
        <img
          src="/loading.gif"
          alt="Loading..."
          className="object-contain w-full h-full"
        />
      </div>
    );
  }

  if (phase === "intro") {
    return <IntroAnimation onFinish={() => setPhase("main")} />;
  }

  return (
    <>
      <ScrollProgressBar />
      <BackToTopBtn />
      <div className="container max-w-7xl">
        {/* ✅ Pass both isDark and setIsDark */}
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Landing isDark={isDark} />
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
