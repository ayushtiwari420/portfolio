import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import ThemeBtn from "./ThemeBtn";
import useTheme from "../contexts/theme";

export default function Page() {
  const { themeMode } = useTheme();
  
  // --- Form Logic ---
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
      "service_b7ebzj2", 
      "template_c45ll5k", 
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "4S58NOB_nTdogCX5U"
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

  // --- Navbar Scroll Logic ---
  const [navSmall, setNavSmall] = useState(false);
  useEffect(() => {
    const handleScroll = () => setNavSmall(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">      
      {/* Navbar */}
      <nav className={`w-full fixed top-0 left-0 z-50 backdrop-blur-xl border-b transition-all duration-300
        ${navSmall ? "h-14 bg-white/80 dark:bg-slate-900/80" : "h-20 bg-white/40 dark:bg-slate-900/40"}
        border-black/5 dark:border-white/10`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-semibold cursor-pointer tracking-wide text-slate-900 dark:text-white"
          >
            Ayush
          </h1>
          
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex gap-6 font-medium text-slate-600 dark:text-slate-200">
              <li><a href="#about" className="transition hover:text-indigo-500">About</a></li>
              <li><a href="#projects" className="transition hover:text-indigo-500">Projects</a></li>
              <li><a href="#contact" className="transition hover:text-indigo-500">Contact</a></li>
            </ul>

            {/* Integration of your Theme Switcher */}
            <ThemeBtn />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <motion.section id="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="min-h-screen flex items-center bg-gradient-to-b from-indigo-100/40 via-transparent to-transparent dark:from-indigo-900/10 dark:via-transparent pt-20">
        <div className="max-w-6xl mx-auto w-full px-6 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Software <span className="text-indigo-600 dark:text-indigo-400">Developer</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Crafting high-performance web experiences and hardware solutions.</p>
            <div className="mt-8">
<a  href="/pdf/resume.pdf"  target="_blank" rel="noopener noreferrer"
  className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 transition inline-block"
>
  View CV
</a>            </div>
          </div>
          <div className="flex justify-center">
             <div className="w-64 h-64 md:w-96 md:h-96 rounded-3xl bg-white dark:bg-slate-900 p-4 shadow-2xl border border-white dark:border-slate-800 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="/img/image.png" alt="Ayush" className="w-full h-full object-cover rounded-2xl" />
             </div>
          </div>
        </div>
      </motion.section>

      {/* About */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-black/5 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">About Me</h2>
          <p className="mt-6 text-slate-600 dark:text-slate-300 text-center max-w-3xl mx-auto">
            I'm Ayush Tiwari — a software developer who enjoys turning ideas into real, working projects.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <AboutCard title="My Interests" items={["Software Development", "Hardware Models", "DSA & C++", "Machine Learning"]} />
            <AboutCard title="What I Do" items={["Create clean UI websites", "Practical hardware projects", "Problem Solving", "Continuous Learning"]} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">Projects</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Automatic Wall Painting Machine" 
              desc="A robotics-based machine that paints walls automatically using a roller mechanism." 
              link="/img/poster.pdf"
            />
            <ProjectCard 
              title="Library Management System" 
              desc="A simple CRUD web app to manage books, users, and issuing records with an admin workflow." 
              link="https://github.com/ayushtiwari420/Library-Management"
            />
            <ProjectCard 
              title="Food Recipe Finder" 
              desc="A recipe search app that lets users discover dishes based on ingredients using a public API." 
              link="https://github.com/ayushtiwari420/RecipeFinder"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white">Contact Me</h2>
          <div className="mt-12 max-w-xl mx-auto bg-white dark:bg-slate-900/30 border border-black/10 dark:border-white/10 rounded-xl p-8 shadow-2xl transition-all hover:border-indigo-400">
            <form onSubmit={sendEmail} className="space-y-4">
              <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg dark:text-slate-100 outline-none focus:border-indigo-400" required />
              <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg dark:text-slate-100 outline-none focus:border-indigo-400" required />
              <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={handleChange} className="w-full border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg dark:text-slate-100 outline-none focus:border-indigo-400" required></textarea>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-6 border-t border-white/10 "> 
      <div className="max-w-6xl mx-auto px-6 text-center"> 
      <p className="text-sm">© {new Date().getFullYear()} Ayush Tiwari — All Rights Reserved.</p>
      <div className="mt-3 flex justify-center gap-6 text-lg"> 
      <a href="https://github.com/ayushtiwari420" className="hover:text-white">GitHub</a>
      <a href="https://www.linkedin.com/in/ayush-tiwari-779947230" className="hover:text-white">LinkedIn</a> 
      <a href="https://leetcode.com/u/tiwari_ayush/" className="hover:text-white">LeetCode</a> </div> </div> 
      </footer>
    </div>
  );
}

// Helper Components for cleaner code
function AboutCard({ title, items }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="bg-white dark:bg-slate-900/40 border border-black/10 dark:border-white/10 rounded-xl p-6 shadow-lg backdrop-blur-xl">
      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{title}</h3>
      <ul className="space-y-2 text-slate-600 dark:text-slate-300">
        {items.map((item, idx) => <li key={idx}>• {item}</li>)}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ title, desc, link }) {
  return (
    <motion.div 
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeInOut" } 
      }}
      className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform-gpu"
    >
      <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{desc}</p>
      
      <button 
        onClick={(e) => {
          e.stopPropagation(); 
          window.open(link, "_blank", "noopener,noreferrer");
        }}
        className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
      >
        View Project
      </button>
    </motion.div>
  );
}
