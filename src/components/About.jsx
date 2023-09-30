import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import ServiceCard from "../components/ServiceCard";

const About = () => {
  return (
    <>
      <motion.div>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.5)}
        className="mt-4 text-secondary text-[18px] max-w-3xl leading-[40px] "
      >
        As a tech professional with over 5+ years of tech experience from being
        a <span>support application analyst</span> to being a
        <span> software developer.</span> I have learned to utilize cutting-edge
        development techniques through the use of React, Next JS, HTML,
        CSS/SASS, Javascript/Typescript. I have also cultivated an impressive
        skill set by having strong debugging to even having photoshop and figma
        skills. These technical skills allow me to create beautiful, dynamic,
        and responsive websites while writing clean code that is reusable. I
        thrive in collaborative environments with cross-functional teams from
        designers to software engineers to managers and even have experience
        working alongside clients.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
