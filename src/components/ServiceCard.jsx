import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full md:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full blue-purple-gradient p-[1px] rounded-[20px]"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
