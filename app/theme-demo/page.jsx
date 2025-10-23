"use client";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider, useTheme } from "./theme-provider";
import DecoderText from "@/components/decoder-text";
import dynamic from "next/dynamic";
import Link from "next/link";

const DisplacementSphere = dynamic(() =>
    import("../_components/displacement-sphere").then((module) => ({
        default: module.DisplacementSphere
    }))
);

function ThemeContent() {
    const { switchRef, theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                    <p className="mt-4 text-gray-600">Loading theme demo...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link
                            href="/"
                            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                        >
                            ← Back to Portfolio
                        </Link>
                        <button
                            ref={switchRef}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium"
                            onClick={toggleTheme}
                        >
                            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <DisplacementSphere />

                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8">
                        <DecoderText text="Theme Demo" delay={500} />
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
                        Experience the smooth theme transition with animated background
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Light Mode</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Clean, bright interface perfect for daytime browsing and professional environments.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dark Mode</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Elegant dark interface that reduces eye strain and saves battery on OLED displays.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
                        Theme Features
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Smooth Transitions</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Animated theme switching with custom easing and timing functions.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">💾</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Persistent Settings</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Your theme preference is saved and restored across sessions.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">🌐</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">System Integration</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Respects your system preferences while allowing manual override.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Demo */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                        Try It Out
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                        Click the theme toggle button to see the smooth transition in action
                    </p>

                    <div className="bg-white dark:bg-gray-800 p-12 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="space-y-6">
                            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-full w-3/4 mx-auto"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-full w-1/2 mx-auto"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-full w-5/6 mx-auto"></div>
                            <div className="h-8 bg-blue-200 dark:bg-blue-800 rounded-lg w-1/3 mx-auto"></div>
                        </div>
                        <p className="mt-8 text-gray-600 dark:text-gray-300">
                            This demo content changes color smoothly when you toggle themes
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function ThemeDemo() {
    return (
        <ThemeProvider>
            <ThemeContent />
        </ThemeProvider>
    );
}