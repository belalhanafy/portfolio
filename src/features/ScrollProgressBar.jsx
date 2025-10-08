import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 h-1 z-[9999] transition-opacity duration-300 ${scrollProgress > 0 ? "opacity-100" : "opacity-0"
                }`}
            style={{
                width: `${scrollProgress}%`,
                background:
                    "linear-gradient(to right, #06b6d4, #8b5cf6, #ec4899)",
                boxShadow: "0 0 10px rgba(139, 92, 246, 0.7)",
            }}
        />
    );
};

export default ScrollProgressBar;
