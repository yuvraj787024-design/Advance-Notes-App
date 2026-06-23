import React from "react";

const Button = ({ darkMode, setDarkMode }) => {
    
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`
        relative
        w-16
        h-8
        rounded-full
        p-1
        transition-all
        duration-300
        ${
          darkMode
            ? "bg-cyan-500"
            : "bg-slate-400"
        }
      `}
    >
      <div
        className={`
          w-6
          h-6
          rounded-full
          transition-all
          duration-300
          ${
            darkMode
              ? "translate-x-8 bg-white"
              : "translate-x-0 bg-slate-900"
          }
        `}
      />
    </button>
  );
};

export default Button;