"use client";

import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Education from "../components/Education";
// Import programming language icons
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiC,
  SiCplusplus,
  SiPhp,
  SiBootstrap,
  SiFigma,
  SiSelenium,
  SiSonarqube,
  SiGit,
  SiTrello,
} from "react-icons/si";
import {
  FaJava,
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import { MdWork, MdTrendingUp } from "react-icons/md";

export default function About() {
  // Define programming languages with skill levels and categories
  const programmingLanguages = [
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      proficiency: 90,
      category: "Frontend",
    },
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
      proficiency: 90,
      category: "Frontend",
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      color: "#E34F26",
      proficiency: 98,
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: SiCss3,
      color: "#1572B6",
      proficiency: 98,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      proficiency: 85,
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      color: "#7952B3",
      proficiency: 90,
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      proficiency: 88,
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      proficiency: 90,
      category: "Database",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
      proficiency: 85,
      category: "Database",
    },
    {
      name: "PHP",
      icon: SiPhp,
      color: "#777BB4",
      proficiency: 80,
      category: "Backend",
    },
    {
      name: "Java",
      icon: FaJava,
      color: "#007396",
      proficiency: 70,
      category: "Programming",
    },
    {
      name: "C",
      icon: SiC,
      color: "#A8B9CC",
      proficiency: 60,
      category: "Programming",
    },
    {
      name: "C++",
      icon: SiCplusplus,
      color: "#00599C",
      proficiency: 50,
      category: "Programming",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "#F05032",
      proficiency: 90,
      category: "Tools",
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "#F24E1E",
      proficiency: 80,
      category: "Design",
    },
    {
      name: "Selenium",
      icon: SiSelenium,
      color: "#43B02A",
      proficiency: 85,
      category: "Testing",
    },
    {
      name: "SonarQube",
      icon: SiSonarqube,
      color: "#F37020",
      proficiency: 70,
      category: "Testing",
    },
    {
      name: "Trello",
      icon: SiTrello,
      color: "#0079BF",
      proficiency: 85,
      category: "Tools",
    },
  ];

  // Professional highlights
  const highlights = [
    {
      icon: FaCode,
      title: "Full-Stack Development",
      description:
        "Proficient in MERN stack with experience in building scalable web applications",
    },
    {
      icon: MdWork,
      title: "Industry Experience",
      description:
        "Hands-on internship experience as Software Engineer and IT Support professional",
    },
    {
      icon: FaLightbulb,
      title: "Problem Solving",
      description:
        "Strong analytical skills with a focus on writing clean, maintainable code",
    },
    {
      icon: FaUsers,
      title: "Team Collaboration",
      description:
        "Experienced in agile development practices and cross-functional team work",
    },
  ];

  // Group skills by category
  const skillCategories = programmingLanguages.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white pt-16">
      <NavBar />

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-3xl text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold">Professional Summary</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg leading-relaxed mb-6 text-gray-200">
                  I'm a passionate full-stack developer specializing in modern
                  web technologies with a strong foundation in the MERN stack.
                  My journey combines technical expertise with practical
                  industry experience, focusing on creating efficient, scalable
                  solutions that drive business value.
                </p>
                <p className="text-lg leading-relaxed text-gray-200">
                  Through my professional internship experience, I've
                  contributed to real-world applications, collaborated with
                  cross-functional teams, and developed a keen eye for both
                  frontend aesthetics and backend architecture.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">
                  Core Competencies
                </h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Full-Stack Web Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Quality Assurance & Testing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Database Design & Management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    Agile Development Practices
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                    UI/UX Design Implementation
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Professional Highlights */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              Professional Highlights
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <highlight.icon className="text-4xl text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center mb-8">
              <MdTrendingUp className="text-3xl text-green-400 mr-4" />
              <h2 className="text-3xl font-bold">Technical Expertise</h2>
            </div>

            <div className="space-y-8">
              {Object.entries(skillCategories).map(
                ([category, skills], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.7 + categoryIndex * 0.1,
                      duration: 0.6,
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-blue-300 border-b border-blue-400/30 pb-2">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay:
                              0.8 + categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.4,
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 flex items-center justify-center">
                              <skill.icon size={24} color={skill.color} />
                            </div>
                            <div className="flex-1">
                              <span className="font-medium text-white">
                                {skill.name}
                              </span>
                              <div className="text-sm text-gray-400">
                                {skill.proficiency}%
                              </div>
                            </div>
                          </div>

                          <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-2 rounded-full shadow-lg"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{
                                duration: 1.2,
                                delay:
                                  0.9 + categoryIndex * 0.1 + skillIndex * 0.05,
                                ease: "easeOut",
                              }}
                              style={{
                                backgroundColor: skill.color,
                                boxShadow: `0 0 10px ${skill.color}40`,
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on
              innovative projects. Whether you're looking for a dedicated team
              member or a reliable freelance developer, I'm here to help bring
              your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.button>
              <motion.button
                className="border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
