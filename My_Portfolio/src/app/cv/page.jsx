"use client";

import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PageCTA from "../components/PageCTA";
import {
  FaFileDownload,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaAward,
  FaProjectDiagram,
  FaUsers,
  FaLanguage,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const CVData = {
  professional_summary:
    "Full-Stack Developer with proven experience in MERN stack development, AI integration, and agile project delivery. Passionate about building scalable web applications and mentoring junior developers. Strong background in software engineering best practices and IT support.",

  work_experience: [
    {
      role: "Software Engineer Intern",
      company: "Your Company Name",
      period: "2024 - Present",
      description:
        "Developed and maintained full-stack MERN applications with focus on performance and user experience optimization.",
      achievements: [
        "Built real-time features using WebSockets improving user engagement by 40%",
        "Implemented comprehensive test suite with 85%+ coverage using Jest and Selenium",
        "Led code reviews and mentored junior developers on best practices",
        "Optimized database queries reducing load time by 50%",
      ],
    },
    {
      role: "IT Support Specialist",
      company: "Your Company Name",
      period: "2023 - 2024",
      description:
        "Provided technical support and maintained IT infrastructure for team of 50+ users.",
      achievements: [
        "Resolved 95% of tickets within SLA targets",
        "Implemented documentation system reducing support requests by 30%",
        "Conducted training sessions for new software tools",
        "Maintained 99.8% system uptime",
      ],
    },
  ],

  education: [
    {
      degree: "BSc (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2022 - Present",
      details:
        "Higher Diploma completed 2024 | Specializing in Full-Stack Development & AI",
      gpa: "3.8/4.0",
    },
    {
      degree: "G.C.E. Advanced Level",
      institution: "Vidyakara National School, Maharagama",
      period: "2013 - 2021",
      details: "Physical Science Stream | Mathematics, Physics, ICT",
      gpa: "A+ Grade",
    },
  ],

  certifications: [
    {
      name: "IBM Applied AI Professional Certificate",
      issuer: "IBM / Coursera",
      date: "2025",
      details:
        "Comprehensive AI fundamentals, machine learning, and practical implementations",
    },
    {
      name: "Agile & Scrum Fundamentals",
      issuer: "Professional Scrum Institute",
      date: "2024",
      details: "Certified Scrum Product Owner fundamentals",
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "In Progress",
      details: "Cloud computing fundamentals and AWS services",
    },
  ],

  technical_skills: [
    {
      category: "Frontend Technologies",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend Technologies",
      skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "GraphQL"],
    },
    {
      category: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Git", "Docker", "GitHub Actions"],
    },
    {
      category: "Testing & Quality",
      skills: ["Jest", "Selenium", "SonarQube", "Postman", "Manual Testing"],
    },
    {
      category: "AI & Data",
      skills: ["IBM Watson", "TensorFlow", "Pandas", "Data Analysis"],
    },
    {
      category: "Project Management",
      skills: ["Agile/Scrum", "JIRA", "Trello", "Notion", "Confluence"],
    },
  ],

  soft_skills: [
    "Leadership & Mentoring",
    "Team Collaboration",
    "Problem Solving",
    "Communication",
    "Project Management",
    "User-Centered Design",
    "Stakeholder Management",
    "Documentation",
  ],

  languages: [
    { language: "English", proficiency: "Professional" },
    { language: "Sinhala", proficiency: "Native" },
    { language: "Tamil", proficiency: "Conversational" },
  ],

  projects_summary: [
    {
      name: "DineMate",
      description: "Restaurant management and booking system",
      tech: "MERN Stack",
      outcome: "Deployed to 5+ restaurants with 200+ active users",
    },
    {
      name: "PDF Management System",
      description: "Enterprise document handling platform",
      tech: "Spring Boot, React, MySQL",
      outcome: "Processes 1000+ documents daily with 99.8% uptime",
    },
  ],

  references:
    "Available upon request. Previous supervisors and project mentors can verify work quality and collaboration skills.",
};

export default function CVPage() {
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
              <FaFileDownload className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Curriculum Vitae
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              My CV
            </h1>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
              Professional experience, education, and qualifications showcasing
              my journey in technology and software engineering
            </p>
          </motion.div>

          {/* Download Button */}
          <motion.div
            className="flex justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="/PamalkaResumeSE.pdf"
              download="Pamalka_Nethmani_CV.pdf"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaFileDownload />
              Download CV (PDF)
            </a>
            <button
              onClick={() =>
                typeof window !== "undefined" &&
                window.open("/PamalkaResumeSE.pdf", "_blank")
              }
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaArrowRight />
              Preview CV
            </button>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <HiSparkles className="text-blue-400 text-2xl flex-shrink-0 mt-2" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-300">
                  Professional Summary
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {CVData.professional_summary}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-blue-400 text-3xl" />
              <h2 className="text-4xl font-bold">Work Experience</h2>
            </div>

            <div className="space-y-6">
              {CVData.work_experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1, duration: 0.6 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-300">
                        {exp.role}
                      </h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-purple-400 text-3xl" />
              <h2 className="text-4xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              {CVData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + idx * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-purple-300 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-300">{edu.details}</p>
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg text-sm font-semibold">
                      {edu.gpa}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-3">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaAward className="text-green-400 text-3xl" />
              <h2 className="text-4xl font-bold">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CVData.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + idx * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-green-300 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 mb-2">{cert.issuer}</p>
                  <p className="text-gray-300 text-sm mb-3">{cert.details}</p>
                  <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-lg text-xs font-semibold">
                    {cert.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technical Skills */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaCode className="text-cyan-400 text-3xl" />
              <h2 className="text-4xl font-bold">Technical Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CVData.technical_skills.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + idx * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-lg font-bold text-cyan-300 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-lg text-sm font-medium hover:bg-cyan-500/30 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Soft Skills */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaUsers className="text-indigo-400 text-3xl" />
              <h2 className="text-4xl font-bold">Soft Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CVData.soft_skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-400/20 rounded-lg p-4 text-center hover:border-indigo-400/40 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + idx * 0.05, duration: 0.5 }}
                >
                  <p className="text-indigo-300 font-semibold">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Languages */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaLanguage className="text-orange-400 text-3xl" />
              <h2 className="text-4xl font-bold">Languages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CVData.languages.map((lang, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-orange-400/20 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9 + idx * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-orange-300 mb-2">
                    {lang.language}
                  </h3>
                  <p className="text-gray-400">{lang.proficiency}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Summary */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaProjectDiagram className="text-pink-400 text-3xl" />
              <h2 className="text-4xl font-bold">Notable Projects</h2>
            </div>

            <div className="space-y-4">
              {CVData.projects_summary.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-pink-400/20 rounded-xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1 + idx * 0.1, duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-pink-300 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-2">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-lg text-sm">
                      {project.tech}
                    </span>
                    <p className="text-green-400 text-sm font-semibold">
                      {project.outcome}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* References */}
          <motion.div
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-300">
              References
            </h2>
            <p className="text-gray-300 leading-relaxed">{CVData.references}</p>
          </motion.div>
        </div>
      </section>

      <PageCTA />
      <Footer />
    </div>
  );
}
