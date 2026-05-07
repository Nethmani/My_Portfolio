"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { pageConnections } from "@/data/professionalData";

export default function PageCTA({ currentPage = "home" }) {
  const connection = pageConnections[currentPage];

  if (!connection) return null;

  return (
    <motion.section
      className="py-12 md:py-16 px-6 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-sm border-t border-blue-400/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400 text-md mb-4">{connection.description}</p>
          <Link href={connection.nextPage}>
            <motion.button
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {connection.cta}
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
