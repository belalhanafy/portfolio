import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import { Player } from '@lottiefiles/react-lottie-player';
import contactAnimation from "../../src/components/ui/lotties/Cute Robot Flying Cartoon.json";

const Contact = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const formElementsRef = useRef([]);
    const animationRef = useRef(null);

    const handleSendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus("");

        const formData = new FormData(formRef.current);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        const time = new Date().toLocaleString();

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                { name, email, message, time },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus("✅ Message sent successfully!");
                    setIsSending(false);
                    formRef.current.reset();
                    setTimeout(() => setStatus(""), 2000);

                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setStatus("❌ Failed to send message. Please try again later.");
                    setIsSending(false);
                    setTimeout(() => setStatus(""), 2000);
                }
            );
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const tl = gsap.timeline();

                    // Animate title
                    tl.fromTo(
                        titleRef.current,
                        { opacity: 0, y: 50 },
                        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
                    );

                    // Animate paragraph
                    tl.fromTo(
                        paragraphRef.current,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                        "-=0.4"
                    );

                    // Animate form elements with stagger
                    tl.fromTo(
                        formElementsRef.current,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
                        "-=0.3"
                    );

                    // Animate Lottie animation from right
                    tl.fromTo(
                        animationRef.current,
                        { opacity: 0, scale: 0.8, x: 100 },
                        { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "back.out(1.7)" },
                        "-=0.5"
                    );

                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative py-20 text-center text-gray-800 bg-white dark:bg-black dark:text-gray-200"
        >
            <div className="px-6 mx-auto max-w-7xl">
                <div className="flex flex-col-reverse justify-between gap-6 lg:flex-row ">
                    <div className="text-left">
                        <h2
                            ref={titleRef}
                            className="mb-6 text-3xl font-bold md:text-5xl"
                        >
                            Get In Touch
                        </h2>

                        <p
                            ref={paragraphRef}
                            className="max-w-xl mb-10 text-gray-600 dark:text-gray-400"
                        >
                            Have a question or want to collaborate? Feel free to reach out via any
                            platform below — I’d love to hear from you!
                        </p>

                        <form
                            ref={formRef}
                            onSubmit={handleSendEmail}
                            className="flex flex-col items-start w-full gap-4"
                        >
                            <input
                                ref={(el) => (formElementsRef.current[0] = el)}
                                name="name"
                                type="text"
                                required
                                placeholder="Your Name"
                                className="w-full px-4 py-3 text-sm bg-transparent border border-gray-300 rounded-lg outline-none dark:border-gray-700 focus:border-cyan-400"
                            />
                            <input
                                ref={(el) => (formElementsRef.current[1] = el)}
                                name="email"
                                type="email"
                                required
                                placeholder="Your Email"
                                className="w-full px-4 py-3 text-sm bg-transparent border border-gray-300 rounded-lg outline-none dark:border-gray-700 focus:border-cyan-400"
                            />
                            <textarea
                                ref={(el) => (formElementsRef.current[2] = el)}
                                name="message"
                                required
                                placeholder="Your Message"
                                rows="4"
                                className="w-full px-4 py-3 text-sm bg-transparent border border-gray-300 rounded-lg outline-none dark:border-gray-700 focus:border-cyan-400"
                            ></textarea>

                            <button
                                ref={(el) => (formElementsRef.current[3] = el)}
                                type="submit"
                                disabled={isSending}
                                className={`px-8 py-3 mt-2 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:shadow-[10px_10px_10px_rgba(167,116,255,0.6)] active:scale-95 ${isSending ? "opacity-60 cursor-not-allowed" : ""
                                    }`}
                            >
                                {isSending ? "Sending..." : "Send Message"}
                            </button>

                            {status && (
                                <p
                                    className={`mt-3 text-sm ${status.startsWith("✅") ? "text-green-500" : "text-red-500"
                                        }`}
                                >
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>

                    <Player
                        ref={animationRef}
                        autoplay
                        loop
                        src={contactAnimation}
                        className="w-full max-w-[300px] md:max-w-[500px] h-auto mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;