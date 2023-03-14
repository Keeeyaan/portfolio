import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc/index";
import { technologies } from "../constants/index";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2
          className={`dark:${styles.sectionHeadText} ${styles.sectionLightHeadText}`}
        >
          Technologies.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-lightsecondary dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following are technologies that I have used recently.
        </motion.p>
      </div>

      <div className="max-w-full mx-auto overflow-hidden flex justify-start">
        <motion.div
          className="mt-10 flex gap-10 items-center"
          animate={{ x: -1560 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {technologies.map((technology) => (
            <div className="w-20 h-20" key={technology.name}>
              <img className="w-full" src={technology.icon} />
            </div>
          ))}
          {technologies.map((technology) => (
            <div className="w-20 h-20" key={technology.name}>
              <img className="w-full" src={technology.icon} />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
