import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMedal,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export default function Education() {
  const educationData = [
    {
      type: "university",
      icon: <FaGraduationCap className="text-2xl text-blue-400" />,
      institution: "Sri Lanka Institute of Information Technology",
      shortName: "SLIIT",
      location: "Malabe, Colombo, Sri Lanka",
      degree: "BSc (Hons) in Information Technology",
      specialization: "Specializing in Information Technology",
      period: "2022 – Present",
      status: "In Progress",
      achievements: [
        "Successfully completed Higher Diploma in Information Technology (2022-2024)",
        "Specialized in Software Engineering and Web Development",
        "Maintained consistent academic performance",
      ],
      highlights: [
        "Full-Stack Development",
        "Database Management",
        "Software Engineering",
        "Project Management",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      type: "school",
      icon: <FaSchool className="text-2xl text-green-400" />,
      institution: "Vidyakara National School",
      shortName: "VNS",
      location: "Maharagama, Sri Lanka",
      degree: "G.C.E Advanced Level (A/L)",
      specialization: "Physical Science Stream",
      period: "2013 – 2021",
      status: "Completed",
      achievements: [
        "G.C.E Advanced Level (A/L) - 2019-2022",
        "G.C.E Ordinary Level (O/L) - 2018",
        "Physical Science Stream specialization",
      ],
      highlights: [
        "Mathematics",
        "Physics",
        "ICT",
        "Combined Mathematics",
      ],
      gradient: "from-green-500 to-teal-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaGraduationCap className="text-4xl text-blue-400" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          My academic journey in Information Technology and foundational
          education
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-8"
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative"
          >
            {/* Timeline connector */}
            {index < educationData.length - 1 && (
              <div className="absolute left-6 top-24 w-0.5 h-16 bg-gradient-to-b from-blue-400/50 to-transparent z-0"></div>
            )}

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 relative z-10">
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${edu.gradient} shadow-lg`}
                  >
                    {edu.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {edu.institution}
                      </h3>
                      <span className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                        {edu.shortName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 mb-2">
                      <FaMapMarkerAlt className="text-sm text-blue-400" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 text-blue-400">
                    <FaCalendarAlt className="text-sm" />
                    <span className="font-semibold">{edu.period}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === "In Progress"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-green-500/20 text-green-400 border border-green-500/30"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Degree Information */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <FaBookOpen className="text-blue-400" />
                  <h4 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h4>
                </div>
                {edu.specialization && (
                  <p className="text-gray-300 ml-6">{edu.specialization}</p>
                )}
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FaMedal className="text-yellow-400" />
                  Key Focus Areas
                </h5>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <motion.span
                      key={highlightIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.5 + highlightIndex * 0.1,
                        duration: 0.4,
                      }}
                      className="bg-gray-700/50 text-gray-200 px-3 py-1 rounded-full text-sm border border-gray-600/50 hover:border-blue-400/50 transition-colors duration-300"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FaAward className="text-purple-400" />
                  Achievements
                </h5>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.7 + achievementIndex * 0.1,
                        duration: 0.5,
                      }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.gradient} opacity-5 rounded-full -mr-16 -mt-16`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${edu.gradient} opacity-5 rounded-full -ml-12 -mb-12`}
              ></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Information Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
      >
        <MdSchool className="text-4xl text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-4">
          Continuous Learning
        </h3>
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Beyond formal education, I'm committed to continuous learning through
          online courses, certifications, and hands-on projects. My education
          provides the foundation, but my passion for technology drives me to
          constantly expand my knowledge and skills.
        </p>
      </motion.div>
    </div>
  );
}
