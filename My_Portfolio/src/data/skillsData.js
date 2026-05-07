// Centralized Skills Data - Import icons as needed in components
export const skillsData = {
  frontend: [
    { name: "JavaScript", proficiency: 90, category: "Frontend" },
    { name: "React", proficiency: 90, category: "Frontend" },
    { name: "HTML5", proficiency: 98, category: "Frontend" },
    { name: "CSS3", proficiency: 98, category: "Frontend" },
    { name: "Tailwind CSS", proficiency: 85, category: "Frontend" },
    { name: "Bootstrap", proficiency: 90, category: "Frontend" },
  ],
  backend: [
    { name: "Node.js", proficiency: 88, category: "Backend" },
    { name: "PHP", proficiency: 80, category: "Backend" },
    { name: "Python", proficiency: 75, category: "Backend" },
  ],
  database: [
    { name: "MongoDB", proficiency: 90, category: "Database" },
    { name: "MySQL", proficiency: 85, category: "Database" },
  ],
  programming: [
    { name: "Java", proficiency: 70, category: "Programming" },
    { name: "C", proficiency: 60, category: "Programming" },
    { name: "C++", proficiency: 50, category: "Programming" },
  ],
  tools: [
    { name: "Git", proficiency: 90, category: "Tools" },
    { name: "Figma", proficiency: 80, category: "Design" },
    { name: "Trello", proficiency: 85, category: "Tools" },
    { name: "Notion", proficiency: 80, category: "Tools" },
  ],
  testing: [
    { name: "Selenium", proficiency: 85, category: "Testing" },
    { name: "Postman", proficiency: 90, category: "Testing" },
    { name: "SonarQube", proficiency: 70, category: "Testing" },
  ],
};

// Get all skills
export const getAllSkills = () => {
  const allSkills = [];
  Object.values(skillsData).forEach((category) => {
    allSkills.push(...category);
  });
  return allSkills;
};

// Get skills by category
export const getSkillsByCategory = () => {
  const categories = {};
  getAllSkills().forEach((skill) => {
    if (!categories[skill.category]) {
      categories[skill.category] = [];
    }
    categories[skill.category].push(skill);
  });
  return categories;
};
