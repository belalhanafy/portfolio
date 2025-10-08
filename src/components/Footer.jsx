import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { SiFreelancer } from "react-icons/si"; 
const Footer = () => {
    return (
        <footer className="relative overflow-hidden text-gray-700 border-t border-gray-300 dark:border-gray-700 bg-gradient-to-t from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 dark:text-gray-300">
            <div className="absolute inset-0 opacity-30 blur-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 dark:from-blue-700 dark:via-purple-800 dark:to-pink-900"></div>

            <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center">
                <img
                    src={logo}
                    alt="Belal Logo"
                    className="w-32 h-auto mb-4 transition-transform duration-500 hover:scale-105"
                />

                <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
                    Belal Hanafy
                </h2>

                <p className="max-w-md mb-6 text-sm text-gray-600 dark:text-gray-400">
                    Building beautiful, functional, and creative web experiences with
                    passion and precision.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-6 text-xl">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-cyan-500 dark:hover:text-cyan-400"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-purple-500 dark:hover:text-purple-400"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="mailto:belalhanafy373@gmail.com"
                        className="transition-colors hover:text-pink-500 dark:hover:text-pink-400"
                    >
                        <FaEnvelope />
                    </a>

                    <a
                        href="https://khamsat.com/user/belal_hanafy_311"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-green-500 dark:hover:text-green-400"
                    >
                        <SiFreelancer /> 
                    </a>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-500">
                    © {new Date().getFullYear()} Belal Hanafy. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
