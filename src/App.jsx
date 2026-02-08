import React, { useState, useEffect, lazy, useCallback } from "react";

// ---------- STATIC ----------
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ScrollProgressBar from "./features/ScrollProgressBar";
import BackToTopBtn from "./features/BackToTopBtn";
import IntroAnimation from "./components/ui/IntroAnimation";
import Loader from "./components/ui/loading"; // your gif loader

// ---------- LAZY ----------
const About = lazy(() => import("./components/About"));
const Stats = lazy(() => import("./components/Stats"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Approach = lazy(() => import("./components/Approach"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const [isReady, setIsReady] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  // ----------------------------
  // Preload ALL lazy components
  // ----------------------------
  useEffect(() => {
    const prepareApp = async () => {
      await Promise.all([
        import("./components/About"),
        import("./components/Stats"),
        import("./components/Experience"),
        import("./components/Projects"),
        import("./components/Approach"),
        import("./components/Contact"),
        import("./components/Footer"),
      ]);

      setIsReady(true);
      setShowIntro(true);
    };

    prepareApp();
  }, []);

  // ----------------------------
  // Intro finished
  // ----------------------------
  const handleIntroFinish = useCallback(() => {
    setShowIntro(false);
  }, []);

  // ----------------------------
  // 1) Global Loader
  // ----------------------------
  if (!isReady) return <Loader />;

  // ----------------------------
  // 2) Intro Animation
  // ----------------------------
  if (showIntro) return <IntroAnimation onFinish={handleIntroFinish} />;

  // ----------------------------
  // 3) Full Website
  // ----------------------------
  return (
    <>
      <ScrollProgressBar />
      <BackToTopBtn />

      <div className="container px-6 max-w-7xl">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Landing isDark={isDark} />
      </div>

      <div className="container px-6 max-w-7xl">
        <About />
      </div>

      <Stats />
      <Experience />

      <div className="container px-6 max-w-7xl">
        <Projects />
      </div>

      <Approach />
      <Contact />
      <Footer />
    </>
  );
}
