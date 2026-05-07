"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PageCTA from "../components/PageCTA";
import {
  FaCertificate,
  FaTrophy,
  FaProjectDiagram,
  FaBook,
  FaChartLine,
  FaBullseye,
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
  FaStar,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles, HiAcademicCap } from "react-icons/hi";

const courseData = [
  {
    title: "IBM Applied AI Professional Certificate",
    issuer: "IBM / Coursera",
    completionDate: "2025",
    duration: "3 Months",
    hours: "40+ hours",
    status: "Completed",
    skills: [
      "AI Fundamentals",
      "Machine Learning Basics",
      "Data Analysis",
      "Python for AI",
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Real-world AI Applications",
    ],
    projects: [
      {
        name: "Iris Flower Classification",
        description:
          "Built ML model to classify iris flowers using supervised learning",
        outcome: "98% accuracy achieved",
        technologies: ["Python", "Scikit-learn", "Pandas"],
      },
      {
        name: "Customer Segmentation Analysis",
        description:
          "Applied unsupervised learning to segment customers by behavior",
        outcome: "Identified 5 distinct customer segments",
        technologies: ["K-means", "Data Analysis", "Visualization"],
      },
      {
        name: "Sentiment Analysis",
        description: "Developed NLP model for text sentiment classification",
        outcome: "Successfully deployed with 92% accuracy",
        technologies: ["NLP", "Python", "TensorFlow"],
      },
    ],
    impact:
      "This certification provided foundational understanding of AI/ML concepts and hands-on experience with real-world applications, enabling me to integrate AI features into web applications.",
  },
  {
    title: "Agile & Scrum Fundamentals",
    issuer: "Professional Scrum Institute",
    completionDate: "2024",
    duration: "2 Months",
    hours: "30+ hours",
    status: "Completed",
    skills: [
      "Scrum Framework",
      "Agile Methodology",
      "Sprint Planning",
      "Backlog Management",
      "Team Collaboration",
      "Risk Management",
      "Sprint Retrospectives",
    ],
    projects: [
      {
        name: "DineMate Project Management",
        description: "Led team using Scrum methodology for 3-month project",
        outcome: "Delivered on time with 95% scope completion",
        technologies: ["JIRA", "Confluence", "GitHub Projects"],
      },
    ],
    impact:
      "Gained practical experience in agile workflows and team coordination, which improved project delivery and team collaboration effectiveness.",
  },
];

const skillImprovementAreas = [
  {
    area: "Artificial Intelligence & Machine Learning",
    before: "Basic Python knowledge, no ML experience",
    after:
      "Can build, train, and deploy ML models with understanding of algorithms",
    courses: ["IBM Applied AI Professional Certificate"],
    projects: ["Customer Segmentation", "Sentiment Analysis"],
    proficiencyGain: 35,
  },
  {
    area: "Project Management & Agile",
    before: "Team member in various projects",
    after: "Understand Scrum, can lead sprints and manage backlogs effectively",
    courses: ["Agile & Scrum Fundamentals"],
    projects: ["DineMate Management"],
    proficiencyGain: 25,
  },
  {
    area: "Python Programming",
    before: "Basic syntax knowledge",
    after: "Advanced Python for data science, ML libraries, data manipulation",
    courses: ["IBM Applied AI Professional Certificate"],
    projects: ["Data Analysis", "ML Models"],
    proficiencyGain: 40,
  },
  {
    area: "Data Analysis & Visualization",
    before: "No experience with data tools",
    after: "Proficient with Pandas, NumPy, Matplotlib, and business insights",
    courses: ["IBM Applied AI Professional Certificate"],
    projects: ["Customer Segmentation", "Data Visualization"],
    proficiencyGain: 38,
  },
];

const learningOutcomes = [
  {
    icon: FaCheckCircle,
    title: "Practical Application",
    description:
      "Applied coursework directly to real projects and professional work",
  },
  {
    icon: FaLightbulb,
    title: "Problem-Solving Skills",
    description:
      "Developed ability to analyze complex problems and apply learned solutions",
  },
  {
    icon: FaUsers,
    title: "Team Collaboration",
    description:
      "Enhanced ability to work in agile teams and communicate effectively",
  },
  {
    icon: FaChartLine,
    title: "Career Growth",
    description:
      "Expanded skill set opens opportunities in AI/ML and full-stack roles",
  },
  {
    icon: FaTrophy,
    title: "Achievement Recognition",
    description:
      "Certified professional credentials demonstrating commitment to growth",
  },
  {
    icon: FaStar,
    title: "Continuous Learning",
    description:
      "Established habit of continuous professional development and upskilling",
  },
];

export default function SkillDevelopmentPage() {
  const [expandedCourse, setExpandedCourse] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white pt-16 flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
                Continuous Learning
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skill Development
            </h1>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
              Evidence of continuous learning and professional growth through
              courses, certifications, and practical project applications
            </p>
          </motion.div>

          {/* Courses Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <FaCertificate className="text-blue-400 text-3xl" />
              <h2 className="text-4xl font-bold">
                Professional Courses & Certifications
              </h2>
            </div>

            <div className="space-y-6">
              {courseData.map((course, idx) => (
                <motion.div
                  key={idx}
                  className="border border-blue-400/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                >
                  {/* Course Header */}
                  <motion.button
                    onClick={() =>
                      setExpandedCourse(expandedCourse === idx ? -1 : idx)
                    }
                    className="w-full bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-6 text-left hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-blue-300">
                            {course.title}
                          </h3>
                          <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-lg text-sm font-semibold">
                            {course.status}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-3">{course.issuer}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span>📅 {course.completionDate}</span>
                          <span>⏱️ {course.duration}</span>
                          <span>🕐 {course.hours}</span>
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          rotate: expandedCourse === idx ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaArrowRight className="text-blue-400 text-2xl" />
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* Course Details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedCourse === idx ? "auto" : 0,
                      opacity: expandedCourse === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-slate-900/30 to-slate-800/30 p-6 border-t border-blue-400/20 space-y-6">
                      {/* Skills Learned */}
                      <div>
                        <h4 className="text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2">
                          <FaCode /> Skills Learned
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-lg text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Projects */}
                      <div>
                        <h4 className="text-lg font-bold text-purple-300 mb-4 flex items-center gap-2">
                          <FaProjectDiagram /> Projects Built
                        </h4>
                        <div className="space-y-3">
                          {course.projects.map((project, i) => (
                            <div
                              key={i}
                              className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-4"
                            >
                              <h5 className="font-semibold text-purple-300 mb-1">
                                {project.name}
                              </h5>
                              <p className="text-gray-400 text-sm mb-2">
                                {project.description}
                              </p>
                              <div className="flex justify-between items-center">
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech, t) => (
                                    <span
                                      key={t}
                                      className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                                <span className="text-green-400 text-sm font-semibold">
                                  {project.outcome}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4">
                        <h4 className="text-lg font-bold text-blue-300 mb-2 flex items-center gap-2">
                          <HiSparkles /> Career Impact
                        </h4>
                        <p className="text-gray-300">{course.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skill Improvement Progress */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <FaChartLine className="text-green-400 text-3xl" />
              <h2 className="text-4xl font-bold">
                Measurable Skill Improvement
              </h2>
            </div>

            <div className="space-y-6">
              {skillImprovementAreas.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + idx * 0.1, duration: 0.6 }}
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-green-300 mb-2">
                      {skill.area}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      <span className="text-gray-500">Before: </span>
                      {skill.before}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <span className="text-green-400 font-semibold">
                        After:{" "}
                      </span>
                      {skill.after}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">
                        Proficiency Gain
                      </span>
                      <span className="text-sm font-bold text-green-400">
                        +{skill.proficiencyGain}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiencyGain}%` }}
                        transition={{ delay: 1.5 + idx * 0.1, duration: 1 }}
                      />
                    </div>
                  </div>

                  {/* Related Courses & Projects */}
                  <div className="flex flex-wrap gap-2">
                    {skill.courses.map((course, c) => (
                      <span
                        key={c}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs"
                      >
                        📚 {course}
                      </span>
                    ))}
                    {skill.projects.map((project, p) => (
                      <span
                        key={p}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        🛠️ {project}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Learning Outcomes */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <FaTrophy className="text-yellow-400 text-3xl" />
              <h2 className="text-4xl font-bold">Learning Outcomes & Impact</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningOutcomes.map((outcome, idx) => {
                const Icon = outcome.icon;
                return (
                  <motion.div
                    key={idx}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + idx * 0.1, duration: 0.6 }}
                  >
                    <Icon className="text-yellow-400 text-3xl mb-4" />
                    <h3 className="text-lg font-bold text-yellow-300 mb-2">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {outcome.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Future Learning Goals */}
          <motion.div
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <FaBullseye className="text-blue-400 text-2xl flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-300">
                  Future Learning Goals
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <strong>AWS Certified Developer Associate (2026)</strong>{" "}
                      - Expand cloud deployment and infrastructure knowledge
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Google UX Design Certificate (2027)</strong> -
                      Deepen UI/UX design thinking and user-centered approach
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Advanced System Design</strong> - Master
                      architectural patterns for scalable applications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Responsible AI & Model Governance</strong> - Lead
                      ethical AI implementation in production systems
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PageCTA />
      <Footer />
    </div>
  );
}
