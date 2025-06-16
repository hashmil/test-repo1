"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import Header from "../components/Header";
import { projects } from "../data/projects";

// Rest of your existing code remains the same

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  // Show only featured projects on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center section-padding"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}>
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 relative w-32 h-32 mx-auto">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <h1 className="text-6xl font-bold mb-6 gradient-text">
              Hi, I&apos;m Your Name
            </h1>
            <p className="text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
              A passionate Full Stack Developer crafting beautiful and
              functional web experiences
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
                View All Projects
              </Link>
              <a
                href="#contact"
                className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/10 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold">Featured Projects</h2>
              <Link
                href="/projects"
                className="text-primary hover:underline flex items-center gap-2">
                View All Projects
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}>
                  <Link href={`/projects/${project.slug}`} className="block">
                    <div className="project-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                      <div className="relative h-48">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of the sections (Skills, Contact) remain unchanged */}
      </main>
    </>
  );
}
