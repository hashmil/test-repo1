"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Download, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Show only featured projects on home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Background gradient orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "4s" }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div 
              variants={fadeInUp}
              className="mb-8 relative w-40 h-40 mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-md opacity-75" />
              <Image
                src="https://picsum.photos/160/160?random=100"
                alt="Profile"
                fill
                className="rounded-full object-cover relative z-10 border-4 border-white dark:border-gray-800"
                priority
              />
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-7xl md:text-8xl font-bold mb-6 gradient-text leading-tight"
            >
              Hi, I&apos;m Alex
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              A passionate <span className="text-primary font-semibold">Full Stack Developer</span> crafting beautiful and functional web experiences with modern technologies
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 glass border px-8 py-4 rounded-full font-semibold hover:bg-accent transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-accent transition-colors"
                aria-label="Download Resume"
              >
                <Download className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section 
          id="projects" 
          className="py-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Here are some of my recent projects that showcase my skills and passion for creating amazing web experiences.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/projects/${project.slug}`} className="block">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      link={project.link}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 glass border px-8 py-4 rounded-full font-semibold hover:bg-accent transition-all"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="py-20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl font-bold mb-6 gradient-text">About Me</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
                  I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With a strong foundation in both frontend and backend development, I enjoy working 
                  on challenging projects that push the boundaries of what&apos;s possible on the web.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div className="glass p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Frontend Development
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Creating responsive and interactive user interfaces with modern frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-green-500" />
                    Backend Development
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Building robust APIs and server-side applications with scalable architectures.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "PostgreSQL", "MongoDB"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold mb-6 gradient-text">Let&apos;s Work Together</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Have an exciting project in mind? I&apos;d love to hear about it and discuss how we can bring your ideas to life.
              </p>
              
              <div className="glass p-8 rounded-2xl mb-8 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:alex@example.com"
                    className="group flex flex-col items-center p-6 glass rounded-xl hover:bg-accent transition-all"
                  >
                    <Mail className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-xs text-muted-foreground">alex@example.com</div>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-6 glass rounded-xl hover:bg-accent transition-all"
                  >
                    <Linkedin className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-medium">LinkedIn</div>
                    <div className="text-xs text-muted-foreground">Connect with me</div>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-6 glass rounded-xl hover:bg-accent transition-all"
                  >
                    <Github className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-medium">GitHub</div>
                    <div className="text-xs text-muted-foreground">View my code</div>
                  </motion.a>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="mailto:alex@example.com"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
