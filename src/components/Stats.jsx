import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Projects Completed", value: 20 },
    { label: "Happy Clients", value: 4 },
    { label: "Years of Experience", value: 1 },
    { label: "Students Mentored", value: 60 },
];

const CountUpNumber = ({ target }) => {
    const [count, setCount] = useState(0);
    const [done, setDone] = useState(false);
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                onEnter: () => setIsInView(true),
            },
        });

        if (isInView) {
            let start = 0;
            const duration = 2000; // 2 seconds
            const stepTime = 20; // ms
            const steps = duration / stepTime;
            const increment = target / steps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    start = target;
                    clearInterval(timer);
                    setDone(true);
                }
                setCount(Math.floor(start));
            }, stepTime);
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [isInView, target]);

    return (
        <span
            ref={ref}
            className="text-4xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        >
            {count}
            {done && <span className="text-cyan-400">+</span>}
        </span>
    );
};

const Stats = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
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
        )
        .fromTo(
            statsRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
            "-=0.3"
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="text-center py-14 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
            <div className="container px-6 mx-auto max-w-7xl">
                <h2 ref={titleRef} className="mb-10 text-3xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 dark:from-pink-300 dark:to-purple-400">
                    My Impact in Numbers
                </h2>

                <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            ref={(el) => (statsRef.current[i] = el)}
                            className="flex flex-col items-center"
                        >
                            <CountUpNumber target={stat.value} />
                            <span className="mt-2 text-sm text-gray-600 sm:text-base dark:text-gray-400">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;