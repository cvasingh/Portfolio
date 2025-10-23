"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { technologies, funFacts, personalInfo } from "./config";

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        { name: "Frontend Development", level: 95, color: "bg-blue-500" },
        { name: "Backend Development", level: 88, color: "bg-green-500" },
        { name: "UI/UX Design", level: 82, color: "bg-purple-500" },
        { name: "DevOps & Cloud", level: 78, color: "bg-orange-500" },
    ];

    const technologies = [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "🚀" },
        { name: "TypeScript", icon: "💙" },
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "GraphQL", icon: "📊" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
        <section id="about" className="py-20 bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Content */}
                    <div>
                        <motion.div variants={itemVariants}>
                            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                                About Me
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Passionate about creating
                                <span className="text-blue-600"> digital solutions</span>
                            </h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-6 text-gray-600 mb-8">
                            <p className="text-lg leading-relaxed">
                                I'm a full-stack developer with {new Date().getFullYear() - 2021}+ years of experience crafting
                                digital experiences that combine beautiful design with robust functionality. My journey in
                                technology began with a curiosity about how things work, which evolved into a passion for
                                building solutions that make a difference.
                            </p>
                            <p className="text-lg leading-relaxed">
                                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                                projects, or sharing knowledge with the developer community. I believe in writing clean,
                                maintainable code and creating user-centered designs.
                            </p>
                        </motion.div>

                        {/* Skills Progress Bars */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
                            {skills.map((skill, index) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                        <span className="text-sm text-gray-500">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <motion.div
                                            className={`h-2 rounded-full ${skill.color}`}
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1, delay: index * 0.2 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content */}
                    <div>
                        {/* Profile Image */}
                        <motion.div variants={itemVariants} className="relative mb-8">
                            <div className="relative w-full max-w-sm mx-auto">
                                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                        <div className="text-6xl text-gray-600">👨‍💻</div>
                                    </div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-60" />
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-40" />
                            </div>
                        </motion.div>

                        {/* Technologies Grid */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Technologies I Work With</h3>
                            <div className="grid grid-cols-4 gap-4">
                                {technologies.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-shadow cursor-pointer group"
                                    >
                                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                                        <div className="text-xs font-medium text-gray-700">{tech.name}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Fun Facts */}
                        <motion.div variants={itemVariants} className="mt-8 bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fun Facts</h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <span>☕</span>
                                    <span>Powered by coffee and curiosity</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span>🌍</span>
                                    <span>Love traveling and experiencing new cultures</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span>📚</span>
                                    <span>Always learning something new</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span>🎮</span>
                                    <span>Gaming enthusiast in free time</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;