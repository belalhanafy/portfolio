import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Palette, Code2, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
        title: "1. Discover & Plan",
        description:
            "Understand your goals, target audience, and requirements to create a clear project roadmap.",
    },
    {
        icon: <Palette className="w-8 h-8 text-purple-400" />,
        title: "2. Design with Purpose",
        description:
            "Craft intuitive and visually appealing UI/UX that aligns with the project’s vision and user needs.",
    },
    {
        icon: <Code2 className="w-8 h-8 text-pink-400" />,
        title: "3. Develop & Iterate",
        description:
            "Build high-quality, scalable code with modern tools like React, Tailwind, and Firebase.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-indigo-400" />,
        title: "4. Launch & Optimize",
        description:
            "Deploy, test, and refine for top performance and user satisfaction — turning ideas into impact.",
    },
];

const Approach = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const stepsRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate title
        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );

        // Animate steps with stagger for smooth sequential animation
        tl.fromTo(
            stepsRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
            "-=0.3"
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} id="approach" className="py-20 text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <h2
                ref={titleRef}
                className="mb-12 text-3xl font-bold text-gray-800 md:text-5xl dark:text-white"
            >
                My Approach
            </h2>

            <div className="px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={(el) => (stepsRef.current[index] = el)}
                            className="p-6 transition-transform duration-300 bg-white border border-gray-200 shadow-lg rounded-2xl dark:bg-gray-900 hover:shadow-xl hover:-translate-y-2 dark:border-gray-700"
                        >
                            <div className="flex justify-center mb-4">{step.icon}</div>
                            <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Approach;