"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getAllSkills } from "@/data/skillsData";

export default function SkillsPreview({ limit = 6, showViewAll = true }) {
  const skills = getAllSkills().slice(0, limit);

  return (
    <motion.section
      className="py-8 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-white">Featured Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <p className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">
                  {skill.name}
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-2 group-hover:w-full transition-all duration-300 rounded-full"></div>
                <p className="text-gray-400 text-xs mt-2">
                  {skill.proficiency}% proficient
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {showViewAll && (
          <div className="text-center mt-8">
            <Link href="/about">
              <motion.button
                className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 mx-auto"
                whileHover={{ x: 5 }}
              >
                View All Skills →
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </motion.section>
  );
}
