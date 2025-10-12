import React from 'react';
import landingBg from '@/assets/images/herobg.png';
import landingBgWhite from '@/assets/images/bg-herowhite.png';
import ScrollToBottom from '@/features/ScrollToBottom';
import NeonBorder from '@/features/NeonBorder';
import { FlipWords } from '@/components/ui/flip-words';
import { FloatingDockDemo } from '@/features/FloatingDockDemo';

const Landing = ({ isDark }) => {
  const words = ["Front-End Developer", "Software Engineer", "UI/UX Enthusiast"];

  return (
    <>
      <div
        className="absolute inset-0 hidden bg-right-top bg-no-repeat bg-cover -z-30 dark:block"
        style={{ backgroundImage: `url(${landingBg})` }}
      />

      <div
        className="absolute inset-0 bg-right-top bg-no-repeat bg-cover -z-30 dark:hidden "
        style={{ backgroundImage: `url(${landingBgWhite})` }}
      />



      <ScrollToBottom isDark={isDark} />

      <section className="flex items-center justify-center w-full min-h-screen">
        <div
          id="home"
          className="flex flex-col items-center justify-center w-full max-w-5xl text-center"
        >
          <div className="flex flex-col items-center gap-2 mt-12 sm:flex-row sm:items-end sm:gap-4 sm:mt-16">
            <h1 className="text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
              Hi there!
            </h1>
            <NeonBorder text={"Welcome to My Portfolio"} isDark={isDark} />
          </div>

          <h2 className="flex items-center gap-2 mt-3 text-2xl leading-snug text-black dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
            I'm <span className="font-semibold">Belal</span>,{" "}
            <div className="relative flex items-center justify-center h-12 overflow-hidden text-xl text-blue-700 dark:text-blue-400 sm:h-16 lg:h-20 sm:text-3xl lg:text-5xl">
              <FlipWords words={words} />
            </div>

          </h2>


          <p className="w-full max-w-2xl px-2 mt-4 text-base text-black dark:text-white md:text-lg sm:px-0">
            I'm a <span className="text-blue-700 dark:text-blue-400">Software Engineer</span> passionate about
            <span className="text-blue-700 dark:text-blue-400"> web development</span> and
            <span className="text-blue-700 dark:text-blue-400"> UI/UX design</span>. Explore my projects and experience.
          </p>

          <div className="mt-2 sm:mt-5">
            <FloatingDockDemo />
          </div>

          <div className="flex flex-col justify-center w-full gap-3 mt-0 md:mt-8 sm:flex-row sm:gap-4 sm:w-auto">
            <a
              href="/Belal-Hanafy-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 sm:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-4 sm:px-6 font-medium text-slate-400 
              transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 
              focus:ring-offset-2 focus:ring-offset-slate-50 w-full sm:w-auto"
            >
              Show My CV
            </a>

            <a
              href="#about"
              className="inline-flex h-11 sm:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 
              bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-4 sm:px-6 font-medium text-slate-400 
              transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 
              focus:ring-offset-2 focus:ring-offset-slate-50 w-full sm:w-auto"
            >
              Explore More About Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
