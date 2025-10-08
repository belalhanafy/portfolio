import React, { useEffect, useState } from 'react';

const BackToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setIsVisible(true);
            } else if (window.scrollY == 0) {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (<>
        {isVisible &&
            <button onClick={scrollToTop}
                className="cursor-pointer z-50 fixed bottom-5 right-5 after:content-['Back_to_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-110 after:duration-200 w-12 h-12 rounded-full border-4 border-sky-200 bg-black pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90">
                <svg className="w-3 duration-200 fill-white delay-50 group-hover/button:-translate-y-12" viewBox="0 0 384 512">
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
            </button>
        }
    </>
    );
}

export default BackToTopBtn;
