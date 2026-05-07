"use client";

import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PageCTA from "../components/PageCTA";
import Education from "../components/Education";
import {
  FaGraduationCap,
  FaAward,
  FaCertificate,
  FaBookOpen,
} from "react-icons/fa";
import { HiSparkles, HiAcademicCap } from "react-icons/hi";
import { MdSchool, MdTrendingUp } from "react-icons/md";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white pt-16 flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>

      <NavBar />

      {/* Hero Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <HiAcademicCap className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Academic Excellence
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </h1>
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.5, duration: 1 }}
            ></motion.div>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
              My academic journey and continuous learning path that shaped my
              expertise in technology and innovation
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              {
                icon: FaGraduationCap,
                label: "Degrees",
                value: "1+",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: FaCertificate,
                label: "Certifications",
                value: "20+",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: FaAward,
                label: "Achievements",
                value: "5+",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: FaBookOpen,
                label: "Courses",
                value: "20+",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl mb-4 mx-auto w-fit shadow-lg`}
                >
                  <stat.icon className="text-2xl text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Education Section */}
      <section className="py-10 flex-1 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-transparent rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-500/30 to-transparent rounded-br-3xl"></div>
            <div className="absolute top-1/2 right-0 w-16 h-16 bg-gradient-to-l from-cyan-500/20 to-transparent rounded-l-full"></div>

            {/* Header */}
            <motion.div
              className="flex items-center mb-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl mr-6 shadow-lg">
                <MdSchool className="text-3xl text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Academic Journey
                </h2>
                <p className="text-gray-400 mt-2">
                  Building expertise through continuous learning and growth
                </p>
              </div>
            </motion.div>

            {/* Progress indicators */}
            <motion.div
              className="flex justify-between items-center mb-8 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-4 border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-300">
                  Currently Learning
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MdTrendingUp className="text-blue-400" />
                <span className="text-sm text-gray-400">Continuous Growth</span>
              </div>
              <div className="flex items-center gap-3">
                <HiSparkles className="text-yellow-400" />
                <span className="text-sm text-gray-400">
                  Excellence Focused
                </span>
              </div>
            </motion.div>

            {/* Education Component Container */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Education />
            </motion.div>

            {/* Bottom decorative element */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3">
                <FaAward className="text-green-400" />
                <span className="text-sm font-medium text-green-300">
                  Committed to Lifelong Learning
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Learning Focus Areas */}
          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {[
              {
                title: "Technical Skills",
                description:
                  "Mastering cutting-edge technologies and frameworks",
                icon: "🚀",
                color: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-400/30",
              },
              {
                title: "Industry Knowledge",
                description:
                  "Staying updated with latest trends and best practices",
                icon: "💡",
                color: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-400/30",
              },
              {
                title: "Soft Skills",
                description:
                  "Developing leadership and communication abilities",
                icon: "🤝",
                color: "from-green-500/20 to-emerald-500/20",
                border: "border-green-400/30",
              },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                className={`bg-gradient-to-br ${area.color} backdrop-blur-lg rounded-2xl p-6 border ${area.border} hover:scale-105 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Page CTA - Connect to next page */}
      <PageCTA currentPage="education" />

      <Footer />
    </div>
  );
}
