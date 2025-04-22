import React from "react";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";
import SectionWrapper from "@/hoc/section-wrapper";
import { config } from "@/constants";

const Hero = ({ titleId, introLabel }) => {
  return (
    <header className="w-full relative md:max-w-[780px] ">
      <h2 className="text-black dark:text-white text-5xl font-semibold" id={titleId}>
        shiva
      </h2>
      <motion.div variants={zoomIn()}>
        <h2
          className={`text-[#1f1f1f] dark:text-white font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins`}
          id="education"
        >
          {`${config.role} + ${introLabel}`}
        </h2>
      </motion.div>
    </header>
  );
};

export default SectionWrapper(Hero, "hero");
