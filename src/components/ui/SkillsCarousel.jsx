import React from "react";

import html from "../../assets/images/skills/html.png";
import css from "../../assets/images/skills/css.png";
import javascript from "../../assets/images/skills/javascript.png";
import reactLogo from "../../assets/images/skills/react.png";
import typescript from "../../assets/images/skills/typescript.png";
import tailwind from "../../assets/images/skills/tailwind.png";
import github from "../../assets/images/skills/github.png";
import firebase from "../../assets/images/skills/firebase.png";
import redux from "../../assets/images/skills/redux.svg";
import framer from "../../assets/images/skills/framer.png";
import chad from "../../assets/images/skills/shadcn.png";

const skills = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: javascript },
    { name: "React", logo: reactLogo },
    { name: "TypeScript", logo: typescript },
    { name: "TailwindCSS", logo: tailwind },
    { name: "Github", logo: github },
    { name: "Firebase", logo: firebase },
    { name: "Redux", logo: redux },
    { name: "Framer Motion", logo: framer },
    { name: "Shadcn UI", logo: chad },
    // ➕ Add more skills here
];

export default function SkillsCarousel() {
    return (
        <div className="relative w-full py-10 overflow-hidden">
            <div
                className="flex gap-10 w-max animate-scroll"
                style={{ "--animation-duration": "30s" }}
            >
                {[...skills, ...skills].map((skill, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center min-w-[120px]"
                    >
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="object-contain w-16 h-16"
                        />
                        <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
