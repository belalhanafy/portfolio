import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import DarkModeToggle from "../features/DarkModeToggle";
import { AnimatedModalDemo } from "../features/AnimatedModalDemo";
import StarBorder from "../blocks/Animations/StarBorder/StarBorder";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../features/Menu";

const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Approach", id: "approach" },
];

const Navbar = ({ isDark, setIsDark }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");



    const handleScrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const toggleMenu = () => {
        setIsOpen((prev) => {
            return !prev;
        });
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowX = "hidden"; // Prevents horizontal scroll
        } else {
            document.body.style.overflowX = ""; // Resets when menu closes
        }

        return () => {
            document.body.style.overflowX = ""; // Cleanup when component unmounts
        };
    }, [isOpen]);

    useEffect(() => {

        if (window.location.hash) {
            window.history.replaceState(null, "", window.location.pathname);
        }

        setActiveSection("home");

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 50;
            navItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(item.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleActiveSection = (id) => {
        setActiveSection(id);
        closeMenu();
    }
    return (
        <>
            <div className="relative">
                <nav className="absolute z-50 flex items-center justify-between w-full py-6">
                    <div>
                        <img loading="lazy" src={logo} alt="logo" className="w-40 md:w-52" />
                    </div>

                    <ul className="fixed z-50 items-center hidden gap-4 px-4 py-2 transform -translate-x-1/2 rounded-lg shadow-lg left-1/2 w-max bg-white/20 backdrop-blur-sm lg:flex">
                        {navItems.map((item) => (
                            <li key={item.id} onClick={() => handleActiveSection(item.id)}>
                                {activeSection === item.id ? (
                                    <StarBorder as="button" className="custom-class" color={`${isDark ? '#fc03e7' : "cyan"}`} speed="2s">
                                        <a href={`#${item.id}`}>
                                            {item.label}
                                        </a>
                                    </StarBorder>
                                ) : (
                                    <a href={`#${item.id}`} className="px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-700">
                                        {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>


                    <div className="flex items-center justify-between space-x-2">
                        <DarkModeToggle setIsDark={setIsDark} />
                        <Menu onClick={toggleMenu} isDark={isDark} isOpen={isOpen} />
                        <div onClick={handleScrollToContact}>
                            <AnimatedModalDemo className="hidden lg:flex" />
                        </div>
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <div className="absolute z-40 flex justify-center w-full top-full">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0" }}
                                    exit={{ x: "-120%" }}
                                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                    className="fixed z-50 block h-auto py-4 pb-6 rounded-lg shadow-lg w-[95%] lg:hidden bg-white/20 backdrop-blur-sm"
                                >
                                    <ul className="flex flex-col items-center gap-4">
                                        {navItems.map((item, index) => (
                                            <motion.li key={item.id} onClick={() => handleActiveSection(item.id)} initial={{ opacity: 0, x: -40 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -40 }}
                                                transition={{ delay: index * 0.2 }}>
                                                {activeSection === item.id ? (
                                                    <StarBorder as="button" className="custom-class" color={`${isDark ? '#a24adc' : "cyan"}`} speed="2s">
                                                        <a href={`#${item.id}`}>
                                                            {item.label}
                                                        </a>
                                                    </StarBorder>
                                                ) : (
                                                    <a href={`#${item.id}`} className="px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:text-white dark:hover:bg-gray-700">
                                                        {item.label}
                                                    </a>
                                                )}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <motion.div
                                        className="flex justify-center"
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 40 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <div onClick={() => { handleScrollToContact(); closeMenu(); }}>
                                            <AnimatedModalDemo className="flex lg:hidden" />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
