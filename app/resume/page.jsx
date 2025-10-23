"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("./_components/Navigation"), { ssr: false });
const Hero = dynamic(() => import("./_components/Hero"), { ssr: false });
const AboutSection = dynamic(() => import("./_components/AboutSection"), { ssr: false });
const ProjectsSection = dynamic(() => import("./_components/ProjectsSection"), { ssr: false });
const ExperienceSection = dynamic(() => import("./_components/ExperienceSection"), { ssr: false });
const ContactSection = dynamic(() => import("./_components/ContactSection"), { ssr: false });
const FooterSection = dynamic(() => import("./_components/FooterSection"), { ssr: false });
const SimpleBackground = dynamic(() => import("./_components/SimpleBackground"), { ssr: false });

export default function Page() {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navigation />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Suspense fallback={null}>
          <SimpleBackground />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
