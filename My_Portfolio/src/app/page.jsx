"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageCTA from "./components/PageCTA";
import SkillsPreview from "./components/SkillsPreview";
import RelatedPages from "./components/RelatedPages";
import {
  FaDownload,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaChevronDown,
  FaPlay,
  FaClock,
  FaCheckCircle,
  FaAward,
  FaBriefcase,
  FaUsers,
  FaGithub,
  FaLinkedin,
  FaStar,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiMongodb,
  SiSelenium,
  SiSonarqube,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import {
  featuredTechStack,
  professionalHighlights,
} from "@/data/professionalData";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    setWindowSize({
      width: typeof window !== "undefined" ? window.innerWidth : 1000,
      height: typeof window !== "undefined" ? window.innerHeight : 1000,
    });
    setMounted(true);
  }, []);

  const techStack = [
    { icon: SiReact, color: "#61DAFB", name: "React" },
    { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: SiSelenium, color: "#43B02A", name: "Selenium" },
    { icon: SiSonarqube, color: "#4E9BCD", name: "SonarQube" },
  ];

  const highlights = [
    {
      icon: FaCode,
      title: professionalHighlights.home[0].title,
      description: professionalHighlights.home[0].description,
    },
    {
      icon: FaLightbulb,
      title: professionalHighlights.home[1].title,
      description: professionalHighlights.home[1].description,
    },
    {
      icon: FaRocket,
      title: professionalHighlights.home[2].title,
      description: professionalHighlights.home[2].description,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      <NavBar />

      <section className="min-h-screen flex items-center justify-center relative pt-20">
        {/* Background Blur Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* ✅ Only render floating tech icons on client */}
        {mounted &&
          techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="absolute opacity-20 pointer-events-none"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                rotate: 0,
              }}
              animate={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                rotate: 360,
              }}
              transition={{
                duration: 20 + index * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            >
              <tech.icon size={40} color={tech.color} />
            </motion.div>
          ))}

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6 relative z-10">
          {/* Profile Image */}
          <motion.div
            className="relative group"
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-80 h-80 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-900"></div>
              </div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                <Image
                  src="/images/profile1.jpg"
                  width={304}
                  height={304}
                  alt="Vidumini Chandrasekara"
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/2 -left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <FaStar className="text-blue-400" />
                <span className="text-sm font-medium text-blue-300">
                  Full Stack Developer & Problem Solver
                </span>
              </motion.div>

              <div className="mb-6">
                <span className="text-blue-400 text-lg font-medium block">
                  Hello, I'm
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={[
                      "Pamalka",
                      2000,
                      "Pamalka Nethmani",
                      3000,
                      "A Developer",
                      2000,
                      "A IT Suppoter",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 mb-8 h-16">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    3000,
                    "IT Suppoter",
                    3000,
                    "MERN Stack Specialist",
                    3000,
                    "Problem Solver",
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                🚀 Passionate about creating reliable IT solutions, delivering
                user-friendly systems, and supporting seamless digital
                experiences through effective development and support practices.
                Let's build something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <motion.a
                  href="/PamalkaResumeSE.pdf"
                  download
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>Download CV</span>
                </motion.a>

                <motion.a
                  href="/contact"
                  className="group border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-900 text-blue-400 font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRocket className="group-hover:animate-pulse" />
                  Let's Collaborate
                </motion.a>
              </div>

              {/* <div className="flex justify-center lg:justify-start gap-6">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white border border-white/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white border border-white/20"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <FaGithub size={20} />
                </motion.a>
              </div> */}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown className="text-blue-400 text-2xl opacity-70" />
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <FaStar className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                My Professional Strengths
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What I Bring to the Table
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Combining technical expertise with problem-solving mindset to
              deliver quality solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="group relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="mb-6 inline-block">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring" }}
                    >
                      <highlight.icon className="text-2xl text-white" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <FaCode className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Technical Expertise
              </span>
            </motion.div>
            <h2 className="text-4xl font-bold mb-4 text-white">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology Stack
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized tools and frameworks I use to build scalable,
              performant applications
            </p>
          </motion.div>
        </div>
      </section>

      <SkillsPreview limit={6} showViewAll={true} />

      {/* Quick Specialties Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Specializations
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key areas where I excel and deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FaBriefcase,
                title: "Full Stack Development",
                description:
                  "End-to-end web application development using modern frameworks and best practices",
              },
              {
                icon: FaCode,
                title: "MERN Stack Specialist",
                description:
                  "Expert in MongoDB, Express, React, and Node.js for building robust applications",
              },
              {
                icon: FaCheckCircle,
                title: "Quality Assurance",
                description:
                  "Comprehensive testing strategies including automated testing and bug prevention",
              },
            ].map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -8 }}
                className="group relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-400/30 hover:border-purple-400/60 rounded-xl p-6 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <specialty.icon className="text-xl text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm border-y border-blue-400/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              By the Numbers
            </h2>
            <p className="text-gray-400">
              Metrics that showcase my commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                number: "1+",
                label: "Years Experience",
                icon: FaClock,
                description: "Growing expertise in full-stack development",
              },
              {
                number: "25+",
                label: "Projects Completed",
                icon: FaCheckCircle,
                description: "Delivered high-quality solutions",
              },
              {
                number: "10+",
                label: "Technologies",
                icon: FaCode,
                description: "Proficient with modern tech stack",
              },
              {
                number: "97%",
                label: "Client Satisfaction",
                icon: FaStar,
                description: "Consistent quality & reliability",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -8 }}
                className="group relative bg-gradient-to-br from-blue-800/40 to-purple-800/40 border border-blue-400/30 hover:border-blue-400/60 rounded-xl p-6 text-center transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <motion.div
                    className="text-blue-400 text-3xl mb-3 group-hover:text-blue-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring" }}
                  >
                    <stat.icon className="mx-auto" />
                  </motion.div>
                  <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-200 text-sm font-semibold uppercase tracking-wider mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Page CTA - Connect to next page */}
      <PageCTA currentPage="home" />

      {/* Related Pages Navigation */}
      <RelatedPages currentPage="/" />

      <Footer />
    </div>
  );
}
