import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Player } from '@lottiefiles/react-lottie-player';
import contactAnimation from "../../src/components/ui/lotties/Cute Robot Flying Cartoon.json";

const Contact = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");

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

    return (
        <section
            id="contact"
            className="relative py-20 text-center text-gray-800 bg-white dark:bg-black dark:text-gray-200"
        >
            <div className="px-6 mx-auto max-w-7xl">
                <div className="flex flex-col-reverse justify-between gap-6 lg:flex-row ">
                    <div className="text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            viewport={{ once: true }}
                            className="mb-6 text-3xl font-bold md:text-5xl"
                        >
                            Get In Touch
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-xl mb-10 text-gray-600 dark:text-gray-400"
                        >
                            Have a question or want to collaborate? Feel free to reach out via any
                            platform below — I’d love to hear from you!
                        </motion.p>

                        <motion.form
                            ref={formRef}
                            onSubmit={handleSendEmail}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start w-full gap-4"
                        >
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="Your Name"
                                className="w-full px-4 py-3 text-sm bg-transparent border border-gray-300 rounded-lg outline-none dark:border-gray-700 focus:border-cyan-400"
                            />
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Your Email"
                                className="w-full px-4 py-3 text-sm bg-transparent border border-gray-300 rounded-lg outline-none dark:border-gray-700 focus:border-cyan-400"
                            />
                            <textarea
                                name="message"
                                required
                                placeholder="Your Message"
                                rows="4"
                                className="w-full px-4 py-3 text-sm bg-transparent border border-gray-300 rounded-lg outline-none dark:border-gray-700 focus:border-cyan-400"
                            ></textarea>

                            <button
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
                        </motion.form>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        <Player
                            autoplay
                            loop
                            src={contactAnimation}
                            className="w-full max-w-[300px] md:max-w-[500px] h-auto mx-auto"
                        />

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
