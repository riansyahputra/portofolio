"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-16 py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.15),_transparent_60%)]"></div>

      {/* Text Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
          Hi, I’m <span className="text-blue-600">Gres Audia</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-lg mx-auto md:mx-0">
          A passionate Front-End Developer who turns ideas into interactive,
          user-friendly websites using{" "}
          <span className="text-blue-600 font-semibold">React</span> &{" "}
          <span className="text-blue-600 font-semibold">Next.js</span>.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:shadow-lg hover:bg-blue-700 transition duration-200"
          >
            🚀 View My Work
          </Link>
          <Link
            href="mailto:gresaudiapasaribu@gmail.com"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-900 transition duration-200"
          >
            📬 Contact Me
          </Link>
          <a
            href="/Gres-Audia-CV.pdf"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-900 transition duration-200"
          >
            ⬇️ My CV
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-12 md:mb-0 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Glow behind image */}
        <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
