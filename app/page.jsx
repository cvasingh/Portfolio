"use client";
import Intro from "./_components/intro";
import dynamic from "next/dynamic";

const About = dynamic(() => import("./_components/about"), { ssr: false });
const Education = dynamic(() => import("./_components/education"), { ssr: false });

export default function Home() {
  return (
    <div className="">
      <Intro />
      <About />
      <Education />
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded">Hello Dark Mode</div>
    </div>
  );
}
