"use client"

import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Education from '../components/Education';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 text-white pt-16 flex flex-col">
      <NavBar />
      

      <section className="py-10">
        
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="bg-gray-800 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <Education />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}