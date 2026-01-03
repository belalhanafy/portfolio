import React, { memo, useState, useEffect, useRef } from "react";
import SkillsCarousel from "./ui/SkillsCarousel";
import profileImg from "../assets/images/my_Image.jpg";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Hi, I’m Belal, a passionate frontend developer with experience in building modern web applications using React, TailwindCSS, Firebase, and more. I love solving problems, creating beautiful UIs, and continuously learning new technologies to improve my craft. I also work as a freelancer on Khamsat, delivering projects to clients and gaining real-world experience in web development.`;

const About = memo(() => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Stop observing once triggered
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-8 pt-16 text-gray-800 dark:text-gray-200"
    >
      <h2 className="xl:mb-6 mb-10 text-center xl:text-left text-3xl text-[#A374FF] font-bold md:text-5xl">
        About Me
      </h2>

      <div className="flex flex-col-reverse items-center gap-12 xl:flex-row xl:items-center">
        <div className="flex-[2] text-center xl:text-left">
          {/* Only start the typing animation when the user scrolls to this section */}
          {inView ? (
            <TextGenerateEffect
              className="mb-3 leading-relaxed"
              words={words}
              triggerOnView={true}
            />
          ) : (
            <div className="h-24" /> 
          )}

          <div className="w-full max-w-[870px] mx-auto xl:mx-0 px-4 sm:px-6 xl:px-0">
            <SkillsCarousel />
          </div>
        </div>

        <div className="relative flex items-center justify-center flex-1">
          <div className={`absolute rounded-full w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 blur-3xl opacity-30 ${inView ? 'animate-pulse' : ''}`}></div>

          <img
            src={profileImg}
            alt="Belal"
            loading="lazy"
            className="relative z-10 object-cover object-top w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] transition-all duration-1000"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)"
            }}
          />
        </div>
      </div>
    </section>
  );
});

export default About;