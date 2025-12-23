"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { FloatingLogo } from "@/components/FloatingLogo";



const logos = [
  'react.svg',
  'nextjs.svg',
  'nodejs.svg',
  'express.svg',
  'vitejs.svg',
  'javascript.svg',
  'java.svg',
  'c.svg',
  'python.svg',
  'mongodb.svg',
  'aws.svg',
  'figma.svg',
  'git.svg',
  'html5.svg',
  'linux.svg',
  'tailwind.svg',
  'threejs.svg',
  'unity.svg',
  'vercel.svg',
]

const skillGroups = [
  {
    title: 'Frontend & 3D',
    skills: [
      'React Native',
      'Next.js',
      'React Three Fiber / Three.js',
      'Framer Motion',
      'Tailwind CSS',
      'React js',
    ],
  },
  {
    title: 'Backend & Cloud',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'AWS EC2',
      'JWT & Role-based Auth',
    ],
  },
  {
    title: 'Database & Other',
    skills: [
      'MongoDB',
      'Firebase',
      'Git & Github'
    ],
  },
];


const projects = [
  {
    title: 'LearnEzily – Smart Learning Platform',
    description:
      'A modern e-learning platform designed for effortless learning. It offers interactive courses, personalized dashboards, and real-time progress tracking to make education accessible and engaging for everyone.',
    tech: ['React js with vite', 'Radix ui'],
    github: 'https://github.com/Mahesh7397/LearnEzily-web',
    live: 'https://learnezily.app',
  },
  {

    title: 'LearnEzily API – Scalable Backend Service',
    description:
      'A robust backend API powering the LearnEzily platform, deployed on AWS EC2 for high availability and performance. It includes secure authentication, optimized endpoints, and production-ready configurations for seamless integration with the web app.',
    tech: ['Mongo DB', 'JWT', 'Express.js','AWS (EC2,S3)'],
    github: 'https://github.com/Mahesh7397/LearnEzily-api',
  },
  {
    title: 'Personal Portfolio – Showcase of Projects & Skills',
    description:
      'A responsive and modern portfolio website designed to highlight your projects, technical skills, and achievements. Built with a clean UI, smooth navigation, and optimized performance for an engaging user experience.',
    tech: ['React Three Fiber', 'Three.js', 'Framer Motion','Next.js'],
    github: 'https://github.com/Mahesh7397/my-portfolio',
    live: '',
  },
  {
    title: 'Zoho Cliq Task Bot – Automated Task Management',
    description:
      'A smart bot built for Zoho Cliq to automate task assignments and send real-time notifications. Designed for the Cliqtrix contest, it streamlines team collaboration by reducing manual effort and improving productivity through intelligent automation.',
    tech: ['Deluge', 'Zoho Cliq', 'Automation'],
    github: 'https://github.com/Mahesh7397/Zoho-Project',
  },
  {
    title: 'SmartStudy – Mobile Learning App',
    description:
      'A feature-rich mobile application designed for interactive and personalized learning experiences. Similar to LearnEzily, SmartStudy offers course management, progress tracking, and an intuitive UI optimized for mobile devices, making education accessible on the go.',
    tech: [ 'React-Native', 'Tailwind'],
    github: 'https://github.com/Mahesh7397/smartstudy-mobile',
  },
   {
    title: 'Notes App – Simple ',
    description:
      'My first React Native project, a lightweight and user-friendly notes application. It allows users to create, edit, and manage notes seamlessly with a clean interface and smooth performance, perfect for learning and practicing mobile development fundamentals.',
    tech: [ 'React-Native', 'Asynchronous Storage'],
    github: 'https://github.com/Mahesh7397/Notes',
  },
     {
    title: 'Memusic – Simple Music Streaming App ',
    description:
      'A lightweight music application built after learning React Native, featuring a custom backend that collects music data through web scraping in JavaScript. Designed for smooth playback and an intuitive interface, Memusic demonstrates skills in mobile development, backend integration, and data scraping.',
    tech: [ 'React-Native', 'Asynchronous Storage','MongoDB','React js','Express js'],
    github: 'https://github.com/Mahesh7397/memusic-webpage',
  },
];

export default function Home() {

  const [open, setOpen] = useState(false)
  return (
    <div className="bg-background" style={{
      position: "relative",
      width: "100%",
      height: "auto"
    }}>
      <Canvas style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0
      }} camera={{ position: [0, 0, 9], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
      >
        <ambientLight intensity={0.6} />
        <Stars
          radius={120}
          depth={50}
          count={8000}    // a bit higher for density
          factor={10}      // smaller stars for crisp look
          saturation={0}
          fade
          speed={0.15}    // gentle drift
        />

        <FloatingLogo
          arr={logos}
        />

      </Canvas>
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        height: "auto"
      }}>
        <header className="sticky top-0 z-50 backdrop-blur-md sm:py-1 bg-black/0">
          <div className="max-w-7xl mx-auto px-4 bg-black/10 border-white/20 border-b rounded-3xl">
            <div className="flex h-16 items-center justify-between">

              {/* Logo */}
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Mahesh Logo"
                  width={42}
                  height={42}
                  className="drop-shadow-[0_0_12px_rgba(0,212,255,0.6)]"
                  priority
                />
                <span className="text-text font-semibold tracking-wider">
                  MAHESH
                </span>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
                {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item === 'Home' ? '' : item.toLowerCase()}`}
                    className="relative group"
                  >
                    <span className="group-hover:text-white transition">
                      {item}
                    </span>
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-400 transition-all group-hover:w-full" />
                  </Link>
                ))}
              </nav>

              {/* CTA */}
              <div className="hidden md:block">
                <Link href="#contact" className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
                  Contact
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                className="md:hidden text-white"
                onClick={() => setOpen(!open)}
              >
                {open ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Animated */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden bg-black/80 backdrop-blur-md border-t border-white/10"
              >
                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.08 },
                    },
                  }}
                  className="flex flex-col px-6 py-4 space-y-4 text-gray-300"
                >
                  {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                    <motion.div
                      key={item}
                      variants={{
                        hidden: { y: 10, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                    >
                      <Link
                        href={`#${item === 'Home' ? '' : item.toLowerCase()}`}
                        onClick={() => setOpen(false)}
                        className="block hover:text-white transition"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.a href="#contact"
                    variants={{
                      hidden: { y: 10, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    className="mt-2 px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold"
                  >
                    Contact
                  </motion.a>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        <section id="home" className="home" style={{ width: "100%", height: "100vh", position: "relative" }}>
          <div className="absolute inset-0 bg-linear-to-b from-blue-950/30  to-background/20" />
          <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <div className="max-w-4xl text-center  bg-white/2 border rounded-2xl p-8 md:p-12 ">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Hi,<br />
                <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,212,255,0.7)]">
                  I’m Maheshwaran.
                </span><br />
                <p className="text-sm md:text-base text-cyan-400 tracking-widest mb-3">
                  • Full-Stack Developer
                </p>
              </h1>
              <p className="mt-6 text-gray-300 text-sm md:text-lg leading-relaxed">
                I build immersive digital experiences—from smooth mobile apps to
                interactive 3D environments. Clean code. Dark aesthetics. High
                performance.
              </p>
            </div>
          </div>
        </section>
        <section id="about" className="about relative min-h-screen flex items-center justify-center px-6 md:px-16 bg-black/4">
             {/* Glow Background */}
    

     <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative max-w-4xl w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_80px_rgba(0,212,255,0.15)]"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold tracking-wide text-white mb-6"
        >
          ABOUT <span className="text-cyan-400">ME</span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed text-base md:text-lg mb-6"
        >
          I'm a developer who loves crafting interfaces that feel alive.
          Not just buttons and screens—motion, depth, and interaction.
        </motion.p>

        {/* Student Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed text-sm md:text-base mb-8"
        >
          Currently, I’m a <span className="text-white">final-year B.Sc. Mathematics student</span> at
          <span className="text-cyan-400"> The New College, Chennai</span>.
          My academic background helps me think logically, structure systems better,
          and approach problems with precision.
        </motion.p>

        {/* Specialization List */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="space-y-4 text-gray-200"
        >
          {[
            'Mobile apps that feel fluid',
            'Web apps that load fast',
            '3D UI that responds like a game environment',
            'Backends that scale without noise',
          ].map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-start gap-3"
            >
              <span className="text-cyan-400 mt-1">▹</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
        </section>
        <section id="skills" className="skills relative min-h-screen flex items-center justify-center px-6 md:px-16overflow-hidden" >
             <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold tracking-wide text-white mb-12"
        >
          SK<span className="text-cyan-400">ILLS</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_60px_rgba(0,212,255,0.12)]"
            >
              {/* Card Title */}
              <h3 className="text-xl font-semibold text-white mb-5">
                {group.title}
              </h3>

              {/* Skill List */}
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="space-y-3 text-gray-300"
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-cyan-400">▹</span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
        </section>
        <section id="projects" className="projects relative min-h-screen px-6 md:px-16 py-24 overflow-hidden">
        {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold tracking-wide text-white mb-14"
        >
          PRO<span className="text-cyan-400">JECTS</span>
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_60px_rgba(0,212,255,0.12)] hover:border-cyan-400/30 transition-colors"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition"
                >
                  GitHub →
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
        </section>
        <section id="contact" className="contact relative min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden">
            {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative max-w-3xl w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-14 shadow-[0_0_80px_rgba(0,212,255,0.15)]"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold tracking-wide text-white mb-6"
        >
          CON<span className="text-cyan-400">TACT</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed mb-10"
        >
          Want to collaborate, build something cool, or just say hi?
          <br className="hidden md:block" />
          My inbox and socials are always open.
        </motion.p>

        {/* Contact Links */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-6"
        >
          {/* Email */}
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center gap-4"
          >
            <span className="text-cyan-400 text-lg">▹</span>
            <a
              href="mailto:maheshwaranm116@gmail.com"
              className="text-gray-200 hover:text-cyan-400 transition"
            >
              maheshwaranm116@gmail.com
            </a>
          </motion.li>

          {/* LinkedIn */}
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center gap-4"
          >
            <span className="text-cyan-400 text-lg">▹</span>
            <a
              href="https://linkedin.com/in/maheshwaran-t-v-2a8bb22b6"
              target="_blank"
              className="text-gray-200 hover:text-cyan-400 transition"
            >
              linkedin.com/in/maheshwaran-t-v-2a8bb22b6
            </a>
          </motion.li>

          {/* GitHub */}
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center gap-4"
          >
            <span className="text-cyan-400 text-lg">▹</span>
            <a
              href="https://github.com/Mahesh7397"
              target="_blank"
              className="text-gray-200 hover:text-cyan-400 transition"
            >
              github.com/Mahesh7397
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
        </section>
      </div>
    </div>
  );
}
