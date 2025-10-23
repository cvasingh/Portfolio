import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { services } from "@/constants";
import SectionWrapper from "@/hoc/section-wrapper";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-[#333333] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-[#9999a1] text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[16px] text-[#9999a1] uppercase tracking-wider font-semibold font-poppins">
          Introduction
        </p>
        <h2 className="text-[#1f1f1f] font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
          Overview
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-[#9999a1] text-[18px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TypeScript, JavaScript, and expertise in frameworks like React,
        Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable,
        and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
