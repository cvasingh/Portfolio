import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const SectionWrapper = (Component, idName) => {
  const HOC = (props) => (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="sm:p-16 xs:p-8 px-6 py-12 max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component {...props} />
    </motion.div>
  );

  return HOC;
};

export default SectionWrapper;
