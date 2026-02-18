import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/constants";
import ProjectDetails from "./ProjectDetails";
import PaginationPro from "./ui/PaginationPro";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [direction, setDirection] = useState(1); // +1 for next, -1 for prev

  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth < 1028) setPageSize(1);
      else setPageSize(2);
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const totalPages = Math.ceil(projects.length / pageSize);

  const paginatedData = projects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    // Animate title on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Animate cards on page change
    if (gridRef.current) {
      const cards = gridRef.current.children;
      gsap.fromTo(
        cards,
        {
          x: (i) => (i % 2 === 0 ? -200 * direction : 200 * direction),
          opacity: 0,
          scale: 0.95,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }
  }, [currentPage, direction]);

  return (
    <div
      ref={sectionRef}
      id="projects"
      className="flex flex-col w-full gap-0 py-20 mx-auto overflow-hidden md:gap-16"
    >
      <h2 ref={titleRef} className="mb-5 text-3xl font-bold text-center text-black md:text-5xl dark:text-white">
        A small selection of{" "}
        <span className="text-[#A374FF]">recent projects</span>
      </h2>

      <div ref={gridRef} className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 sm:gap-16 lg:gap-12">
        {paginatedData.map((project, index) => (
          <div
            key={project.id}
            className="flex justify-center"
          >
            <ProjectDetails {...project} />
          </div>
        ))}
      </div>

      <PaginationPro
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        onClickPrev={handlePrev}
        onClickNext={handleNext}
      />
    </div>
  );
};

export default Projects;