import React from "react";
import SkillsCarousel from "./ui/SkillsCarousel";
import profileImg from "../assets/images/myImage.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = `Hi, I’m Belal, a passionate frontend developer with experience in building modern web applications using React, TailwindCSS, Firebase, and more. I love solving problems, creating beautiful UIs, and continuously learning new technologies to improve my craft. I also work as a freelancer on Khamsat, delivering projects to clients and gaining real-world experience in web development.`;
const About = () => {
  return (
    <section
      id="about"
      className="w-full py-8 pt-16 text-gray-800 dark:text-gray-200"
    >
      <h2 className="xl:mb-6 mb-20 text-center xl:text-left text-3xl text-[#A374FF] font-bold md:text-4xl">
        About Me
      </h2>
      <div className="flex flex-col-reverse items-center gap-12 xl:flex-row xl:items-center">
        <div className="flex-[2] text-center xl:text-left ">
          <TextGenerateEffect className="mb-3 leading-relaxed" words={words} triggerOnView={true}
          />

          <div className="
          w-full
          max-w-[870px]
          max-[1280px]:max-w-[850px] 
          max-[1024px]:max-w-[780px] 
          max-[900px]:max-w-[700px]  
          max-[720px]:max-w-[650px]  
          max-[640px]:max-w-[580px]  
          max-[600px]:max-w-[500px]  
          max-[480px]:max-w-[400px]  
          mx-auto xl:mx-0 px-4 sm:px-6 xl:px-0">
            <SkillsCarousel />
          </div>

        </div>

        <div className="relative flex items-center justify-center flex-1">
          <div className="absolute rounded-full w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse dark:from-blue-700 dark:via-purple-800 dark:to-pink-900 dark:opacity-40"></div>

          <img
            src={profileImg}
            alt="Belal"
            className="
      relative z-10 object-cover object-top w-64 h-64 md:w-80 md:h-80 
      rounded-2xl border-2 border-transparent 
      bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] 
      shadow-[0_0_40px_rgba(167,116,255,0.6)]
      dark:from-blue-600 dark:via-purple-700 dark:to-pink-800 
      dark:shadow-[0_0_40px_rgba(90,60,180,0.6)]
    "
          />
        </div>


      </div>
    </section>
  );
};

export default About;
