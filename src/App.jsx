
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";



export default function App() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

function handleChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
}

function sendEmail(e) {
  e.preventDefault();

  emailjs.send(
    "service_b7ebzj2",      // ✅ Your service ID
    "template_c45ll5k",     // ✅ Your template ID
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    "4S58NOB_nTdogCX5U"     // ✅ Your public key
  )
  .then(() => {
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send message. Try again!");
  });
}

const [navSmall, setNavSmall] = useState(false);
useEffect(() => {
  window.addEventListener("scroll", () => {
    setNavSmall(window.scrollY > 30);
  });
}, []);


  return (
   <div className="relative min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
<nav className={`w-full fixed top-0 left-0 z-50 backdrop-blur-xl border-b border-white/10 transition-all duration-300
  ${navSmall ? "h-14 bg-slate-900/80" : "h-20 bg-slate-900/40"}
`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-4">
          <h1 
          onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
          className="text-xl font-semibold cursor-pointer tracking-wide text-white">Ayush</h1>
          <ul className="hidden md:flex gap-6 font-medium text-slate-200">
            <li><a href="#about" className="transition hover:text-indigo-400">About</a></li>
            <li><a href="#projects" className="transition hover:text-indigo-400">Projects</a></li>
            <li><a href="#contact" className="transition hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <motion.section
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/70 pt-32 backdrop-blur-lg
"
      >

        <div className="max-w-6xl mx-auto w-full px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] items-center text-center md:text-left">
            {/* Left column: name */}
            <div>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">
                Ayush <span className="text-indigo-400">Tiwari</span>
              </h1>
              
            </div>

            {/* Center column: portrait */}
      <div className="flex justify-center">
  <div className="relative w-120 h-120 md:w-120 md:h-120 bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-800 overflow-hidden shadow-2xl shadow-indigo-900/50">
    <img
      src="/img/image.png"
      alt="Ayush portrait"
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
</div>

            {/* Right column: title + resume */}
            <div className="space-y-4">
              <p className="text-2xl font-semibold text-indigo-300">Software Developer</p>
              <a
  href="/Ayush_Tiwari_Resume.pdf"
  download="Ayush_Tiwari_Resume.pdf"
  className="inline-flex items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500/10 px-6 py-3 text-indigo-100 font-medium tracking-wide hover:bg-indigo-500/20 
  transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(99,102,241,0.4)]"
>
  Download Resume
</a>

            </div>
          </div>
        </div>
      </motion.section>


      {/* About */}
      <section id="about" className="py-20 bg-slate-900 border-y border-white/5 ]
">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center">About Me</h2>

          <p className="mt-6 text-slate-300 text-center max-w-3xl mx-auto">
            I'm Ayush Tiwari — a software developer who enjoys turning ideas into real, working projects.
            Whether it's crafting interfaces with React or prototyping hardware builds, I love solving
            problems through technology.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <motion.div
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/40 border border-white/10 rounded-xl p-6 shadow-xl shadow-black/30 hover:shadow-indigo-500/30 backdrop-blur-xl"
>
              <h3 className="text-xl font-semibold mb-3 text-white">My Interests</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Software Development</li>
                <li>• Building Hardware Models</li>
                <li>• Learning DSA & C++</li>
                <li>• Machine Learning Concepts</li>
              </ul>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/40 border border-white/10 rounded-xl p-6 shadow-xl shadow-black/30 hover:shadow-indigo-500/30 backdrop-blur-xl"
>
              <h3 className="text-xl font-semibold mb-3 text-white">What I Do</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Create clean UI websites</li>
                <li>• Develop practical hardware projects</li>
                <li>• Solve real-life problems with tech</li>
                <li>• Continuously learn modern tools</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

   

      {/* Projects */}
      <section id="projects" className="py-20 bg-slate-900 border-y border-white/5" 
>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white">Projects</h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <motion.div
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/40 border border-white/10 rounded-xl p-6 shadow-xl shadow-black/30 hover:shadow-indigo-500/30 backdrop-blur-xl"
>

              <h3 className="text-xl font-semibold text-indigo-300">Automatic Wall Painting Machine</h3>
              <p className="mt-3 text-slate-300 text-sm">
                A robotics-based machine that paints walls automatically using a roller mechanism
                and a stable fan-based balancing system.
              </p>
              <button
                onClick={() => window.open("/posterfor.png", "_blank")}
                className="mt-5 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 transition"
              >
              View Detail
              </button>
            </motion.div>

            <motion.div
  whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
  transition={{ duration: 0.3 }}
  className="bg-slate-900/40 border border-white/10 rounded-xl p-6 shadow-xl shadow-black/30 hover:shadow-indigo-500/30 backdrop-blur-xl"
>
              <h3 className="text-xl font-semibold text-indigo-300">Library Management System</h3>
              <p className="mt-3 text-slate-300 text-sm">
                A simple CRUD web app to manage books, users, and issuing records with an admin workflow.
              </p>
              <button
              onClick={() => window.open("https://github.com/ayushtiwari420/Library-Management", "_blank")}
              className="mt-5 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 transition"
              >
              View Details
              </button>
            </motion.div>


            <motion.div
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/40 border border-white/10 rounded-xl p-6 shadow-xl shadow-black/30 hover:shadow-indigo-500/30 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-indigo-300">Food Recipe Finder</h3>
              <p className="mt-3 text-slate-300 text-sm">
                A recipe search app that lets users discover dishes based on ingredients using a public API.
              </p>
              <button
              onClick={() => window.open("https://github.com/ayushtiwari420/RecipeFinder", "_blank")}
              className="mt-5 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 transition"
              >
              View Details
              </button>
            </motion.div>
          </div>
        </div>
      </section>

         {/* Skills */}
      <section id="skills" className="py-20 bg-slate-950 
">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white">Skills</h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <motion.div
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/40 border border-white/10 rounded-xl p-6 shadow-xl shadow-black/30 hover:shadow-indigo-500/30 backdrop-blur-xl"
>
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">Programming Languages</h3>
              <ul className="space-y-2 text-slate-200">
                <li>• C++</li>
                <li>• JavaScript</li>
                <li>• HTML & CSS</li>
                <li>• Node.js</li>
              </ul>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/40 border border-white/10 rounded-xl p-6 shadow-xl shadow-black/30 hover:shadow-indigo-500/30 backdrop-blur-xl"
>
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">Development Tools</h3>
              <ul className="space-y-2 text-slate-200">
                <li>• React</li>
                <li>• Git & GitHub</li>
                <li>• Arduino / ESP32</li>
              </ul>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.03, rotateX: 5, rotateY: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/40 border border-white/10 rounded-xl p-6 shadow-xl shadow-black/30 hover:shadow-indigo-500/30 backdrop-blur-xl"
>
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">Areas of Interest</h3>
              <ul className="space-y-2 text-slate-200">
                <li>• Software Development</li>
                <li>• Hardware Projects</li>
                <li>• Machine Learning Basics</li>
                <li>• Artificial Intelligence</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Contact */}
<section id="contact" className="py-20 bg-slate-950 
">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-white">Contact Me</h2>

    <p className="mt-4 text-slate-300 text-center">
      Feel free to reach out for collaborations, internships, or project discussions.
    </p>

    <div
  className="mt-12 max-w-xl mx-auto bg-slate-900/30 border border-white/10 rounded-xl p-8 
  shadow-2xl shadow-black/40 transition-all duration-300
  hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]
  hover:border-indigo-400"
>


      <form onSubmit={sendEmail} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-white/10 bg-slate-900/50 p-3 rounded-lg text-slate-100 placeholder-slate-500 focus:border-indigo-400"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-white/10 bg-slate-900/50 p-3 rounded-lg text-slate-100 placeholder-slate-500 focus:border-indigo-400"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-white/10 bg-slate-900/50 p-3 rounded-lg text-slate-100 placeholder-slate-500 focus:border-indigo-400"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-400 transition"
        >
          Send Message
        </button>
      </form>

      <p className="mt-8 text-center text-slate-400">
        Or email me directly at{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushtiwari12348@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 font-semibold hover:text-indigo-400 underline cursor-pointer"
        >
          ayushtiwari12348@gmail.com
        </a>

      </p>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-6 border-t border-white/10 
">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Ayush Tiwari — All Rights Reserved.</p>

          <div className="mt-3 flex justify-center gap-6 text-lg">
            <a href="https://github.com/ayushtiwari420" className="hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/ayush-tiwari-779947230" className="hover:text-white">LinkedIn</a>
            <a href="https://leetcode.com/u/tiwari_ayush/" className="hover:text-white">LeetCode</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
