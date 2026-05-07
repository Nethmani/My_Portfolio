"use client";

import Link from "next/link";
import { navigationPages } from "@/data/professionalData";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumb({ currentPage = "" }) {
  // Find the current page label
  const current = navigationPages.find((p) => p.href === currentPage);
  const currentLabel = current?.label || "Current";

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-6">
      <ol className="flex items-center gap-2 text-gray-400 text-sm">
        <li>
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
        </li>
        {currentPage !== "/" && (
          <>
            <li className="text-white">
              <FaChevronRight size={12} />
            </li>
            <li className="text-blue-400 font-medium">{currentLabel}</li>
          </>
        )}
      </ol>
    </nav>
  );
}
