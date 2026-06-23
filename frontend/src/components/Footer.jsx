// import {
//   FaLinkedin,
//   FaInstagram,
//   FaFacebook,
//   FaGithub,
// } from "react-icons/fa";

// export default function Footer({ darkMode }) {
//   return (
//     <footer
//       className={`
//         mt-auto
//         py-10
//         border-t
//         transition-all duration-500
//         ${
//           darkMode
//             ? "bg-slate-800 border-slate-700 text-slate-200"
//             : "bg-slate-300 border-slate-400 text-slate-800"
//         }
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

//         {/* About */}
//         <div>
//           <h3 className="font-bold text-lg mb-4">
//             About NotesHub
//           </h3>

//           <p className="leading-relaxed">
//             Built in 2026 by a Dumka Engineering Student.
//             Designed to help students organize their
//             subjects, chapters, and notes efficiently.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-bold text-lg mb-4">
//             Quick Links
//           </h3>

//           <div className="space-y-2">
//             <p className="hover:translate-x-1 transition">
//               Portfolio
//             </p>

//             <p className="hover:translate-x-1 transition">
//               GitHub
//             </p>

//             <p className="hover:translate-x-1 transition">
//               Resume
//             </p>

//             <p className="hover:translate-x-1 transition">
//               Privacy Policy
//             </p>
//           </div>
//         </div>

//         {/* Connect */}
//         <div>
//           <h3 className="font-bold text-lg mb-4">
//             Connect With Me
//           </h3>

//           <div className="flex gap-5 text-3xl">

//             <a
//               href="https://www.linkedin.com/jobs/"
//               target="_blank"
//   rel="noopener noreferrer"
//               className="hover:scale-110
// hover:text-cyan-400
// transition
// duration-300"
//             >
//               <FaLinkedin />
//             </a>

//             <a
//               href="https://www.instagram.com/yuvraj394147?igsh=c3poMjhvOWplajJm"
//              target="_blank"
//   rel="noopener noreferrer"
//               className="hover:scale-110
// hover:text-cyan-400
// transition
// duration-300"
//             >
//               <FaInstagram />
//             </a>

//             <a
//               href="https://www.facebook.com/share/1DEWkCJqgf/"
//                target="_blank"
//   rel="noopener noreferrer"
//               className="hover:scale-110
// hover:text-cyan-400
// transition
// duration-300"
//             >
//               <FaFacebook />
//             </a>

//             <a
//               href="https://github.com/yuvraj787024-design"
//               target="_blank"
//   rel="noopener noreferrer"
//               className="hover:scale-110  hover:text-cyan-400 transition duration-300"
//             >
//               <FaGithub />
//             </a>

//           </div>

          
//         </div>

//       </div>

//       <div className="text-center mt-8 text-sm opacity-70">
//         © 2026 NotesHub. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }


import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`
        mt-auto
        border-t
        transition-all
        duration-500
        ${
          darkMode
            ? "bg-slate-800 border-slate-700 text-slate-200"
            : "bg-slate-300 border-slate-400 text-slate-800"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">
              NotesHub
            </h3>

            <p className="leading-relaxed opacity-90 text-sm md:text-base">
              NotesHub is a modern platform designed to
              help students organize subjects, chapters,
              topics, and notes efficiently in one place.
            </p>

            <p className="mt-4 text-xs md:text-sm opacity-70">
              Built with ❤️ by Yuvraj Kumar
            </p>
          </div>

          {/* Features */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">
              Features
            </h3>

            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">

              <li className="hover:translate-x-2 transition duration-300">
                📚 Subject Management
              </li>

              <li className="hover:translate-x-2 transition duration-300">
                📖 Chapter Organization
              </li>

              <li className="hover:translate-x-2 transition duration-300">
                📝 Smart Notes
              </li>

              <li className="hover:translate-x-2 transition duration-300">
                🤖 AI Generated Notes
              </li>

              <li className="hover:translate-x-2 transition duration-300">
                🌙 Dark Mode Support
              </li>

            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">
              Connect With Me
            </h3>

            <div className="flex justify-center sm:justify-start gap-5 md:gap-6 text-2xl md:text-3xl">

              <a
                href="https://www.linkedin.com/jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 hover:text-cyan-400 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/yuvraj394147"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/share/1DEWkCJqgf/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 hover:text-blue-500 transition duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com/yuvraj787024-design"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 hover:text-gray-400 transition duration-300"
              >
                <FaGithub />
              </a>

            </div>

            <p className="mt-5 text-xs md:text-sm opacity-80">
              Follow for project updates, notes,
              development tips, and future releases.
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div
          className={`
            mt-8 md:mt-10
            pt-5 md:pt-6
            border-t
            text-center
            text-xs md:text-sm
            ${
              darkMode
                ? "border-slate-700"
                : "border-slate-400"
            }
          `}
        >
          © 2026 NotesHub • Designed & Developed by
          Yuvraj Kumar
        </div>

      </div>
    </footer>
  );
}