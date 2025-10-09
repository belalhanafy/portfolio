import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import logo from "../../assets/images/7anoof.png";
import wings from "../../assets/images/wings.png";

export default function IntroAnimation({ onFinish }) {
    const logoControls = useAnimation();
    const wingsControls = useAnimation();
    const groupControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // Step 1: wings fade in
            await wingsControls.start({
                opacity: [0, 1],
                y: [40, 0],
                transition: { duration: 1.2, ease: "easeOut" },
            });

            // Step 2: logo flies up and lands between wings
            await logoControls.start({
                opacity: 1,
                y: [300, -50], // 👈 raises it up to sit between wings
                scale: [0.8, 1],
                transition: { duration: 1.1, ease: "easeInOut" },
            });

            // Step 3: wings react with small shake (impact)
            await wingsControls.start({
                rotate: [0, -5, 5, -3, 3, 0],
                transition: { duration: 0.6, ease: "easeInOut" },
            });

            // Step 4: both zoom into screen together (site entrance)
            await groupControls.start({
                scale: [1, 6],
                opacity: [1, 0],
                transition: { duration: 1.3, ease: "easeInOut" },
            });

            onFinish();
        };

        sequence();
    }, [logoControls, wingsControls, groupControls, onFinish]);

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-[9999] overflow-hidden"
            animate={groupControls}
        >
            <motion.img
                src={wings}
                alt="wings"
                initial={{ opacity: 0, y: 40 }}
                animate={wingsControls}
                className="absolute w-[420px] sm:w-[560px]"
            />
            <motion.img
                src={logo}
                alt="logo"
                initial={{ opacity: 0, y: 300 }}
                animate={logoControls}
                className="relative w-[230px] sm:w-[300px] z-10 -translate-y-4" // 👈 fine-tune position
            />
        </motion.div>
    );
}
