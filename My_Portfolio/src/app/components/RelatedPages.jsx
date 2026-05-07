"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navigationPages } from "@/data/professionalData";

export default function RelatedPages({ currentPage = "/", excludePages = [] }) {
  // Filter out current page and any excluded pages
  const relatedPages = navigationPages.filter(
    (page) => page.href !== currentPage && !excludePages.includes(page.href),
  );

  // Show 3 related pages
  const displayed = relatedPages.slice(0, 3);

  return (
    <motion.section
      className="py-8 px-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border-t border-blue-400/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 text-center text-sm mb-6 uppercase tracking-widest">
          Explore More
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayed.map((page) => (
            <Link key={page.href} href={page.href}>
              <motion.div
                className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-lg p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer h-full"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors mb-2">
                  {page.label}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {page.description}
                </p>
                <div className="mt-4 flex items-center text-blue-400 group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium">Explore →</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
