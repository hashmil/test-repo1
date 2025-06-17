"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 glass border-b"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
          Portfolio
        </Link>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            <Link 
              href="/#about" 
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all group-hover:w-full"></span>
            </Link>
          </div>
          
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
