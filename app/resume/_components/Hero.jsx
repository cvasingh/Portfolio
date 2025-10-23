"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { heroStats, personalInfo } from "./config";

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
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
        <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, #000 2px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                                👋 Hello, I'm {personalInfo.name.split(" ")[0]}
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                            <span className="block">Full Stack</span>
                            <span className="block text-blue-600">Developer</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8 max-w-2xl">
                            I craft exceptional digital experiences through innovative design and cutting-edge technology.
                            Specializing in modern web applications with a focus on performance and user experience.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 active:scale-95"
                            >
                                View My Work
                            </button>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                                Get In Touch
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 mt-12">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-gray-900">50+</div>
                                <div className="text-sm text-gray-600">Projects Completed</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-gray-900">3+</div>
                                <div className="text-sm text-gray-600">Years Experience</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-gray-900">100%</div>
                                <div className="text-sm text-gray-600">Client Satisfaction</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-60 animate-pulse" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full opacity-40 animate-pulse delay-1000" />

                            {/* Profile Image Container */}
                            <div className="relative bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-1 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <div className="bg-white rounded-xl p-2">
                                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                                        <Image
                                            src="/dp.png"
                                            alt="Shiva Singh - Full Stack Developer"
                                            fill
                                            className="object-cover object-center"
                                            onLoad={() => setImageLoaded(true)}
                                            priority
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />

                                        {/* Loading state */}
                                        {!imageLoaded && (
                                            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                                <div className="text-4xl text-gray-600">👨‍💻</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Skills */}
                            <div className="absolute -left-8 top-16 bg-white px-3 py-2 rounded-lg shadow-lg border">
                                <span className="text-sm font-medium">React ⚛️</span>
                            </div>
                            <div className="absolute -right-8 top-32 bg-white px-3 py-2 rounded-lg shadow-lg border">
                                <span className="text-sm font-medium">Next.js 🚀</span>
                            </div>
                            <div className="absolute -left-4 bottom-16 bg-white px-3 py-2 rounded-lg shadow-lg border">
                                <span className="text-sm font-medium">TypeScript 💙</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm text-gray-500">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;