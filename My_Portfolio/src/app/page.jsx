"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSelenium, SiSonarqube } from 'react-icons/si';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 flex flex-col">
      <NavBar />

      <section className="flex-grow flex items-center justify-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6">
          {/* Profile Image */}
          <motion.div
            className="w-72 h-72 rounded-full border-4 border-blue-400 shadow-2xl shadow-blue-500/40 overflow-hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/images/profile.jpg"
              width={288}
              height={288}
              alt="Profile Photo"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/288?text=Profile";
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl sm:text-5xl font-bold text-white drop-shadow-md">
              <TypeAnimation
                sequence={['Vidumini Chandrasekara', 2000, 'Vidumini Chandrasekara', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="mt-4 text-2xl sm:text-3xl font-light text-blue-200">
              <TypeAnimation
                sequence={['Full Stack Developer', 2000, 'Quality Assurance Engineer', 2000]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </p>
<br></br>

            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl">
             Passionate about building scalable web apps and ensuring flawless user experiences through quality assurance
            </p>
            
            <div className="flex justify-center lg:justify-start space-x-4 mb-4">
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 hover:text-[#00FFFF] transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 hover:text-white transition">
                <FaGithub />
              </a> */}
             
            </div>
            
            <a
              href="/Vidumini_Chandrasekara_CV.pdf"
              download
              className="bg-gradient-to-r from-blue-700 via-cyan-700 to-blue-900 hover:from-cyan-600 hover:to-blue-800 text-cyan-300 font-semibold py-2 px-5 rounded-full transition text-base shadow-lg border border-blue-800"
            >
              Download CV
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
