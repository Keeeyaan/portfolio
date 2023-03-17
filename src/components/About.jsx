import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-lighttertiary dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-black dark:text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2
          className={`dark:${styles.sectionHeadText} ${styles.sectionLightHeadText}`}
        >
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-lightsecondary dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My journey in web development began with the classic "Hello World"
        console output and a grain of salt of my curiosity, which ignited a deep
        passion for pursuing this career. Since then, I have continually strived
        to learn and get feedback to improve myself.
        <br />
        <br />
        As a dedicated and passionate Web Developer, I use cutting-edge
        technologies such as React and NextJS to build robust and scalable web
        applications.
        <br />
        <br />I constantly seek new opportunities to learn and grow as a
        developer. Let's work together if you want a driven and enthusiastic
        team player to help create excellent web applications!
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
