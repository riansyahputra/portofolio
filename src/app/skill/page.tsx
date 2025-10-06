"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";


const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Figma", icon: <FaFigma className="text-yellow-400" /> },

];

const Skill = () => {
  return (
    <section className="py-16 bg-gray-950 text-white px-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-orange-400">
          Technical Skills
        </h2>

        <div className="flex justify-center items-center gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center justify-center bg-gray-800 hover:bg-gray-700 p-6 rounded-2xl shadow-lg cursor-pointer transition-colors"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
