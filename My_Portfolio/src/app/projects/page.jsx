"use client";

import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import PageCTA from "../components/PageCTA";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 text-white pt-16 flex flex-col">
      {/* Navigation Bar */}
      <NavBar />

      {/* Page Header */}
      <motion.div
        className="text-center mt-16 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Highlighted Tag */}
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <HiAcademicCap className="text-blue-400" />
          <span className="text-sm font-medium text-blue-300">
            Academic Projects
          </span>
        </motion.div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </h1>

        {/* Underline animation */}
        <motion.div
          className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ delay: 0.5, duration: 1 }}
        ></motion.div>

        {/* Subtitle */}
        <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
          Driven by curiosity and learning, my academic projects reflect my
          growth in technology and problem-solving.
        </p>
      </motion.div>

      {/* Projects Content */}
      <Project />

      {/* Page CTA - Connect to next page */}
      <PageCTA currentPage="projects" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
