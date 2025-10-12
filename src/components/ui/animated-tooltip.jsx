import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  items
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (<>
    {items.map((item, idx) => (
      <div
        className="relative -mr-4 group"
        key={item.name}
        onMouseEnter={() => setHoveredIndex(item.id)}
        onMouseLeave={() => setHoveredIndex(null)}>
        <AnimatePresence mode="popLayout">
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute z-50 flex flex-col items-center justify-center px-4 py-2 text-xs translate-x-1/2 bg-gray-300 rounded-md shadow-xl dark:bg-black -top-16 -left-1/2">
              <div
                className="
    absolute inset-x-10 z-30 w-[20%] -bottom-px h-px
    bg-gradient-to-r from-transparent via-red-500 to-transparent
    dark:bg-gradient-to-r dark:from-transparent dark:via-blue-400 dark:to-transparent
  "
              />

              <div
                className="
    absolute left-10 w-[40%] z-30 -bottom-px h-px
    bg-gradient-to-r from-transparent via-sky-500 to-transparent
    dark:bg-gradient-to-r dark:from-transparent dark:via-pink-400 dark:to-transparent
  "
              />

              <div className="relative z-30 text-base font-bold text-black dark:text-white">
                {item.name}
              </div>
              <div className="text-xs text-white">{item.designation}</div>
            </motion.div>
          )}
        </AnimatePresence>
        <img
          onMouseMove={handleMouseMove}
          height={100}
          width={100}
          src={item.image}
          alt={item.name}
          className="relative object-cover object-top w-10 h-10 p-0 m-0 transition duration-500 border-2 border-black rounded-full dark:border-black sm:w-12 sm:h-12 md:w-14 md:h-14 group-hover:scale-105 group-hover:z-30"
        />
      </div>
    ))}
  </>);
};
