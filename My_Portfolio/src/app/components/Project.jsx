"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaReact, FaNodeJs, FaDatabase, FaJava, FaServer } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiReactrouter, SiJavascript, SiPostman, SiMaterialdesign, SiThemoviedatabase, SiVite, SiSpring, SiPhp, SiPython, SiKotlin, SiFigma } from 'react-icons/si';

export default function Project() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive projects per slide
  const projectsPerSlide = isMobile ? 1 : 2;

  // Calculate max slide index
  const maxSlide = Math.max(0, Math.ceil(repos.length / projectsPerSlide) - 1);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('/api/github-ordered');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error('API did not return an array:', data);
          setError(data.error || 'Failed to load repositories');
          setRepos([]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setError('Failed to load repositories');
        setRepos([]);
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };

  // Enhanced image handling function with project descriptions
  const getProjectImage = (repo) => {
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#563d7c',
      default: '#6e5494'
    };
    
    const bgColor = repo.language && colors[repo.language] ? colors[repo.language] : colors.default;
    
    // Project descriptions and details
    const projectDetails = {
      "ITPM-Project": {
        image: "/images/repos/ITPM-Project.jpg",
        description:
          "GalaxyX Cinema is a MERN stack-based movie theater management system featuring movie management, booking management, food ordering, and a movie buddy system for enhanced customer engagement.",
        displayName: "GalaxyX Cinema",
      },
      PAF_Prj: {
        image: "/images/repos/WanderVibe.png",
        description:
          "WanderVibe is a full-stack web application built for a Sri Lankan travel agency, showcasing their services, destinations, and allowing customers to make inquiries.",
        displayName: "WanderVibe",
        // homepage: 'https://wander-vibe-app.vercel.app/'
      },
      "Food-Delivery-Website": {
        image: "/images/repos/Luxury-Villa.png",
        description:
          "A movie discovery platform with search, recommendations, watchlist management, and real-time data from the TMDb API.",
        displayName: "Luxury-Villa",
      },
      CodeMaster: {
        image: "/images/repos/CodeMaster.png",
        description:
          "CodeMaster is a social platform for developers to create, share, and engage with code snippets. More than a snippet manager, it's a vibrant community for collaboration, feedback, and growth—like Facebook for coders.",
        displayName: "Code Master",
      },
      Interactix: {
        image: "/images/repos/Interactix.jpg",
        description:
          "Redesigning the Vijitha Yapa Bookstore website, Sri Lanka's renowned literary retailer, to enhance user experience and better reflect its prestigious reputation.",
        displayName: "Figma Design Prototype",
        homepage:
          "https://www.figma.com/proto/sr4R4amCijnjvOcUfrX2RB/Interactix?node-id=137-161&node-type=canvas&t=uCjn7u7biQX25GwF-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=137%3A161",
      },
      "course-registration-application": {
        image: "/images/repos/course-registration-application.png",
        description:
          "This project is a web-based student registration application that allows students to register, provide their details, and enroll in multiple study courses",
        displayName: "Course Registration Application",
      },
      "Livewire-Laravel-ToDo-App ": {
        image: "/images/repos/commerce.png",
        description:
          "A modern E-commerce web application featuring product browsing, shopping cart, secure checkout, and order management. Built with a scalable architecture and a focus on user experience.",
        displayName: "E-commerce Web Application",
      },
      BookReview: {
        image: "/images/repos/BookReview.jpg",
        description:
          "This Book Review Application allows users to view, add, edit, and delete book reviews. Each review includes the book title, author, rating (in stars), and a detailed review text. The reviews are stored in a backend database and are displayed dynamically on the frontend.",
        displayName: "Book Review Web",
      },
      "ITP-EasyRent": {
        image: "/images/repos/ITP-EasyRent.jpg",
        description:
          "The Tourism Management System in Sri Lanka enhances the travel experience for local and foreign tourists by providing a centralized platform for accessing travel information. It helps streamline trip planning with details on attractions, transport, accommodations, and events. The system promotes safe, convenient, and sustainable tourism across the island.",
        displayName: "Vehicle Rental System",
      },
      Shopping_Cart: {
        image: "/images/repos/Shopping_Cart.jpg",
        description:
          "A fully responsive To-Do List application built using the MERN (MongoDB, Express, React, Node.js) stack. This application enables users to manage their tasks effectively with features like adding, editing, deleting, and marking tasks as complete/incomplete.",
        displayName: "Shopping Cart",
        techStack: ["HTML5", "CSS3", "JavaScript", "PHP"],
      },
      notesApp: {
        image: "/images/repos/notesApp.png",
        description:
          "A simple and responsive To-Do List app built with HTML, CSS, and JavaScript. This project demonstrates basic front-end development skills and provides optional task persistence using local storage.",
        displayName: "Mobile Notes App",
        homepage: "https://to-do-list-eight-coral-95.vercel.app/",
      },
      // 'BookReview': {
      //   image: '/images/repos/BookReview.jpg',
      //   description: 'This project implements a simple monitoring system to track server performance metrics such as CPU usage, memory usage, and disk space. It triggers email alerts when usage exceeds predefined thresholds and logs metrics for analysis.',
      //   displayName: 'Book Review System',
      // },
      "PHP-Login-System": {
        image: "/images/repos/PHP-Login-System.jpg",
        description:
          "This ERP system is a web application built with PHP and MySQL to manage business operations. It includes features for customer management, inventory control, and reporting, showcasing CRUD operations and report generation.",
        displayName: "PHP Login System ",
      },
      "Login-System": {
        image: "/images/repos/Login-System.jpg",
        description:
          "The app, built with Kotlin and SQLite, helps plan academic activities by managing study plans through full CRUD operations.",
        displayName: "Java Login System",
      },
      "Android-Studio-SimpleCarGame": {
        image: "/images/repos/Android-Studio-SimpleCarGame.png",
        description:
          "A simple car game developed using Kotlin for the Mobile App Development module. The red-colored formula car must survive without crashing into the yellow-colored cars, and the user can gain scores. The high score is displayed",
        displayName: "Simple Car Game",
      },
      // 'Android-Studio-SimpleFoodApp' : {
      //   image: '/images/repos/Android-Studio-SimpleFoodApp.png',
      //   description: 'A Simple Food App using Kotlin Language',
      //   displayName: 'Simple Food App',
      // },
      // 'Shoping_Cart': {
      //   image: '/images/repos/shoping_cart.png',
      //   description: 'A simple shopping cart application allowing users to add, remove, and update products in their cart, with a responsive UI and persistent state.',
      //   displayName: 'Shopping Cart',
      //   techStack: [
      //     'HTML5',
      //     'CSS3',
      //     'JavaScript',
      //     'PHP'
      //   ]
      // },
      // 'Online-Video-Browsing-System-LoginUI': {
      //   image: '/images/repos/Online-Video-Browsing-System-LoginUI.png',
      //   description: 'Design LoginUI for web application using PHP and MySQL with OOP concepts.',
      //   displayName: 'PHP Login System',
      //   techStack: [
      //     'PHP',
      //     'MySQL',
      //     'HTML5',
      //     'CSS3',
      //     'OOP Concepts'
      //   ]
      // },
    };
    
    const project = projectDetails[repo.name] || {
      image: null,
      description: repo.description || 'A full-stack project showcasing modern web development practices and technologies.'
    };
    
    return {
      bgColor,
      repoName: project.displayName || repo.name,
      imagePath: project.image,
      description: project.description,
      homepage: project.homepage || repo.homepage,
      fallbackUrl: `https://via.placeholder.com/300x200/${bgColor.replace('#', '')}?text=${encodeURIComponent(repo.name)}`
    };
  };

  return (
    <section id="projects" className="py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6 sm:mb-8">My Projects</h2>
        {loading ? (
          <p className="text-center">Loading projects...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : repos.length === 0 ? (
          <p className="text-center">No repositories found</p>
        ) : (
          <div className="relative">
            {/* Slider Navigation */}
            {repos.length > projectsPerSlide && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
                  aria-label="Previous projects"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
                  aria-label="Next projects"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            
            {/* Project Cards Slider */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Group repos into pairs */}
                {Array.from({ length: Math.ceil(repos.length / projectsPerSlide) }).map((_, slideIndex) => {
                  const startIndex = slideIndex * projectsPerSlide;
                  const slideRepos = repos.slice(startIndex, startIndex + projectsPerSlide);
                  
                  return (
                    <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                      {slideRepos.map(repo => {
                        const projectImage = getProjectImage(repo);
                        
                        return (
                          <div
                            key={repo.id}
                            className="h-full"
                          >
                            <div className="h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] flex flex-col">
                              {/* Project Image */}
                              <div className="relative h-40 sm:h-48 w-full bg-gray-700">
                                {projectImage.imagePath ? (
                                  <Image
                                    src={projectImage.imagePath}
                                    alt={`${repo.name} preview`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  />
                                ) : (
                                  <Image
                                    src={projectImage.fallbackUrl}
                                    alt={`${repo.name} preview`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  />
                                )}
                              </div>
                              
                              {/* Project Info */}
                              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-center mb-2 sm:mb-3">
                                  <h4 className="text-xl sm:text-2xl font-semibold text-white">{projectImage.repoName}</h4>
                                  <div className="flex items-center gap-2">
                                    {repo.name === 'Interactix' ? (
                                      <a
                                        href={projectImage.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition flex items-center"
                                      >
                                        <SiFigma className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                                        Figma
                                      </a>
                                    ) : (
                                      <>
                                        <a
                                          href={repo.html_url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition flex items-center"
                                        >
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                          </svg>
                                          GitHub
                                        </a>
                                        {projectImage.homepage && (
                                          <a
                                            href={projectImage.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm sm:text-base bg-blue-500 hover:bg-blue-600 transition px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-white"
                                          >
                                            Live Demo
                                          </a>
                                        )}
                                      </>
                                    )}
                                  </div>
                                </div>
                                <div className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 flex-grow">
                                  {repo.name === 'ITPM-Project' ? (
                                    <>
                                      <p>GalaxyX Cinema is a MERN stack-based movie theater management system featuring movie management, booking management, food ordering, and a movie buddy system for enhanced customer engagement.</p>
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <FaReact className="text-[#61DAFB] text-xl mr-2" />
                                            <span>React.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaNodeJs className="text-[#339933] text-xl mr-2" />
                                            <span>Node.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiExpress className="text-white text-xl mr-2" />
                                            <span>Express.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiMongodb className="text-[#47A248] text-xl mr-2" />
                                            <span>MongoDB</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiTailwindcss className="text-[#06B6D4] text-xl mr-2" />
                                            <span>Tailwind CSS</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiBootstrap className="text-[#7952B3] text-xl mr-2" />
                                            <span>Bootstrap</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiReactrouter className="text-[#CA4245] text-xl mr-2" />
                                            <span>React Router</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiJavascript className="text-[#F7DF1E] text-xl mr-2" />
                                            <span>JavaScript</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiPostman className="text-[#FF6C37] text-xl mr-2" />
                                            <span>Postman</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaServer className="text-[#FF6C37] text-xl mr-2" />
                                            <span>REST API</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'Luxury-Villa' ? (
                                    <>
                                      <p>A modern, responsive website built with React.js and Tailwind CSS to showcase a luxury villa. Includes sections for Home, About, Services, and Contact. Deployed on Vercel for fast performance.</p>
                                      
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <FaReact className="text-[#61DAFB] text-xl mr-2" />
                                            <span>React.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiJavascript className="text-[#F7DF1E] text-xl mr-2" />
                                            <span>JavaScript</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiMaterialdesign className="text-[#0081CB] text-xl mr-2" />
                                            <span>Material-UI</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiReactrouter className="text-[#CA4245] text-xl mr-2" />
                                            <span>React Router</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaDatabase className="text-[#336791] text-xl mr-2" />
                                            <span>Local Storage</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiTailwindcss className="text-[#06B6D4] text-xl mr-2" />
                                            <span>Tailwind CSS</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'CodeMaster' ? (
                                    <>
                                      <p>CodeMaster is a social platform for developers to create, share, and engage with code snippets. More than a snippet manager, it's a vibrant community for collaboration, feedback, and growth—like Facebook for coders.</p>
                                      
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <FaReact className="text-[#61DAFB] text-xl mr-2" />
                                            <span>React.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaJava className="text-[#007396] text-xl mr-2" />
                                            <span>Java</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiSpring className="text-[#6DB33F] text-xl mr-2" />
                                            <span>Spring Boot</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiMaterialdesign className="text-[#0081CB] text-xl mr-2" />
                                            <span>Material-UI</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaServer className="text-[#FF6C37] text-xl mr-2" />
                                            <span>REST API</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiReactrouter className="text-[#CA4245] text-xl mr-2" />
                                            <span>React Router</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'course-registration-application' ? (
                                    <>
                                      <p>This project is a web-based student registration application that allows students to register, provide their details, and enroll in multiple study courses.</p>
                                      
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                                            </svg>
                                            <span>HTML</span>
                                          </div>
                                          
                                          <div className="flex items-center">
                                            <SiPhp className="text-[#777BB4] text-xl mr-2" />
                                            <span>PHP</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaDatabase className="text-[#336791] text-xl mr-2" />
                                            <span>MySQL</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                                            </svg>
                                            <span>HTML</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.003-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                                            </svg>
                                            <span>CSS</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiJavascript className="text-[#F7DF1E] text-xl mr-2" />
                                            <span>JavaScript</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'E-commerce' ? (
                                    <>
                                      <p>A modern E-commerce web application featuring product browsing, shopping cart, secure checkout, and order management. Built with a scalable architecture and a focus on user experience.</p>
                                      
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <FaReact className="text-[#61DAFB] text-xl mr-2" />
                                            <span>React.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaNodeJs className="text-[#339933] text-xl mr-2" />
                                            <span>Node.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiExpress className="text-white text-xl mr-2" />
                                            <span>Express.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiMongodb className="text-[#47A248] text-xl mr-2" />
                                            <span>MongoDB</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiTailwindcss className="text-[#06B6D4] text-xl mr-2" />
                                            <span>Tailwind CSS</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiBootstrap className="text-[#7952B3] text-xl mr-2" />
                                            <span>Bootstrap</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiReactrouter className="text-[#CA4245] text-xl mr-2" />
                                            <span>React Router</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiJavascript className="text-[#F7DF1E] text-xl mr-2" />
                                            <span>JavaScript</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiPostman className="text-[#FF6C37] text-xl mr-2" />
                                            <span>Postman</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaServer className="text-[#FF6C37] text-xl mr-2" />
                                            <span>REST API</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'BookReview' ? (
                                    <>
                                      <p>This Book Review Application allows users to view, add, edit, and delete book reviews. Each review includes the book title, author, rating (in stars), and a detailed review text. The reviews are stored in a backend database and are displayed dynamically on the frontend.</p>
                                      
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <FaReact className="text-[#61DAFB] text-xl mr-2" />
                                            <span>React.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiTailwindcss className="text-[#06B6D4] text-xl mr-2" />
                                            <span>Tailwind CSS</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiBootstrap className="text-[#7952B3] text-xl mr-2" />
                                            <span>Bootstrap</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaNodeJs className="text-[#339933] text-xl mr-2" />
                                            <span>Node.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiExpress className="text-white text-xl mr-2" />
                                            <span>Express.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiMongodb className="text-[#47A248] text-xl mr-2" />
                                            <span>MongoDB</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaServer className="text-[#FF6C37] text-xl mr-2" />
                                            <span>REST API</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiJavascript className="text-[#F7DF1E] text-xl mr-2" />
                                            <span>JavaScript</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'ITP-EasyRent' ? (
                                    <>
                                      <p>The Tourism Management System in Sri Lanka enhances the travel experience for local and foreign tourists by providing a centralized platform for accessing travel information. It helps streamline trip planning with details on attractions, transport, accommodations, and events. The system promotes safe, convenient, and sustainable tourism across the island.</p>
                                      
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <FaReact className="text-[#61DAFB] text-xl mr-2" />
                                            <span>React.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiMongodb className="text-[#47A248] text-xl mr-2" />
                                            <span>MongoDB</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaNodeJs className="text-[#339933] text-xl mr-2" />
                                            <span>Node.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiExpress className="text-white text-xl mr-2" />
                                            <span>Express.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiBootstrap className="text-[#7952B3] text-xl mr-2" />
                                            <span>Bootstrap</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.003-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                                            </svg>
                                            <span>CSS</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiPostman className="text-[#FF6C37] text-xl mr-2" />
                                            <span>REST API</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiReactrouter className="text-[#CA4245] text-xl mr-2" />
                                            <span>React Router</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'To-Do-List-MERN-Stack' ? (
                                    <>
                                      <p>A fully responsive To-Do List application built using the MERN (MongoDB, Express, React, Node.js) stack. This application enables users to manage their tasks effectively with features like adding, editing, deleting, and marking tasks as complete/incomplete.</p>
                                      
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <FaReact className="text-[#61DAFB] text-xl mr-2" />
                                            <span>React.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaNodeJs className="text-[#339933] text-xl mr-2" />
                                            <span>Node.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiExpress className="text-white text-xl mr-2" />
                                            <span>Express.js</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiMongodb className="text-[#47A248] text-xl mr-2" />
                                            <span>MongoDB</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiMongodb className="text-[#47A248] text-xl mr-2" />
                                            <span>Mongoose</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiTailwindcss className="text-[#06B6D4] text-xl mr-2" />
                                            <span>Tailwind CSS</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.31 4.917c3.97 0 7.182 3.196 7.182 7.13 0 3.933-3.212 7.13-7.182 7.13-3.97 0-7.182-3.197-7.182-7.13 0-3.934 3.212-7.13 7.182-7.13zm0 2.4c-2.64 0-4.782 2.13-4.782 4.73 0 2.6 2.142 4.73 4.782 4.73 2.64 0 4.782-2.13 4.782-4.73 0-2.6-2.142-4.73-4.782-4.73zm.09 1.44c.18 0 .33.15.33.33v1.44h1.44c.18 0 .33.15.33.33 0 .18-.15.33-.33.33h-1.44v1.44c0 .18-.15.33-.33.33-.18 0-.33-.15-.33-.33v-1.44h-1.44c-.18 0-.33-.15-.33-.33 0-.18.15-.33.33-.33h1.44v-1.44c0-.18.15-.33.33-.33z"/>
                                            </svg>
                                            <span>Axios</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'To-Do-List' ? (
                                    <>
                                      <p>A simple and responsive To-Do List app built with HTML, CSS, and JavaScript. This project demonstrates basic front-end development skills and provides optional task persistence using local storage.</p>
                                      
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                                            </svg>
                                            <span>HTML</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.003-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                                            </svg>
                                            <span>CSS</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiJavascript className="text-[#F7DF1E] text-xl mr-2" />
                                            <span>JavaScript</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaDatabase className="text-[#336791] text-xl mr-2" />
                                            <span>Local Storage</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'Interactix' ? (
                                    <>
                                      <p>Redesigning the Vijitha Yapa Bookstore website, Sri Lanka's renowned literary retailer, to enhance user experience and better reflect its prestigious reputation.</p>
                                      
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <SiFigma className="text-[#F24E1E] text-xl mr-2" />
                                            <span>Figma</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiMaterialdesign className="text-[#757575] text-xl mr-2" />
                                            <span>Material Design</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
                                            </svg>
                                            <span>UI/UX Design</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
                                            </svg>
                                            <span>Prototyping</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
                                            </svg>
                                            <span>Wireframing</span>
                                          </div>
                                          <div className="flex items-center">
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"/>
                                            </svg>
                                            <span>User Research</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'Shopping_Cart' ? (
                                    <>
                                      <p>A fully responsive Shopping Cart application built using HTML5, CSS3, JavaScript, and PHP. This application enables users to add, edit, and remove items from their cart with a clean and responsive UI.</p>
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            {/* HTML5 icon */}
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#E44D26">
                                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm16.44 6.75l-.232 2.718-10.059-.003-.23 2.622 10.059.003-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                                            </svg>
                                            <span>HTML5</span>
                                          </div>
                                          <div className="flex items-center">
                                            {/* CSS3 icon */}
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#1572B6">
                                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.003-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                                            </svg>
                                            <span>CSS3</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiJavascript className="text-[#F7DF1E] text-xl mr-2" />
                                            <span>JavaScript</span>
                                          </div>
                                          <div className="flex items-center">
                                            <SiPhp className="text-[#777BB4] text-xl mr-2" />
                                            <span>PHP</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : repo.name === 'PHP-Login-System' ? (
                                    <>
                                      <p>This ERP system is a web application built with PHP and MySQL to manage business operations. It includes features for customer management, inventory control, and reporting, showcasing CRUD operations and report generation.</p>
                                      <div className="mt-2">
                                        <strong>Tech Stack:</strong>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                          <div className="flex items-center">
                                            <SiPhp className="text-[#777BB4] text-xl mr-2" />
                                            <span>PHP</span>
                                          </div>
                                          <div className="flex items-center">
                                            <FaDatabase className="text-[#336791] text-xl mr-2" />
                                            <span>MySQL</span>
                                          </div>
                                          <div className="flex items-center">
                                            {/* HTML5 icon */}
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#E44D26">
                                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm16.44 6.75l-.232 2.718-10.059-.003-.23 2.622 10.059.003-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                                            </svg>
                                            <span>HTML5</span>
                                          </div>
                                          <div className="flex items-center">
                                            {/* CSS3 icon */}
                                            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#1572B6">
                                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.003-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                                            </svg>
                                            <span>CSS3</span>
                                          </div>
                                          <div className="flex items-center">
                                            {/* CRUD icon (simple database icon) */}
                                            <FaDatabase className="text-[#4DB33D] text-xl mr-2" />
                                            <span>CRUD Operations</span>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    <p>{projectImage.description}</p>
                                  )}
                                </div>
                                
                                {/* Stats section */}
                                <div className="flex items-center mb-3 sm:mb-4 text-xs sm:text-sm text-gray-400">
                                  {repo.stargazers_count > 0 && (
                                    <span className="flex items-center mr-3 sm:mr-4">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                      </svg>
                                      {repo.stargazers_count}
                                    </span>
                                  )}
                                  {repo.forks_count > 0 && (
                                    <span className="flex items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                      </svg>
                                      {repo.forks_count}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Slider Pagination */}
            {repos.length > projectsPerSlide && (
              <div className="flex justify-center mt-6 sm:mt-8">
                {Array.from({ length: Math.ceil(repos.length / projectsPerSlide) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`mx-1.5 sm:mx-2 h-1.5 sm:h-2 w-6 sm:w-8 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-blue-500' : 'bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
