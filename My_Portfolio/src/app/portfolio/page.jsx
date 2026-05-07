"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PageCTA from "../components/PageCTA";
import {
  FaUserGraduate,
  FaClipboardList,
  FaRoad,
  FaCertificate,
  FaLightbulb,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaStar,
  FaTrophy,
  FaPlay,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { MdOutlineInsights, MdPlayArrow } from "react-icons/md";
import { HiAcademicCap, HiSparkles } from "react-icons/hi";

const reflectiveEntries = [
  {
    title: "Skill Development Through Practice",
    summary:
      "PPW provided structured opportunities to apply academic knowledge to real-world development challenges, significantly improving my technical and professional capabilities.",
    bullets: [
      "Applied user-centered design principles by documenting comprehensive user requirements using persona-based templates before development began. This systematic approach reduced rework on the DineMate project by approximately 30% and improved stakeholder alignment.",
      "Actively participated in sprint reviews and retrospectives, translating peer feedback into actionable technical improvements. This collaborative approach enhanced team productivity and code quality across multiple iterations.",
      "Developed effective presentation and communication skills through deliberate practice with mentors, focusing on technical clarity, audience engagement, and professional delivery. These improvements proved invaluable during industry showcases and client demonstrations.",
    ],
  },
  {
    title: "Professional Standards & Ethics",
    summary:
      "PPW emphasized the critical importance of ethical practices, professional conduct, and quality standards in software development. These principles now guide all my technical decisions.",
    bullets: [
      "Established clear accountability frameworks by mapping project artifacts to IEEE and ACM professional codes of conduct. This ensured our team understood not just what we were building, but the professional responsibility behind every decision.",
      "Implemented comprehensive test documentation including traceability matrices and quality metrics, aligning with industry best practices. This approach improved audit readiness and demonstrated commitment to professional standards.",
      "Developed the ability to justify technology choices through data-driven analysis and ROI calculations. This skill proved essential when presenting infrastructure and tooling decisions to stakeholders and team members.",
    ],
  },
  {
    title: "Resilience & Adaptive Problem-Solving",
    summary:
      "Balancing academic requirements with professional work commitments developed my ability to manage complex challenges, prioritize effectively, and maintain quality under pressure.",
    bullets: [
      "Successfully coordinated a distributed team across multiple time zones using structured workflows and shared documentation (Notion dashboards, escalation procedures). This experience taught me the value of clear communication and proactive coordination in remote environments.",
      "Overcame presentation anxiety through systematic preparation and peer feedback integration. By scripting key sections and practicing with mentors, I transformed nervousness into confidence—a skill that directly improved client interactions and project pitches.",
      "Identified and rectified accessibility gaps in our user interface following a detailed PPW usability audit. This iterative improvement process reinforced the importance of inclusive design practices and user empathy in development.",
    ],
  },
  {
    title: "Career Direction & Long-Term Vision",
    summary:
      "Through reflection and guided professional development activities, PPW helped me clarify a sustainable career path that aligns my technical strengths with meaningful impact through full-stack engineering and responsible AI development.",
    bullets: [
      "Established a mentorship circle with PPW facilitators for ongoing professional guidance. Quarterly CV reviews and career discussions have provided valuable perspective on skill development and career progression strategies.",
      "Conducted systematic reflection on my professional experiences to compare the long-term impact of software engineering versus IT support roles. This analysis reinforced my commitment to full-stack development as my primary career direction.",
      "Created a structured learning roadmap identifying critical skills (LLMs, system design, technical communication) with specific study schedules. This proactive approach ensures continuous professional growth and maintains relevance in a rapidly evolving field.",
    ],
  },
];

const careerPlan = [
  {
    horizon: "Short-Term (0-12 months)",
    title: "Foundation & Launch",
    icon: "🚀",
    goals: [
      "Secure a full-time graduate role in full-stack development (MERN or Next.js focus) with a growth-oriented organization.",
      "Complete the IBM Applied AI Professional Certificate and successfully deploy an AI-driven feature in a personal project.",
      "Establish credibility through technical writing—publish 2-3 articles on PPW learnings, software architecture, or project retrospectives.",
    ],
    actions: [
      "Enhance GitHub portfolio with detailed case studies, README documentation, and quantified project outcomes.",
      "Actively participate in professional community—attend at least one tech meetup or conference monthly to expand network.",
      "Maintain consistent technical practice through weekly coding challenges and design reviews with peers.",
    ],
    metrics:
      "Successfully secure an offer by Q4 2026, complete AI certificate with proof of project deployment, and publish at least one well-received technical article.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    horizon: "Medium-Term (1-3 years)",
    title: "Professional Growth",
    icon: "📈",
    goals: [
      "Transition into an established Software Engineer or Associate AI Engineer role with demonstrated impact on production systems.",
      "Lead a cross-functional feature team, taking ownership of technical decisions and delivering value to end users.",
      "Earn a recognized industry certification (AWS Developer Associate or Azure AI Engineer) to validate cloud expertise.",
    ],
    actions: [
      "Seek mentorship from senior engineers to understand system design, release management, and technical leadership.",
      "Contribute meaningfully to open-source projects, focusing on testing frameworks or accessibility improvements.",
      "Complete advanced coursework in distributed systems, microservices architecture, or machine learning operations.",
    ],
    metrics:
      "Successfully demonstrate feature ownership with measurable impact, obtain at least one cloud certification, and receive promotion readiness assessment.",
    color: "from-green-500 to-emerald-500",
  },
  {
    horizon: "Long-Term (3+ years)",
    title: "Leadership & Impact",
    icon: "💫",
    goals: [
      "Progress into technology leadership role where I can guide teams in building inclusive, AI-enabled products that solve real problems.",
      "Establish a mentorship initiative focused on supporting women and underrepresented groups in STEM, particularly technology fields.",
      "Drive innovation through projects combining artificial intelligence, sustainability, and social impact in developing economies.",
    ],
    actions: [
      "Pursue formal leadership training programs offered by industry partners or established learning institutions.",
      "Actively mentor junior developers and contribute to team knowledge management through documentation and guided code reviews.",
      "Prototype AI-driven applications addressing social challenges and publish findings as technical whitepapers or research papers.",
    ],
    metrics:
      "Lead a team of 5+ engineers, establish a structured mentorship cohort with measurable outcomes, and bring at least one innovation project to stakeholder adoption.",
    color: "from-purple-500 to-pink-500",
  },
];

const skillsToDevelop = [
  "Cloud-native deployment (AWS, Azure)",
  "Data storytelling & stakeholder facilitation",
  "Advanced TypeScript and system design",
  "Responsible AI practices and model governance",
  "Business writing for executive summaries",
];

const certificationPlan = [
  "IBM Applied AI Professional Certificate (completed 2025)",
  "AWS Certified Developer Associate (target 2026)",
  "Google UX Design Certificate to deepen UI thinking (target 2027)",
];

const personalDetails = [
  {
    label: "Email",
    value: "nethmanipamalka@gmail.com",
    icon: <FaEnvelope className="text-blue-500" />,
    href: "mailto:nethmanipamalka@gmail.com",
  },
  {
    label: "Phone",
    value: "+94 77 058 7781",
    icon: <FaPhone className="text-blue-500" />,
  },
  {
    label: "Location",
    value: "Wasala Watta, Kottawa, Pannipitiya, Sri Lanka",
    icon: <FaMapMarkerAlt className="text-blue-500" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pamalka-nethmani-a503b62a9",
    icon: <FaLinkedin className="text-blue-500" />,
    href: "https://www.linkedin.com/in/pamalka-nethmani-a503b62a9/",
  },
  {
    label: "GitHub",
    value: "github.com/Nethmani",
    icon: <FaGithub className="text-blue-500" />,
    href: "https://github.com/Nethmani",
  },
];

const educationHistory = [
  {
    school: "Sri Lanka Institute of Information Technology (SLIIT)",
    credential: "BSc (Hons) in Information Technology",
    period: "2022 - Present",
    notes:
      "Higher Diploma completed in 2024 with focus on software engineering, currently specializing in full-stack development and AI electives.",
  },
  {
    school: "Vidyakara National School, Maharagama",
    credential: "G.C.E. Advanced Level - Physical Science Stream",
    period: "2013 - 2021",
    notes: "Built analytical foundations in Mathematics, Physics, and ICT.",
  },
];

const techSkills = [
  { name: "React", category: "Frontend", proficiency: 90, icon: "⚛️" },
  { name: "Next.js", category: "Frontend", proficiency: 88, icon: "▲" },
  { name: "JavaScript", category: "Frontend", proficiency: 92, icon: "JS" },
  { name: "TypeScript", category: "Frontend", proficiency: 85, icon: "TS" },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 90, icon: "🎨" },
  { name: "Node.js", category: "Backend", proficiency: 88, icon: "⚙️" },
  { name: "Express", category: "Backend", proficiency: 85, icon: "🔧" },
  { name: "MongoDB", category: "Database", proficiency: 87, icon: "🍃" },
  { name: "MySQL", category: "Database", proficiency: 85, icon: "🗄️" },
  { name: "Python", category: "AI & Data", proficiency: 82, icon: "🐍" },
  { name: "IBM Watson", category: "AI & Data", proficiency: 80, icon: "🤖" },
  { name: "Selenium", category: "Testing", proficiency: 83, icon: "✓" },
];

const techSkillsGrouped = [
  {
    category: "Frontend & Design",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Express", "MongoDB", "MySQL"],
  },
  {
    category: "Quality & Tooling",
    items: ["Selenium", "Postman", "SonarQube", "Git/GitHub", "Notion"],
  },
  {
    category: "AI & Data",
    items: ["Python", "IBM Watson", "LLM prompting", "TensorFlow basics"],
  },
];

const projectHighlights = [
  {
    name: "DineMate Restaurant Management System",
    stack: "MERN + Firebase",
    bullets: [
      "Architected role-based dashboards for admins, managers, and diners with secure JWT flows.",
      "Integrated 360 degree virtual tours and AI chatbot support to boost user onboarding.",
      "Automated CSV/PDF reporting and menu analytics for decision makers.",
    ],
  },
  {
    name: "Skill-Sharing & Learning Platform",
    stack: "React + Spring Boot + MySQL",
    bullets: [
      "Enabled community posts, goal tracking, and certification workflows for peer learning.",
      "Implemented Firebase storage for media-rich updates and integrated real-time chat.",
      "Introduced accessibility-first UI patterns reviewed during PPW critiques.",
    ],
  },
  {
    name: "Black Cat AI Chatbot",
    stack: "Next.js + NLP services",
    bullets: [
      "Designed conversational flows to solve math problems with context-aware prompts.",
      "Optimized knowledge retrieval and fallback messaging to keep accuracy above 90%.",
      "Packaged Figma design system into reusable components for rapid prototyping.",
    ],
  },
];

const experienceList = [
  {
    title: "Software Engineering Trainee (Industry Collaborative Project)",
    org: "SLIIT / Partner Startup",
    period: "Sep 2024 - Mar 2025",
    details: [
      "Co-led the DineMate build, aligning sprint deliverables with actual restaurant partner feedback.",
      "Owned integration tests and SonarQube quality dashboards that kept code smells under agreed thresholds.",
      "Facilitated PPW-inspired retrospectives focusing on stakeholder empathy and service quality.",
    ],
  },
  {
    title: "IT Support & Freelance Web Consultant",
    org: "Independent",
    period: "2023 - Present",
    details: [
      "Deploy and maintain responsive websites for local SMEs, ensuring >97% uptime through proactive monitoring.",
      "Provide on-site and remote troubleshooting, asset inventory, and onboarding sessions for non-technical staff.",
      "Coach peers on documentation habits and support ticket triage learned in PPW.",
    ],
  },
];

const achievements = [
  "Completed Higher Diploma in Information Technology with distinction-focused coursework.",
  "Led cross-functional squad of four to deliver the Skill-Sharing platform ahead of the academic deadline.",
  "Recognized by PPW facilitators for reflective journal quality and peer mentoring.",
];

const achievementBadges = [
  {
    icon: "🏆",
    title: "Leadership Excellence",
    description: "Led team of 4 to deliver ahead of schedule",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: "🎓",
    title: "Academic Excellence",
    description: "Distinction-focused Higher Diploma graduate",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🤝",
    title: "Mentor Recognition",
    description: "Recognized for peer mentoring & reflection",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "💡",
    title: "Innovation Driven",
    description: "Designed 3+ production-ready projects",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🚀",
    title: "Full-Stack Growth",
    description: "Master MERN & Next.js development",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: "🤖",
    title: "AI Champion",
    description: "IBM Applied AI Professional Certificate",
    color: "from-fuchsia-500 to-purple-500",
  },
];

const certificates = [
  {
    name: "IBM Applied AI Professional Certificate",
    platform: "Coursera / IBM Skills Network",
    date: "February 2025",
    icon: "🤖",
    skills: [
      "Python for automation",
      "Watson Assistant & Discovery",
      "AI lifecycle documentation",
      "Ethical AI decision making",
    ],
    impact:
      "Validated my ability to design chatbots responsibly and inspired the Black Cat AI prototype.",
    bgColor: "from-fuchsia-500/20 to-purple-500/20",
    borderColor: "border-fuchsia-500/30",
  },
  {
    name: "AWS Certified Developer Associate (Target 2026)",
    platform: "Amazon Web Services",
    date: "In Progress",
    icon: "AWS",
    skills: [
      "Serverless architecture",
      "DynamoDB & RDS databases",
      "Lambda functions",
      "API Gateway & CloudFront",
    ],
    impact: "Will validate cloud deployment & scalability expertise.",
    bgColor: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    name: "Google UX Design Certificate (Target 2027)",
    platform: "Coursera / Google",
    date: "Planned",
    icon: "🎨",
    skills: [
      "User research & personas",
      "Wireframing & prototyping",
      "Design systems & accessibility",
      "UI/UX best practices",
    ],
    impact: "Will deepen my UI/UX thinking and accessibility expertise.",
    bgColor: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
];

const careerTimeline = [
  {
    period: "0-12 Months",
    title: "Foundation & Launching Pad",
    icon: "🚀",
    milestones: [
      "Secure full-time internship (MERN/Next.js)",
      "Complete IBM Applied AI Certificate ✓",
      "Deploy small-scale LLM feature",
      "Publish 2+ technical articles",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    period: "1-3 Years",
    title: "Growth & Leadership",
    icon: "📈",
    milestones: [
      "Transition to Software Engineer role",
      "Lead cross-functional feature squad",
      "Earn AWS/Azure certification",
      "Contribute to open-source",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    period: "3+ Years",
    title: "Vision & Impact",
    icon: "💫",
    milestones: [
      "Move into technology leadership",
      "Launch STEM mentor program",
      "Drive AI innovation labs",
      "Lead team of 5+ engineers",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

const certificate = {
  name: "IBM Applied AI Professional Certificate",
  platform: "Coursera / IBM Skills Network",
  date: "Completed February 2025",
  skills: [
    "Python for automation",
    "Watson Assistant & Discovery",
    "AI lifecycle documentation",
    "Ethical AI decision making",
  ],
  impact:
    "Validated my ability to design chatbots responsibly and inspired the Black Cat AI prototype showcased in this portfolio.",
};

const creativityIdeas = [
  "Convert reflective journal entries into an illustrated timeline for the PDF version.",
  "Embed QR codes linking to live demos (DineMate, Skill-Sharing platform) on the CV page.",
  "Add a short video introduction or audio snippet summarizing PPW lessons learned.",
  "Design a mini infographics page showing goal progress bars for the career plan.",
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function PortfolioPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeSkillFilter, setActiveSkillFilter] = useState("All");

  const skillCategories = [
    "All",
    ...new Set(techSkills.map((s) => s.category)),
  ];
  const filteredSkills =
    activeSkillFilter === "All"
      ? techSkills
      : techSkills.filter((s) => s.category === activeSkillFilter);

  const downloadPDF = async () => {
    try {
      // Use browser's native print function to save as PDF
      if (typeof window !== 'undefined') {
        window.print();
      }
    } catch (error) {
      console.error("Print error:", error);
      alert("Please use your browser's print function (Ctrl+P) to save as PDF");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <NavBar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Video Modal */}
          {videoOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoOpen(false)}
            >
              <motion.div
                className="relative w-full max-w-4xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setVideoOpen(false)}
                  className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
                >
                  <FaTimes className="text-white text-xl" />
                </button>
                <video
                  className="w-full h-auto rounded-2xl bg-black"
                  controls
                  autoPlay
                  controlsList="nodownload"
                >
                  <source src="/video/introduction.mp4" type="video/mp4" />
                  <source src="/video/introduction.webm" type="video/webm" />
                  <div className="w-full aspect-video flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                    <div className="text-center text-white">
                      <MdPlayArrow className="text-6xl mx-auto mb-4" />
                      <p className="text-lg">Video Player Ready</p>
                      <p className="text-sm mt-2">
                        Add your video to get started
                      </p>
                    </div>
                  </div>
                </video>
              </motion.div>
            </motion.div>
          )}

          {/* Personal Introduction Section */}
          <motion.section
            className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <FaUserGraduate className="text-blue-400 text-3xl" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-blue-300">
                    University Portfolio
                  </p>
                  <h1 className="text-4xl font-bold text-white">
                    Introduction to Myself
                  </h1>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-slate-200">
                I am Pamalka Nethmani, an IT undergraduate at SLIIT who loves
                transforming ideas into dependable software. My strongest work
                happens where full-stack development, user-focused support, and
                responsible AI intersect. PPW amplified my appreciation for
                professional conduct, so I now treat every prototype—whether it
                is a MERN project, an automation script, or an accessibility
                fix—as an opportunity to serve real users with empathy and
                measurable quality.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {personalDetails.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-start gap-3"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-slate-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white font-semibold hover:text-blue-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Video Introduction Section */}
          <motion.section
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl border border-blue-400/30 p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col items-center gap-6 text-center">
              <button
                onClick={() => setVideoOpen(true)}
                className="group relative w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl animate-pulse"></div>
                <MdPlayArrow className="text-5xl text-white relative z-10" />
              </button>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Personal Introduction
                </h2>
                <p className="text-slate-300 text-lg">
                  Watch a 30-second video about myself & PPW journey
                </p>
              </div>
            </div>
          </motion.section>

          {/* Achievement Badges Section */}
          <motion.section
            className="bg-white text-slate-900 rounded-3xl shadow-2xl p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <HiSparkles className="text-amber-500 text-3xl" />
              <div>
                <p className="text-sm uppercase tracking-wide text-amber-600">
                  Key Achievements
                </p>
                <h2 className="text-3xl font-bold">Recognition & Badges</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {achievementBadges.map((badge) => (
                <motion.div
                  key={badge.title}
                  className={`bg-gradient-to-br ${badge.color} rounded-2xl p-6 text-center border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg`}
                  whileHover={{ y: -8 }}
                >
                  <div className="text-5xl mb-3">{badge.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-white/90 text-sm">{badge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certificates Section */}
          <motion.section
            id="certificates"
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaCertificate className="text-amber-300 text-3xl" />
              <div>
                <p className="text-sm uppercase tracking-wide text-amber-200">
                  Professional Development
                </p>
                <h2 className="text-3xl font-bold text-white">
                  Certificates & Credentials
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  className={`bg-gradient-to-br ${cert.bgColor} border ${cert.borderColor} rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-slate-300 mb-3">{cert.platform}</p>
                  <p className="text-xs text-slate-400 mb-4">{cert.date}</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
                      Skills
                    </p>
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block bg-white/10 text-white/90 text-xs px-2 py-1 rounded mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-200 italic border-t border-white/10 pt-3">
                    {cert.impact}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Dashboard Section */}
          <motion.section
            id="skills-dashboard"
            className="bg-white text-slate-900 rounded-3xl shadow-2xl p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <HiAcademicCap className="text-blue-600 text-3xl" />
              <div>
                <p className="text-sm uppercase tracking-wide text-blue-600">
                  Technical Proficiency
                </p>
                <h2 className="text-3xl font-bold">
                  Interactive Skills Dashboard
                </h2>
              </div>
            </div>

            {/* Skill Filter */}
            <div className="mb-8 flex flex-wrap gap-3">
              {skillCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveSkillFilter(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    activeSkillFilter === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{skill.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg">{skill.name}</h3>
                        <p className="text-xs text-slate-500">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-blue-600">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Career Timeline Section */}
          <motion.section
            id="career-timeline"
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaRoad className="text-emerald-300 text-3xl" />
              <div>
                <p className="text-sm uppercase tracking-wide text-emerald-200">
                  Career Roadmap
                </p>
                <h2 className="text-3xl font-bold text-white">
                  Visual Timeline & Milestones
                </h2>
              </div>
            </div>
            <div className="space-y-8">
              {careerTimeline.map((phase, idx) => (
                <motion.div
                  key={phase.period}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  {/* Timeline connector */}
                  {idx < careerTimeline.length - 1 && (
                    <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-white/50 to-transparent"></div>
                  )}

                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <motion.div
                      className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-2xl font-bold text-white border-4 border-slate-950`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {phase.icon}
                    </motion.div>

                    {/* Timeline content */}
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-emerald-300 font-semibold mb-4">
                        {phase.period}
                      </p>
                      <ul className="space-y-2">
                        {phase.milestones.map((milestone) => (
                          <li
                            key={milestone}
                            className="flex gap-2 text-slate-100"
                          >
                            <span className="text-emerald-400">✓</span>
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Download CV Section */}
          <motion.section
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaDownload className="text-white text-2xl" />
              <h2 className="text-3xl font-bold text-white">
                Download My Portfolio
              </h2>
            </div>
            <p className="text-white/90 mb-6">
              Get a formatted PDF version of my complete portfolio
            </p>
            <motion.button
              onClick={downloadPDF}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="inline mr-2" /> Download PDF
            </motion.button>
          </motion.section>

          <motion.section
            id="reflective-journal"
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                <MdOutlineInsights className="text-white text-3xl" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-blue-300">
                  Professional Reflection
                </p>
                <h2 className="text-4xl font-bold text-white">
                  PPW Learning Journey
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {reflectiveEntries.map((entry, idx) => (
                <motion.div
                  key={entry.title}
                  className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-blue-300 mb-4 leading-relaxed">
                      {entry.summary}
                    </p>
                    <ul className="space-y-3">
                      {entry.bullets.map((point, i) => (
                        <li key={i} className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                              <span className="text-white text-xs font-bold">
                                ✓
                              </span>
                            </div>
                          </div>
                          <span className="text-slate-200 text-sm leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="career-plan"
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-3 rounded-xl">
                <FaRoad className="text-white text-3xl" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-emerald-300">
                  Career Development
                </p>
                <h2 className="text-4xl font-bold text-white">
                  Strategic Career Roadmap
                </h2>
              </div>
            </div>
            <div className="space-y-8">
              {careerPlan.map((stage, idx) => (
                <motion.div
                  key={stage.horizon}
                  className={`bg-gradient-to-br ${stage.color}/10 border border-${stage.color.split(" ")[1]}/20 rounded-2xl p-8 relative overflow-hidden group`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Accent gradient */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stage.color}/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`text-5xl`}>{stage.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-1">
                          {stage.title}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {stage.horizon}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Goals */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <span className="text-xl">🎯</span> Goals
                        </h4>
                        <ul className="space-y-3">
                          {stage.goals.map((goal, i) => (
                            <li key={i} className="flex gap-3">
                              <FaStar
                                className="text-yellow-400 flex-shrink-0 mt-1"
                                size={16}
                              />
                              <span className="text-slate-200 text-sm leading-relaxed">
                                {goal}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <span className="text-xl">✓</span> Key Actions
                        </h4>
                        <ul className="space-y-3">
                          {stage.actions.map((action, i) => (
                            <li key={i} className="flex gap-3">
                              <FaArrowRight
                                className="text-cyan-400 flex-shrink-0 mt-1"
                                size={16}
                              />
                              <span className="text-slate-200 text-sm leading-relaxed">
                                {action}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Success Metrics */}
                    <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="text-lg">📊</span> Success Measures
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {stage.metrics}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Skills to Strengthen
                </h3>
                <ul className="space-y-2 text-slate-100 text-sm">
                  {skillsToDevelop.map((skill) => (
                    <li key={skill} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Certification & Learning Plan
                </h3>
                <ul className="space-y-2 text-slate-100 text-sm">
                  {certificationPlan.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-emerald-300">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="curriculum-vitae"
            className="bg-white text-slate-900 rounded-3xl shadow-2xl p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaClipboardList className="text-blue-600 text-3xl" />
              <div>
                <p className="text-sm uppercase tracking-wide text-blue-600">
                  Curriculum Vitae
                </p>
                <h2 className="text-3xl font-bold">Professional Snapshot</h2>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <div className="space-y-4">
                  {educationHistory.map((edu) => (
                    <div
                      key={edu.school}
                      className="border border-slate-200 rounded-2xl p-4"
                    >
                      <p className="font-semibold">{edu.school}</p>
                      <p className="text-sm text-slate-600">{edu.credential}</p>
                      <p className="text-sm text-slate-500">{edu.period}</p>
                      <p className="text-sm text-slate-600 mt-2">{edu.notes}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {techSkillsGrouped.map((group) => (
                    <div
                      key={group.category}
                      className="border border-slate-200 rounded-2xl p-4"
                    >
                      <p className="font-semibold mb-2">{group.category}</p>
                      <p className="text-sm text-slate-600">
                        {group.items.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Project Experience
                </h3>
                <div className="space-y-4">
                  {projectHighlights.map((project) => (
                    <div
                      key={project.name}
                      className="border border-slate-200 rounded-2xl p-4"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <p className="font-semibold">{project.name}</p>
                        <p className="text-sm text-blue-600">{project.stack}</p>
                      </div>
                      <ul className="mt-2 space-y-2 text-sm text-slate-700">
                        {project.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="text-blue-500">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Work & Internship Experience
                </h3>
                <div className="space-y-4">
                  {experienceList.map((exp) => (
                    <div
                      key={exp.title}
                      className="border border-slate-200 rounded-2xl p-4"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <p className="font-semibold">{exp.title}</p>
                        <p className="text-sm text-slate-500">{exp.period}</p>
                      </div>
                      <p className="text-sm text-blue-600">{exp.org}</p>
                      <ul className="mt-2 space-y-2 text-sm text-slate-700">
                        {exp.details.map((detail) => (
                          <li key={detail} className="flex gap-2">
                            <span className="text-blue-500">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Achievements</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {achievements.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-blue-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="evidence"
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaCertificate className="text-amber-300 text-3xl" />
              <div>
                <p className="text-sm uppercase tracking-wide text-amber-200">
                  Evidence of Skill Development
                </p>
                <h2 className="text-3xl font-bold text-white">
                  Recent Certification
                </h2>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-lg font-semibold text-white">
                {certificate.name}
              </p>
              <p className="text-sm text-slate-200">
                {certificate.platform} | {certificate.date}
              </p>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-slate-300 mb-2">
                    Skills Demonstrated
                  </h3>
                  <ul className="space-y-2 text-slate-100 text-sm">
                    {certificate.skills.map((skill) => (
                      <li key={skill} className="flex gap-2">
                        <span className="text-amber-300">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-slate-300 mb-2">
                    Impact
                  </h3>
                  <p className="text-slate-100 text-sm">{certificate.impact}</p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="bg-white text-slate-900 rounded-3xl shadow-2xl p-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaLightbulb className="text-amber-500 text-3xl" />
              <div>
                <p className="text-sm uppercase tracking-wide text-amber-500">
                  Presentation & Creativity
                </p>
                <h2 className="text-3xl font-bold">Next-Level Enhancements</h2>
              </div>
            </div>
            <p className="text-slate-700">
              To keep the submission original and visually engaging when
              exported to PDF, I plan to:
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              {creativityIdeas.map((idea) => (
                <li key={idea} className="flex gap-2">
                  <span className="text-amber-500">•</span>
                  <span>{idea}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      </main>

      {/* Page CTA - Connect to next page */}
      <PageCTA currentPage="portfolio" />

      <Footer />
    </div>
  );
}
