import { motion } from "framer-motion";

const experiences = [
    {
        title: "Freelance Frontend Developer – E-commerce Project",
        date: "2025",
        location: "Cairo, Egypt",
        description: [
            "Delivered a full e-commerce project with modern UI.",
            "Collaborated with clients and backend developers for seamless integration.",
        ],
    },
    {
        title: "Freelance Frontend Developer – Apartment Rental Dashboard",
        date: "2025",
        location: "Cairo, Egypt",
        description: [
            "Built an apartment rental management dashboard with React, implementing booking, room management, and analytics features.",
            "Integrated client and backend workflows for seamless operations.",
        ],
    },
    {
        title: "Web Development Trainee – ITI",
        date: "Jul 2024 – Aug 2024",
        location: "Cairo, Egypt",
        description: [
            "Completed a 120-hour training on React.js, ES6, and frontend development.",
            "Built interactive projects improving teamwork and problem-solving.",
        ],
    },
    {
        title: "Instructor – Almentor (DEPI Summer Camp)",
        date: "Summer 2024",
        location: "Cairo, Egypt",
        description: [
            "Taught entrepreneurship, leadership, and app development with MIT App Inventor.",
            "Guided students through app-building and presentation processes.",
        ],
    },
    {
        title: "Frontend Intern – CodeVeda",
        date: "Jul 2025 – Aug 2025",
        location: "Online",
        description: [
            "Completed a one-month internship focusing on React and frontend best practices.",
            "Enhanced real-world coding skills in React.js and JavaScript.",
        ],
    },
];


const education = [
    {
        title: "B.Sc. in Computer & Artificial Intelligence – Helwan University",
        date: "Oct 2021 – Jun 2025",
        location: "Cairo, Egypt",
        description: [
            "Graduating with Excellent grade (GPA: 3.65/4).",
            "Specialized in software engineering and web technologies.",
        ],
    },
];


const courses = [
    {
        title: "React Diploma – Route Academy",
        date: "2024",
        description:
            "Learned React.js, Tailwind CSS, Next.js, Redux.js, and Material-UI (MUI) through practical projects and hands-on training.",
        link: "https://drive.google.com/file/d/1AOzuc2lSyiCgTT0pVyruAzQ0TZXQ3S-w/view?usp=sharing", // optional
    },
    {
        title: "Front-End Diploma – EMC",
        date: "2023",
        description:
            "Completed a comprehensive front-end diploma covering HTML, CSS, JavaScript, and Bootstrap, focusing on responsive design and real-world applications.",
        link: "https://emc.com.eg/", // optional
    },
    {
        title: "ICPC Participant",
        date: "2024",
        description:
            "Participated in the International Collegiate Programming Contest (ICPC), gaining experience in problem-solving, algorithms, and teamwork under pressure.",
        link: "https://icpc.global/",
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-950 dark:to-gray-900"
        >
        <div className="container px-6 mx-auto max-w-7xl">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-10 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 dark:from-pink-300 dark:to-purple-400 md:text-4xl"
            >
                Experience & Education
            </motion.h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <h3 className="mb-8 text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 dark:from-cyan-300 dark:to-purple-400 md:text-left">
                        Experience
                    </h3>
                    <div className="relative border-l border-gray-300 dark:border-gray-700">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative pl-10 mb-12"
                            >
                                <div className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full -left-[9px] top-2"></div>

                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {exp.title}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {exp.date} • {exp.location}
                                </p>
                                <ul className="mt-2 text-gray-700 list-disc list-inside dark:text-gray-300">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-sm">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="mb-8 text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 dark:from-pink-300 dark:to-purple-400 md:text-left">
                        Education
                    </h3>
                    <div className="relative border-l border-gray-300 dark:border-gray-700">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative pl-10 mb-12"
                            >
                                <div className="absolute w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full -left-[9px] top-2"></div>

                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {edu.title}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {edu.date} • {edu.location}
                                </p>
                                <ul className="mt-2 text-gray-700 list-disc list-inside dark:text-gray-300">
                                    {edu.description.map((desc, i) => (
                                        <li key={i} className="text-sm">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <section className="mt-2 md:col-span-2">
                    <h3 className="mb-10 text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 dark:from-pink-300 dark:to-purple-400 md:text-4xl">
                        Courses & Competitions
                    </h3>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                        {courses.map((course, i) => (
                            <motion.a
                                key={i}
                                href={course.link || "#"}
                                target={course.link ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="
          relative group 
          w-full 
          sm:w-auto 
          p-[2px] rounded-2xl 
          bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
          hover:shadow-[0_0_25px_rgba(167,116,255,0.5)]
          transition-all duration-500
        "
                            >
                                <div
                                    className="relative z-10 h-full p-5 text-center transition-all duration-500 bg-white dark:bg-gray-900 rounded-2xl group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-gray-200 dark:group-hover:from-gray-900 dark:group-hover:to-gray-800"
                                >

                                    <h4 className="font-semibold text-gray-800 transition-colors duration-300 dark:text-white group-hover:text-cyan-400">
                                        {course.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {course.date}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                                        {course.description}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
        </section>
    );
};

export default Experience;
