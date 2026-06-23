import React, { useState } from "react";
import HomeNavigation from "../components/HomeNavigation";
import Footer from "../components/Footer";

const ServicesPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const services = [
    {
      icon: "📝",
      title: "Note Management",
      description:
        "Create, edit, organize, and manage your notes efficiently in one place.",
    },
    {
      icon: "📚",
      title: "Subject Organization",
      description:
        "Arrange notes by subjects, chapters, and topics for better productivity.",
    },
    {
      icon: "🔒",
      title: "Secure Authentication",
      description:
        "Your notes remain private and protected with secure login and registration.",
    },
    {
      icon: "☁️",
      title: "Cloud Accessibility",
      description:
        "Access your notes from any device, anytime and anywhere.",
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description:
        "Optimized for speed, allowing quick access to all your study materials.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Enjoy a seamless experience across mobile, tablet, and desktop devices.",
    },
  ];

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
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Our Services
        </h1>

        <p
          className={`max-w-3xl mx-auto text-lg ${
            darkMode
              ? "text-slate-300"
              : "text-slate-600"
          }`}
        >
          NotesHub provides powerful tools to help students and
          professionals organize knowledge, manage notes, and
          stay productive every day.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className={`
                rounded-2xl
                p-8
                border
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                ${
                  darkMode
                    ? "bg-slate-800 border-slate-700 hover:border-cyan-400"
                    : "bg-white border-slate-200 hover:border-cyan-500"
                }
              `}
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p
                className={
                  darkMode
                    ? "text-slate-300"
                    : "text-slate-600"
                }
              >
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center px-6 py-12">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Organize Your Notes?
        </h2>

        <p
          className={`mb-8 ${
            darkMode
              ? "text-slate-300"
              : "text-slate-600"
          }`}
        >
          Join NotesHub today and take your productivity to the next level.
        </p>

        <button
          className="
            px-8 py-4
            bg-cyan-500
            text-white
            rounded-xl
            font-semibold
            hover:bg-cyan-600
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
          "
        >
          Get Started
        </button>
      </section>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default ServicesPage;