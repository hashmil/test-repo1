"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.03,
    boxShadow: "0px 0px 15px hsl(var(--primary) / 0.5)", // Softer glow effect
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95 },
};

const HeroSection = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-16"
      variants={heroVariants}
      initial="hidden"
      animate="visible">
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        variants={itemVariants}>
        {/* Using the existing .gradient-text class from globals.css */}
        <span className="gradient-text">Claude Architect</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl lg:text-2xl text-[hsl(var(--muted-foreground))] mb-10 max-w-3xl"
        variants={itemVariants}>
        Building stunning, modern web applications with a focus on user
        experience and cutting-edge technology.
      </motion.p>

      <motion.div variants={itemVariants}>
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap">
          <Link 
            href="/projects"
            className="inline-block px-8 py-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold rounded-lg text-lg
                       shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]">
            Explore Projects
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
