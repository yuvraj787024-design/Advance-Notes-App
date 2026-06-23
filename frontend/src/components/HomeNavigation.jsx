import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";


export default function Navbar({
  darkMode,
  setDarkMode,
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`
      sticky top-0 z-50
      backdrop-blur-md
      border-b
      ${
        darkMode
          ? "bg-slate-900/90 text-white border-slate-700"
          : "bg-white/90 text-slate-900 border-slate-300"
      }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          <h1 className="text-2xl font-bold text-cyan-400">
            NotesHub
          </h1>

          {/* Desktop */}
          <div className="hidden md:flex gap-8 items-center">

            <Link to="/" className="
  hover:text-cyan-400
  transition-colors
  duration-300
  ">Home</Link>

            <Link to="/about"  className="
  hover:text-cyan-400
  transition-colors
  duration-300
  ">About</Link>

            <Link to="/services"  className="
  hover:text-cyan-400
  transition-colors
  duration-300
  ">Services</Link>

            <Button
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
            md:hidden
            flex
            flex-col
            gap-5
            pb-6
            "
          >
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/services">Services</Link>

            <Link to="/contact">Contact</Link>
            

            <Button
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </div>
        )}
      </div>
    </nav>
  );
}