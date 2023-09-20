import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Tech = () => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.2, 1)} className="w-full">
      <h3 className="text-center text-5xl font-bold mb-4">Skills</h3>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />{" "}
            <p className="text-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
