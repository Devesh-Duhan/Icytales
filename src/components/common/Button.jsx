import React from "react";

const Button = ({ height, width, leading, theme, icons, content }) => {
  
  return (

    <div>
      <button
        className={`${theme === "primary" ? " bg-pink shadow-[0_3px_0_3px_rgba(248,61,142,0.31)] " : theme === "secondary" && " bg-darkpurple shadow-[0_3px_22px_3px_rgba(104,50,146,0.31)] "} text-white font-semibold rounded-full leading-4 flex   ${height} ${width} `}
      >
        {content} {icons}
      </button>
    </div>
  );
};

export default Button;
