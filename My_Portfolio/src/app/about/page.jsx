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
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { MdWork, MdTrendingUp } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <NavBar />

      {/* Hero Section */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
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
              <HiSparkles className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Professional Developer
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.5, duration: 1 }}
            ></motion.div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with passion, precision, and
              cutting-edge technology
            </p>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 mb-16 border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/30 to-transparent rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/30 to-transparent rounded-br-3xl"></div>

            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl mr-6 shadow-lg">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Professional Summary
                </h2>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 mr-1"
                      size={16}
                    />
                  ))}
                  <span className="text-gray-400 ml-2">
                    Excellence in Development
                  </span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-200">
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

                <motion.div
                  className="flex items-center gap-4 mt-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg">
                    <span className="text-sm font-bold text-white">2+</span>
                  </div>
                  <span className="text-gray-300">Years of Experience</span>

                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg ml-4">
                    <span className="text-sm font-bold text-white">15+</span>
                  </div>
                  <span className="text-gray-300">Projects Completed</span>
                </motion.div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  Core Competencies
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      skill: "Full-Stack Web Development",
                      level: 95,
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      skill: "Quality Assurance & Testing",
                      level: 88,
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      skill: "Database Design & Management",
                      level: 90,
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      skill: "Agile Development Practices",
                      level: 85,
                      color: "from-yellow-500 to-orange-500",
                    },
                    {
                      skill: "UI/UX Design Implementation",
                      level: 80,
                      color: "from-pink-500 to-rose-500",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.skill}
                      className="space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium">
                          {item.skill}
                        </span>
                        <span className="text-sm text-gray-400">
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: 1 + index * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Highlights */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Professional Highlights
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Key strengths that drive exceptional results in every project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="group relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl mb-6 w-fit shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <highlight.icon className="text-3xl text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {highlight.description}
                    </p>

                    {/* Arrow indicator */}
                    <motion.div
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight className="text-blue-400" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 mb-16 border border-white/20 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-500/20 to-transparent rounded-tr-3xl"></div>

            <div className="flex items-center mb-10">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl mr-6 shadow-lg">
                <MdTrendingUp className="text-3xl text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Technical Expertise
                </h2>
                <p className="text-gray-400 mt-2">
                  Mastering the tools that power modern development
                </p>
              </div>
            </div>

            <div className="space-y-12">
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
                    <div className="flex items-center mb-8">
                      <h3 className="text-2xl font-bold text-white mr-4">
                        {category}
                      </h3>
                      <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full ml-4">
                        <span className="text-sm font-medium text-white">
                          {skills.length} skills
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="group bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay:
                              0.8 + categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.4,
                          }}
                          whileHover={{ scale: 1.03, y: -2 }}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 mr-4 flex items-center justify-center bg-gray-800/50 rounded-xl group-hover:bg-gray-700/50 transition-colors duration-300">
                              <skill.icon size={28} color={skill.color} />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                                {skill.name}
                              </div>
                              <div className="text-sm text-gray-400 flex items-center">
                                <span className="mr-2">
                                  {skill.proficiency}%
                                </span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <div
                                      key={i}
                                      className={`w-1 h-1 rounded-full mr-1 ${
                                        i < Math.floor(skill.proficiency / 20)
                                          ? "bg-yellow-400"
                                          : "bg-gray-600"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="relative w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                            <motion.div
                              className="absolute top-0 left-0 h-full rounded-full shadow-lg"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{
                                duration: 1.2,
                                delay:
                                  0.9 + categoryIndex * 0.1 + skillIndex * 0.05,
                                ease: "easeOut",
                              }}
                              style={{
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                                boxShadow: `0 0 15px ${skill.color}60`,
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
            className="relative text-center bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/20 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-500 to-transparent rounded-full animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-2 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <HiSparkles className="text-yellow-400" />
                <span className="text-sm font-medium text-yellow-300">
                  Ready to Collaborate
                </span>
              </motion.div>

              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                I'm always excited to take on new challenges and collaborate on
                innovative projects. Whether you're looking for a dedicated team
                member or a reliable freelance developer, I'm here to help bring
                your ideas to life.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <motion.button
                  className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View My Projects</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  className="group border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get In Touch</span>
                  <div className="w-2 h-2 bg-current rounded-full group-hover:animate-ping"></div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
