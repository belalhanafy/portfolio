import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { PinContainer } from './ui/3d-pin';

const ProjectDetails = ({ id, title, des, img, iconLists, link }) => {
    return (
        <>
            <div className="h-[40rem] w-full flex items-center justify-center ">
                <PinContainer
                    title={title}
                    href={link}
                >
                    <>
                        <div className="relative md:h-[20rem] h-[10rem] w-full flex items-center justify-center">
                            <img
                                src={img}
                                alt="projectPhoto"
                                className="relative z-10 h-full w-full rounded-2xl rotate-2 drop-shadow-[0_0_20px_rgba(0,200,255,0.7)]"
                            />
                        </div>

                        <div className='flex flex-col justify-between h-auto'>
                            <div className='flex-grow-1'>
                                <div className="py-2 text-2xl font-bold text-black dark:text-white">{title}</div>
                                <div className="py-1 text-xl text-black dark:text-white text-white-100">{des}</div>
                            </div>
                            <div className="flex items-center justify-between gap-10 mt-10 md:mt-20 md:gap-0">
                                <div className="flex items-center justify-start ">
                                    <AnimatedTooltip items={iconLists} />
                                </div>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <button
                                        className="
      relative z-10 flex items-center justify-center gap-2
      px-3 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.2
      mx-auto overflow-hidden
      text-sm sm:text-base md:text-lg font-medium md:font-semibold
      text-black border-2 rounded-full shadow-lg
      bg-gray-50 border-gray-100 backdrop-blur-md
      transition-all duration-300
      before:absolute before:w-full before:transition-all before:duration-700
      before:hover:w-full before:-left-full before:hover:left-0
      before:rounded-full before:bg-blue-400 before:-z-10
      before:aspect-square before:hover:scale-150 before:hover:duration-700
      hover:text-white group
    ">
    Explore live site
                                        <svg className="justify-end w-8 h-8 p-2 duration-300 ease-linear rotate-45 border border-gray-700 rounded-full group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 group-hover:border-none" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </>
            </PinContainer>
        </div >
        </>
    );
}

export default ProjectDetails
