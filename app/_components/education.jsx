import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "@/hoc/section-wrapper";
import { textVariant } from "@/utils/motion";
import { educations } from "@/constants";
import Image from "next/image";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#eaeaec",
      color: "#292929",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
    }}
    contentArrowStyle={{
      borderRight: "7px solid  #232631"
    }}
    date={
      <div>
        <h3 className="text-[#66666e] text-[18px] font-bold font-beckman">{education.date}</h3>
      </div>
    }
    iconStyle={{ background: education.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image src={education.icon} alt={education.company_name} className="w-[60px] h-[60px] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-[#333333] text-[24px] font-bold font-beckman tracking-[2px]">{education.title}</h3>
      <p className="text-[#9999a1] text-[22px] font-semibold font-overcameBold tracking-[1px]" style={{ margin: 0 }}>
        {education.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2
          className={`text-[#1f1f1f] dark:text-white font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins sm:pl-16 pl-[2rem]`}
          id="education"
        >
          Education
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
