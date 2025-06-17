"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Project } from "../../../data/projects";
import Header from "../../../components/Header";

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className="inline-block mb-8 text-primary hover:underline">
            ← Back to Projects
          </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold mb-4">
                {project.title}
              </motion.h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">

            <motion.div
              className="prose prose-gray dark:prose-invert max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{project.description}</p>

              {project.features && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h2>
                  <ul className="list-disc pl-6 mb-6">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}

              {project.challenges && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    Challenges & Solutions
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">{project.challenges}</p>
                </motion.div>
              )}

              {project.link && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors inline-flex items-center gap-2">
                    View Live Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
