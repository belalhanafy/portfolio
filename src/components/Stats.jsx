import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
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
    }, [isInView, target]);

    return (
        <motion.span
            ref={ref}
            className="text-4xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        >
            {count}
            {done && <span className="text-cyan-400">+</span>}
        </motion.span>
    );
};

const Stats = () => {
    return (
        <section className="text-center py-14 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
            <h2 className="mb-10 text-3xl font-bold text-gray-800 dark:text-white">
                My Impact in Numbers
            </h2>

            <div className="grid max-w-5xl grid-cols-2 gap-10 px-4 mx-auto sm:grid-cols-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <CountUpNumber target={stat.value} />
                        <span className="mt-2 text-sm text-gray-600 sm:text-base dark:text-gray-400">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
