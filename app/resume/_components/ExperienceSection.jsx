"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            id: 1,
            company: "Tech Innovations Inc.",
            position: "Senior Full Stack Developer",
            period: "2023 - Present",
            location: "San Francisco, CA",
            description: "Leading development of scalable web applications using modern technologies. Mentoring junior developers and architecting cloud-based solutions.",
            achievements: [
                "Improved application performance by 40% through optimization",
                "Led a team of 5 developers on a major product redesign",
                "Implemented CI/CD pipelines reducing deployment time by 60%"
            ],
            technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"]
        },
        {
            id: 2,
            company: "Digital Solutions Ltd.",
            position: "Full Stack Developer",
            period: "2022 - 2023",
            location: "New York, NY",
            description: "Developed and maintained multiple client projects ranging from e-commerce platforms to enterprise applications.",
            achievements: [
                "Built 10+ production applications serving 100k+ users",
                "Reduced bug reports by 35% through comprehensive testing",
                "Collaborated with design team to improve UX/UI consistency"
            ],
            technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "GraphQL"]
        },
        {
            id: 3,
            company: "StartupXYZ",
            position: "Frontend Developer",
            period: "2021 - 2022",
            location: "Austin, TX",
            description: "Focused on creating responsive, user-friendly interfaces for a growing SaaS platform.",
            achievements: [
                "Developed responsive UI components used across 15+ features",
                "Increased user engagement by 25% through UX improvements",
                "Mentored 2 junior developers and established code standards"
            ],
            technologies: ["React", "JavaScript", "Sass", "Jest", "Figma"]
        }
    ];

    const education = [
        {
            id: 1,
            institution: "Dr. A. P. J. Abdul Kalam Technical University",
            degree: "Bachelor of Technology in Computer Science",
            period: "2019 - 2023",
            location: "Uttar Pradesh, India",
            description: "Focused on software engineering, algorithms, and modern web technologies.",
            achievements: [
                "Graduated with First Class Honors (8.5/10 CGPA)",
                "Led university coding club with 200+ members",
                "Published research paper on web optimization techniques"
            ]
        },
        {
            id: 2,
            institution: "Sun Valley Public School",
            degree: "Higher Secondary Education",
            period: "2017 - 2019",
            location: "India",
            description: "Specialized in Mathematics, Physics, and Computer Science.",
            achievements: [
                "Top 5% of graduating class",
                "Winner of inter-school programming competition",
                "Captain of school's tech club"
            ]
        }
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
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section id="experience" className="py-20 bg-white" ref={ref}>
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
                            My Journey
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Experience & <span className="text-blue-600">Education</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A timeline of my professional growth and educational background in technology and software development.
                        </p>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Experience Timeline */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            💼 Professional Experience
                        </h3>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200"></div>

                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    variants={itemVariants}
                                    className="relative mb-12 ml-12"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-8 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                            <h4 className="text-lg font-bold text-gray-900">{exp.position}</h4>
                                            <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
                                        </div>

                                        <div className="text-blue-600 font-medium mb-1">{exp.company}</div>
                                        <div className="text-sm text-gray-500 mb-4">{exp.location}</div>

                                        <p className="text-gray-600 mb-4">{exp.description}</p>

                                        <div className="mb-4">
                                            <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-blue-600 mr-2">•</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Timeline */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            🎓 Education
                        </h3>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-200"></div>

                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    variants={itemVariants}
                                    className="relative mb-12 ml-12"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-8 top-2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>

                                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                            <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                                            <span className="text-sm text-green-600 font-medium">{edu.period}</span>
                                        </div>

                                        <div className="text-green-600 font-medium mb-1">{edu.institution}</div>
                                        <div className="text-sm text-gray-500 mb-4">{edu.location}</div>

                                        <p className="text-gray-600 mb-4">{edu.description}</p>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-900 mb-2">Achievements:</h5>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                {edu.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-green-600 mr-2">•</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Skills Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-20"
                >
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Skills</h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants} className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💻</span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Frontend Development</h4>
                            <p className="text-gray-600 text-sm">React, Next.js, Vue.js, TypeScript, Tailwind CSS</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚙️</span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Backend Development</h4>
                            <p className="text-gray-600 text-sm">Node.js, Python, PostgreSQL, MongoDB, GraphQL</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">☁️</span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">DevOps & Cloud</h4>
                            <p className="text-gray-600 text-sm">AWS, Docker, Kubernetes, CI/CD, Terraform</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;