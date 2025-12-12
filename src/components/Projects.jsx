import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/constants";
import ProjectDetails from "./ProjectDetails";
import PaginationPro from "./ui/PaginationPro";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [direction, setDirection] = useState(1); // +1 for next, -1 for prev

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

  // Different motion for left & right cards
  const cardVariants = {
    enter: (custom) => ({
      x: custom === "left" ? -200 * direction : 200 * direction,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (custom) => ({
      x: custom === "left" ? 200 * direction : -200 * direction,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <div
      id="projects"
      className="flex flex-col w-full gap-24 px-0 py-20 mx-auto overflow-hidden sm:px-8 md:px-4"
    >
      <h2 className="text-3xl font-bold text-center text-black md:text-5xl dark:text-white">
        A small selection of{" "}
        <span className="text-[#A374FF]">recent projects</span>
      </h2>

      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 sm:gap-16 lg:gap-12">
        <AnimatePresence mode="popLayout" custom={direction}>
          {paginatedData.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index % 2 === 0 ? "left" : "right"}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex justify-center"
            >
              <ProjectDetails {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
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
