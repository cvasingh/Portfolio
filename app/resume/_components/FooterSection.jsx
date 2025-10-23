"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" }
    ];

    const socialLinks = [
        { name: "GitHub", url: "https://github.com/cvasingh", icon: "🐙" },
        { name: "LinkedIn", url: "https://linkedin.com/in/cvasingh", icon: "💼" },
        { name: "Twitter", url: "https://twitter.com/cvasingh", icon: "🐦" },
        { name: "Instagram", url: "https://instagram.com/cvasingh", icon: "📸" }
    ];

    const resources = [
        { name: "Blog", href: "/blog" },
        { name: "Resume", href: "/resume.pdf" },
        { name: "Uses", href: "/uses" },
        { name: "Snippets", href: "/snippets" }
    ];

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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <footer className="bg-gray-900 text-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="py-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Brand Section */}
                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Shiva Singh
                                </h3>
                                <p className="text-gray-400 mt-2">Full Stack Developer & UI/UX Designer</p>
                            </div>

                            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                                Passionate about creating digital experiences that matter.
                                I build modern web applications with clean code and thoughtful design.
                            </p>

                            {/* Newsletter Signup */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
                                <div className="flex max-w-md">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="text-lg">{social.icon}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Resources */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-lg font-semibold mb-6">Resources</h4>
                            <ul className="space-y-3">
                                {resources.map((resource, index) => (
                                    <li key={index}>
                                        <a
                                            href={resource.href}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {resource.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Contact Info */}
                            <div className="mt-8">
                                <h5 className="font-medium mb-3">Get in touch</h5>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <div>📧 hello@shivasingh.dev</div>
                                    <div>📱 +91 (123) 456-7890</div>
                                    <div>📍 New Delhi, India</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="border-t border-gray-800 py-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 mb-4 md:mb-0">
                            <p>&copy; {new Date().getFullYear()} Shiva Singh. All rights reserved.</p>
                        </div>

                        <div className="flex items-center space-x-6 text-sm">
                            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <div className="text-gray-500">
                                Made with ❤️ and ☕ in India
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Back to Top Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg transition-colors z-50"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            </div>
        </footer>
    );
};

export default Footer;