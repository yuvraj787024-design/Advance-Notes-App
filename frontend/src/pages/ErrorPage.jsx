import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="
        min-h-screen
        bg-linear-to-br
        from-slate-950
        via-slate-900
        to-slate-800
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        overflow-hidden
        relative
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          w-96
          h-96
          bg-blue-500/20
          blur-3xl
          rounded-full
          top-20
          left-10
          animate-pulse
        "
      />

      <div
        className="
          absolute
          w-80
          h-80
          bg-purple-500/20
          blur-3xl
          rounded-full
          bottom-20
          right-10
          animate-pulse
        "
      />

      {/* Floating 404 */}
      <h1
        className="
          text-8xl
          md:text-[12rem]
          font-extrabold
          text-white
          drop-shadow-2xl
          animate-bounce
        "
      >
        404
      </h1>

      {/* Message */}
      <h2
        className="
          text-3xl
          md:text-5xl
          font-bold
          text-white
          mt-4
        "
      >
        Oops! Page Not Found
      </h2>

      <p
        className="
          text-gray-300
          mt-6
          max-w-xl
          text-lg
          leading-relaxed
        "
      >
        The page you're looking for might have been removed,
        renamed, or is temporarily unavailable.
      </p>

      {/* Tomb Style Box */}
      <div
        className="
          mt-10
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          rounded-3xl
          p-8
          shadow-2xl
          hover:scale-105
          transition-all
          duration-500
        "
      >
        <div className="text-7xl mb-4">
          🪦
        </div>

        <p className="text-gray-200 text-lg">
          Here lies the page you were searching for...
        </p>

        <p className="text-gray-400 mt-2">
          It has vanished into the digital universe.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link
          to="/"
          className="
            px-8
            py-4
            bg-blue-600
            hover:bg-blue-700
            text-white
            rounded-xl
            font-semibold
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
          "
        >
          🏠 Back Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="
            px-8
            py-4
            bg-slate-700
            hover:bg-slate-600
            text-white
            rounded-xl
            font-semibold
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
          "
        >
          ⬅ Go Back
        </button>
      </div>

      {/* Footer Text */}
      <p
        className="
          absolute
          bottom-6
          text-gray-500
          text-sm
        "
      >
        NotesHub © 2026
      </p>
    </div>
  );
};

export default ErrorPage;