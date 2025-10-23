"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeFilter, setActiveFilter] = useState("all");

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A modern, scalable e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
            image: "/api/placeholder/600/400",
            category: "web",
            technologies: ["Next.js", "React", "Stripe", "PostgreSQL", "Tailwind CSS"],
            githubUrl: "https://github.com/cvasingh",
            liveUrl: "https://demo.example.com",
            featured: true
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates, team collaboration, and advanced project tracking capabilities.",
            image: "/api/placeholder/600/400",
            category: "app",
            technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
            githubUrl: "https://github.com/cvasingh",
            liveUrl: "https://demo.example.com",
            featured: true
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Interactive weather dashboard with detailed forecasts, maps integration, and historical weather data visualization.",
            image: "/api/placeholder/600/400",
            category: "web",
            technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
            githubUrl: "https://github.com/cvasingh",
            liveUrl: "https://demo.example.com",
            featured: false
        },
        {
            id: 4,
            title: "Mobile Banking App",
            description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
            image: "/api/placeholder/600/400",
            category: "mobile",
            technologies: ["React Native", "Firebase", "Redux", "Stripe"],
            githubUrl: "https://github.com/cvasingh",
            liveUrl: "https://demo.example.com",
            featured: false
        },
        {
            id: 5,
            title: "AI Chat Interface",
            description: "Modern chat interface powered by AI with natural language processing, conversation memory, and multi-language support.",
            image: "/api/placeholder/600/400",
            category: "ai",
            technologies: ["React", "OpenAI API", "WebSocket", "TypeScript"],
            githubUrl: "https://github.com/cvasingh",
            liveUrl: "https://demo.example.com",
            featured: true
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "Personal portfolio website with advanced animations, 3D elements, and optimized performance built with modern web technologies.",
            image: "/api/placeholder/600/400",
            category: "web",
            technologies: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
            githubUrl: "https://github.com/cvasingh/portfolio",
            liveUrl: "https://cvasingh.com",
            featured: false
        }
    ];

    const filters = [
        { key: "all", label: "All Projects" },
        { key: "web", label: "Web Apps" },
        { key: "mobile", label: "Mobile Apps" },
        { key: "ai", label: "AI/ML" },
        { key: "app", label: "Desktop Apps" }
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section id="projects" className="py-20 bg-gray-50" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants}>
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                            Portfolio
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Featured <span className="text-blue-600">Projects</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A showcase of my recent work spanning web applications, mobile apps, and innovative digital solutions.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${activeFilter === filter.key
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            layout
                            whileHover={{ y: -8 }}
                            className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${project.featured ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                        >
                            {/* Project Image */}
                            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 group-hover:opacity-30 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-4xl text-gray-600">🖥️</div>
                                </div>

                                {/* Overlay with links */}
                                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                    >
                                        Live Demo
                                    </Link>
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
                                    >
                                        Code
                                    </Link>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-6">Interested in working together?</p>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 active:scale-95"
                    >
                        Let's Collaborate
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;