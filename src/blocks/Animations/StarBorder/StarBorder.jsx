const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block py-[3px] overflow-hidden rounded-lg ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[400%] h-[70%] opacity-80 bottom-[-20px] right-[-300%] rounded-lg animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 15%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[400%] h-[70%] opacity-80 top-[-20px] left-[-300%] rounded-lg animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 15%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-10 px-4 py-2 text-center rounded-lg bg-slate-400 dark:bg-gradient-to-b dark:from-black dark:to-gray-800">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
