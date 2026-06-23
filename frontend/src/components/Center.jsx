import { Link } from "react-router-dom";

export default function Hero({ darkMode }) {
  return (
    <section
      className="
      flex
      flex-col
      justify-center
      items-center
      text-center
      px-6
      min-h-[80vh]
      "
    >
      <h1
        className="
        text-5xl
        md:text-7xl
        font-extrabold
        leading-tight
        "
      >
        Capture Every Idea
      </h1>

      <p
        className={`
        mt-6
        max-w-2xl
        text-lg
        ${
          darkMode
            ? "text-slate-300"
            : "text-slate-600"
        }
        `}
      >
        Create notes, organize knowledge,
        and access everything from one place.
      </p>

      <div className="mt-10 flex gap-5">

        <Link
          to="/register"
          className="
          px-8
          py-4
          bg-black
          text-white
          rounded-xl
          hover:bg-cyan-600
          hover:scale-105
          transition
          "
        >
          Get Started
        </Link>

        <Link
          to="/about"
          className="
          px-8
          py-4
          border
          rounded-xl
          hover:scale-105
          transition
          "
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}