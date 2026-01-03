import React, { useState, useEffect, lazy, Suspense, useCallback } from "react";

// --- STATIC IMPORTS (Must be immediate for LCP) ---
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ScrollProgressBar from "./features/ScrollProgressBar";
import BackToTopBtn from "./features/BackToTopBtn";
import IntroAnimation from "./components/ui/IntroAnimation";

// --- LAZY IMPORTS ---
const About = lazy(() => import("./components/About"));
const Stats = lazy(() => import("./components/Stats"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Approach = lazy(() => import("./components/Approach"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [isDark, setIsDark] = useState(false);

  // Initialize loading state based on sessionStorage
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("visited");
  });

  // 1. STABILIZE the finish function
  // This prevents IntroAnimation from re-running if App re-renders
  const handleIntroFinish = useCallback(() => {
    sessionStorage.setItem("visited", "true");
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <IntroAnimation onFinish={handleIntroFinish} />
      ) : (
        <>
          <ScrollProgressBar />
          <BackToTopBtn />

          <div className="container max-w-7xl">
            {/* Navbar and Landing are static so they appear instantly after intro */}
            <Navbar isDark={isDark} setIsDark={setIsDark} />
            <Landing isDark={isDark} />
          </div>

          <Suspense fallback={<SectionLoader />}>
            <div className="container max-w-7xl">
              <About />
            </div>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Stats />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <div className="container max-w-7xl">
              <Projects />
            </div>
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Approach />
            <Contact />
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
}

// 3. IMPROVED LOADER 
// Added a height and pulse to prevent "Layout Shift" which causes re-renders
const SectionLoader = () => (
  <div className="container mx-auto my-10 max-w-7xl">
    <div className="flex items-center justify-center w-full h-40 bg-gray-100 dark:bg-gray-800/50 animate-pulse rounded-2xl">
      <span className="text-sm italic text-gray-400">Preparing content...</span>
    </div>
  </div>
);