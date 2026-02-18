import React, { memo, useState, useEffect, useRef } from "react";
import SkillsCarousel from "./ui/SkillsCarousel";
import profileImg from "../assets/images/webp_images/my_Image.webp";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { gsap } from "gsap";

const words = `Hi, I’m Belal, a passionate frontend developer with experience in building modern web applications using React, TailwindCSS, Firebase, and more. I love solving problems, creating beautiful UIs, and continuously learning new technologies to improve my craft. I also work as a freelancer on Khamsat, delivering projects to clients and gaining real-world experience in web development.`;

const About = memo(() => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

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

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();

      // Animate header
      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      // Animate content
      tl.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );

      // Animate image
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, x: 50 },
        { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      );
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-8 pt-16 text-gray-800 dark:text-gray-200"
    >
      <div ref={headerRef} className="flex flex-col items-center gap-2 mb-10 xl:items-end xl:flex-row xl:mb-6">
        <h2 className=" text-center xl:text-left text-3xl text-[#A374FF] font-bold md:text-5xl">
          About Me
        </h2>

        <button class="flex items-center gap-2 bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 px-4 py-2 rounded-full transition">
          <span class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          <span class="text-sm font-semibold text-green-800 dark:text-green-200">
            Open for Freelance
          </span>
        </button>
      </div>

      <div className="flex flex-col-reverse items-center gap-12 xl:flex-row xl:items-start">
        <div ref={contentRef} className="flex-[2] text-center xl:text-left
        w-full
          max-w-[870px]
          max-[1280px]:max-w-[850px] 
          max-[1024px]:max-w-[780px] 
          max-[900px]:max-w-[700px]  
          max-[720px]:max-w-[650px]  
          max-[640px]:max-w-[580px]  
          max-[600px]:max-w-[500px]  
          max-[480px]:max-w-[350px]  
          mx-auto xl:mx-0 "
        >
          {/* Only start the typing animation when the user scrolls to this section */}
          {inView ? (
            <TextGenerateEffect
              className="mb-1 leading-relaxed"
              words={words}
              triggerOnView={true}
            />
          ) : (
            <div className="h-24" />
          )}

          <div>
            <SkillsCarousel />
          </div>
        </div>

        <div ref={imageRef} className="relative flex items-center justify-center flex-1">
          <div className={`absolute rounded-full w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 blur-3xl opacity-30 ${inView ? 'animate-pulse' : ''}`}></div>

          <img
            src={profileImg}
            alt="Belal"
            loading="lazy"
            className="relative z-10 object-cover object-top w-72 h-64 md:w-80 md:h-[21rem] rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] transition-all duration-1000"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)"
            }}
          />
        </div>
      </div>
    </section >
  );
});

export default About;