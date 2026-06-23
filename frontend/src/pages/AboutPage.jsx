import React, { useState } from "react";
import HomeNavigation from "../components/HomeNavigation";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-500 ${
        darkMode
          ? "bg-[#0f172a] text-white"
          : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      {/* Navbar */}
      <HomeNavigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16">
        <h1 className="text-5xl font-bold mb-6">
          About NotesHub
        </h1>

        <p
          className={`max-w-3xl text-lg leading-relaxed ${
            darkMode
              ? "text-slate-300"
              : "text-slate-700"
          }`}
        >
          NotesHub is a modern note management platform designed to help
          students, professionals, and lifelong learners organize their
          knowledge efficiently. Our goal is to provide a simple,
          fast, and distraction-free environment where users can create,
          manage, and access notes anytime and anywhere.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div
            className={`border rounded-2xl p-6 transition duration-300 hover:scale-105 ${
              darkMode
                ? "border-gray-700 hover:border-white"
                : "border-gray-300 hover:border-black"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              📝 Create Notes
            </h3>
            <p
              className={
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            >
              Easily create and organize notes with a clean and
              user-friendly interface.
            </p>
          </div>

          <div
            className={`border rounded-2xl p-6 transition duration-300 hover:scale-105 ${
              darkMode
                ? "border-gray-700 hover:border-white"
                : "border-gray-300 hover:border-black"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              📚 Subject Management
            </h3>
            <p
              className={
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            >
              Organize your notes into subjects, chapters, and topics
              for better productivity.
            </p>
          </div>

          <div
            className={`border rounded-2xl p-6 transition duration-300 hover:scale-105 ${
              darkMode
                ? "border-gray-700 hover:border-white"
                : "border-gray-300 hover:border-black"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              🔒 Secure Access
            </h3>
            <p
              className={
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            >
              User authentication ensures your personal notes remain
              secure and private.
            </p>
          </div>

          <div
            className={`border rounded-2xl p-6 transition duration-300 hover:scale-105 ${
              darkMode
                ? "text-slate-300"
                : "text-slate-700"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              ⚡ Fast Performance
            </h3>
            <p
              className={
                darkMode
                  ? "text-slate-300"
                  : "text-slate-700"
              }
            >
              Designed for speed so you can quickly create, edit,
              and access your notes.
            </p>
          </div>

          <div
            className={`border rounded-2xl p-6 transition duration-300 hover:scale-105 ${
              darkMode
                ? "bg-slate-800 border-slate-700 hover:border-cyan-400"
                : "bg-white border-slate-200 hover:border-cyan-500"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              🌙 Dark Mode
            </h3>
            <p
              className={
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }
            >
              Switch seamlessly between dark and light themes for a
              comfortable viewing experience.
            </p>
          </div>

          <div
            className={`border rounded-2xl p-6 transition duration-300 hover:scale-105 ${
              darkMode
                ? "border-gray-700 hover:border-white"
                : "border-gray-300 hover:border-black"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">
              📱 Responsive Design
            </h3>
            <p
              className={
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            >
              Works smoothly across desktops, tablets, and mobile
              devices.
            </p>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Our Mission
        </h2>

        <p
          className={`text-lg leading-relaxed ${
            darkMode
              ? "text-gray-300"
              : "text-gray-700"
          }`}
        >
          We believe that knowledge should be organized, accessible,
          and easy to manage. NotesHub aims to become a reliable
          companion for students and professionals by simplifying
          the process of learning and note-taking.
        </p>

        <div className="mt-10">
          <blockquote className="text-2xl italic font-semibold">
            "Don't be a problem stater, be a problem solver."
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default AboutPage;