import React, { useState } from 'react'
import { Link, Routes } from 'react-router-dom'
import HomeNavigation from '../components/HomeNavigation'
import Center from '../components/Center'
import Footer from '../components/Footer'

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);



  return (
    <div className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-[#0f172a] text-white"
          : "bg-[#f8fafc] text-slate-900"
      }`}>
        <HomeNavigation  darkMode={darkMode}
        setDarkMode={setDarkMode} />
        
        {/* Auth Banner */}
<section
  className={`
    w-full
    py-8
    px-4
    transition-all duration-500
    ${
      darkMode
        ? "bg-slate-800"
        : "bg-slate-200"
    }
  `}
>
  <div
    className="
      max-w-7xl
      mx-auto
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-6
    "
  >
    {/* Left Side */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl md:text-4xl font-bold">
        Welcome to NotesHub
      </h2>

      <p
        className={`mt-2 text-sm md:text-lg ${
          darkMode
            ? "text-slate-300"
            : "text-slate-600"
        }`}
      >
        Create, organize and access your notes from anywhere.
      </p>
    </div>

    {/* Right Side */}
    <div className="flex flex-col sm:flex-row gap-4">

      <Link
        to="/login"
        className="
          px-8 py-3
          border-2 border-cyan-500
          rounded-xl
          font-semibold
          hover:bg-cyan-500
          hover:text-white
          hover:scale-105
          transition-all duration-300
          text-center
        "
      >
        Sign In
      </Link>

      <Link
        to="/register"
        className="
          px-8 py-3
          bg-cyan-500
          text-white
          rounded-xl
          font-semibold
          hover:bg-cyan-600
          hover:scale-105
          transition-all duration-300
          text-center
          shadow-lg
        "
      >
        Sign Up
      </Link>

    </div>
  </div>
</section>


        <Center  darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
    </div>
  )
}

export default HomePage