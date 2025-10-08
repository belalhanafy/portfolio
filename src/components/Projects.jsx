import React, { useState, useEffect } from 'react';
import { projects } from '@/constants';
import ProjectDetails from './ProjectDetails';
import PaginationPro from './ui/PaginationPro';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2); // Default for desktop

  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth < 1028) {
        setPageSize(1); // Mobile
      } else {
        setPageSize(2); // Tablet & Desktop
      }
    };

    updatePageSize();
    window.addEventListener('resize', updatePageSize);
    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  const totalPages = Math.ceil(projects.length / pageSize);

  const paginatedData = projects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div
      id="projects"
      className="flex flex-col w-full gap-24 px-4 py-20 mx-auto md:px-0"
    >
      <h2 className="text-4xl font-bold text-center text-black md:text-5xl dark:text-white">
        A small selection of{' '}
        <span className="text-[#A374FF]">recent projects</span>
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 sm:gap-16 lg:gap-12">
        {paginatedData.map((project) => (
          <ProjectDetails key={project.id} {...project} />
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
