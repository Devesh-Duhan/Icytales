import React from "react";

const Button = ({
  height,
  width,
  leading,
  theme,
  icons,
  children,
  className = "",
  ...props
}) => {
  const themeClass =
    theme === "primary"
      ? "bg-pink shadow-[0_3px_22px_3px_rgba(248,61,142,0.31)] border border-transparent hover:bg-transparent hover:border-pink"
      : theme === "secondary"
      ? "bg-darkpurple  border border-transparent  hover:bg-transparent hover:border-darkpurple"
      : "";

  return (
    <button
      className={`
        ${themeClass}
        text-white font-semibold rounded-full
        flex items-center justify-center duration-300 cursor-pointer 
        ${height || ""}
        ${width || ""}
        ${leading || ""}
        ${className}
      `}
      {...props}
    >
      {children}
      {icons && <span className="ml-2 ">{icons}</span>}
    </button>
  );
};

export default Button;
