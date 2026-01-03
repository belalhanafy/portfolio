import React, { memo } from "react";

// --- IMAGE IMPORTS ---
import html from "../../assets/images/skills/html.png";
import css from "../../assets/images/skills/css.png";
import javascript from "../../assets/images/skills/javascript.png";
import reactLogo from "../../assets/images/skills/react.png";
import typescript from "../../assets/images/skills/typescript.png";
import tailwind from "../../assets/images/skills/tailwind.png";
import github from "../../assets/images/skills/github.png";
import firebase from "../../assets/images/skills/Firebase.png";
import redux from "../../assets/images/skills/redux.svg";
import framer from "../../assets/images/skills/framer.png";
import chad from "../../assets/images/skills/shadcn.png";
import next from "../../assets/images/skills/nextjs-icon.webp";

const skills = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: javascript },
    { name: "Reactjs", logo: reactLogo },
    { name: "TypeScript", logo: typescript },
    { name: "TailwindCSS", logo: tailwind },
    { name: "Github", logo: github },
    { name: "Firebase", logo: firebase },
    { name: "Redux", logo: redux },
    { name: "Framer Motion", logo: framer },
    { name: "Shadcn UI", logo: chad },
    { name: "Next.js", logo: next },
];

// 1. We wrap the component in React.memo
// This stops the component from re-rendering (and re-fetching images) 
// unless the skills array itself changes.
const SkillsCarousel = memo(() => {

    // We double the array once outside the JSX to keep it stable
    const duplicatedSkills = [...skills, ...skills];

    return (
        <div className="relative w-full py-10 overflow-hidden bg-transparent">
            <div
                className="flex gap-10 w-max animate-scroll hover:[animation-play-state:paused]"
                style={{
                    "--animation-duration": "30s",
                    display: "flex"
                }}
            >
                {duplicatedSkills.map((skill, idx) => (
                    <div
                        // 2. Stable Key: Prevents React from "re-mounting" items incorrectly
                        key={`${skill.name}-${idx}`}
                        className="flex flex-col items-center justify-center min-w-[120px] transition-transform duration-300 hover:scale-110"
                    >
                        <div className="flex items-center justify-center w-20 h-20 p-2 shadow-sm rounded-2xl">
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="object-contain w-16 h-16"
                                loading="lazy"

                            />
                        </div>
                        <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
});
export default SkillsCarousel;